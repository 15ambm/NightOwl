//Project ID: night-owl-50961

document.addEventListener("DOMContentLoaded", event => {const app = firebase.app();});

//Global user data for the session
var user = "";
//Contains an array of email addresses of friends
var friends = null;

function startSession() {
  //Logs into google and populates user data
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(result => {user = result.user;}).catch(console.log)

  //Sets status of user to safe and drinks to 0 on session start
  firebase.database().ref('/users/' + user.email.replace(/\./g, "_")).update({'status' : 'safe', 'drinks' : 0})

  //Sets the friends variable to a list of friends emails
  firebase.database().ref('/users/'+ user.email.replace(/\./g, "_") + "/friends").on('value', function(snapshot){
    friends = Object.values(snapshot.val())
    console.log(friends);
  });
}

//Sets user's status to help
function sendHelp() {
  console.log("Send Help to " + user.displayName);
  firebase.database().ref('/users/' + user.email.replace(/\./g, "_")).update({'status' : 'help'});
}

//Sets user's status to safe
function cancelHelp() {
  console.log("Cancelling help to " + user.displayName);
  firebase.database().ref('/users/' + user.email.replace(/\./g, "_")).update({'status' : 'safe'});
}

//Reads text from HTML text box and adds to friends list
function addFriend(){
  var email = document.getElementById('friendEmail').value;
  console.log("Adding friend with email: " + email);
  firebase.database().ref('/users/'+user.email.replace(/\./g, "_") + "/friends").push(email.replace(/\./g, "_"));
}

//Displays status of all friends in real time
function monitorFriends(){
  firebase.database().ref('/users/'+ friends[0]+"/status").on('value', function(snapshot){
    document.getElementById('ted').innerHTML = snapshot.val();
  });
  firebase.database().ref('/users/'+ friends[1]+"/status").on('value', function(snapshot){
    document.getElementById('alex').innerHTML = snapshot.val();
  });
}
