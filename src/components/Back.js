import * as firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
// import * as Google from 'expo-google-app-auth';


const firebaseConfig = {
  apiKey: "AIzaSyCFPoSc_OGc84P9Rky5R3IAacaWxMS42PY",
  authDomain: "night-owl-50961.firebaseapp.com",
  databaseURL: "https://night-owl-50961.firebaseio.com",
  storageBucket: "night-owl-50961.appspot.com", 
};

firebase.initializeApp(firebaseConfig);

var userSession = "";
var friends = []

export async function gLogin(){
  const { type, accessToken, user } = await Google.logInAsync({
    iosClientId: '443939003384-737sv9ne47b2o0hdae70tv0psvej887l.apps.googleusercontent.com',
    scopes: ['profile','email']
  });

if (type === 'success') {
  // Then you can use the Google REST API
  let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  // console.log(user.email);
  userSession = user;
  console.log("logged in");
  console.log(JSON.stringify(userSession));
  startSession();
}
}


function startSession() {
  //Logs into google and populates user data

  //Sets status of user to safe and drinks to 0 on session start
  firebase.database().ref('/users/' + userSession.email.replace(/\./g, "_")).update({'status' : 'safe', 'drinks' : 0})

  //Sets the friends variable to a list of friends emails
  firebase.database().ref('/users/'+ userSession.email.replace(/\./g, "_") + "/friends").on('value', function(snapshot){
    if(snapshot.val() != null){
      friends = Object.values(snapshot.val());
    }
    console.log(friends);
  });
}

// //Sets user's status to help
// function sendHelp() {
//   console.log("Send Help to " + user.displayName);
//   firebase.database().ref('/users/' + user.email.replace(/\./g, "_")).update({'status' : 'help'});
// }

// //Sets user's status to safe
// function cancelHelp() {
//   console.log("Cancelling help to " + user.displayName);
//   firebase.database().ref('/users/' + user.email.replace(/\./g, "_")).update({'status' : 'safe'});
// }

// //Reads text from HTML text box and adds to friends list
// function addFriend(){
//   var email = document.getElementById('friendEmail').value;
//   console.log("Adding friend with email: " + email);
//   firebase.database().ref('/users/'+user.email.replace(/\./g, "_") + "/friends").push(email.replace(/\./g, "_"));
// }

// //Displays status of all friends in real time
// function monitorFriends(){
//   firebase.database().ref('/users/'+ friends[0]+"/status").on('value', function(snapshot){
//     document.getElementById('ted').innerHTML = snapshot.val();
//   });
//   firebase.database().ref('/users/'+ friends[1]+"/status").on('value', function(snapshot){
//     document.getElementById('alex').innerHTML = snapshot.val();
//   });
// }