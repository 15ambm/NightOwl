//import * as firebase from "@firebase/app";
//import "@firebase/firestore";


document.addEventListener("DOMContentLoaded", event => {const app = firebase.app();});

var user = "";
var friends = []

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(result => {
  user = result.user;
  //document.write("Welcome to Night Owl " + user.displayName);
  console.log(JSON.stringify(result.user));
  }).catch(console.log)
}

function sendHelp() {
  console.log("Send Help to " + user.displayName);
  firebase.database().ref('/users/' + user.email.replace(/\./g, "_")).update({'status' : 'help'});
}

function cancelHelp() {
  console.log("Cancelling help to " + user.displayName);
  firebase.database().ref('/users/' + user.email.replace(/\./g, "_")).update({'status' : 'safe'});
}

function getFriends() {
  firebase.database().ref('/users/'+ user.email.replace(/\./g, "_") + "/friends").on('value', function(snapshot){
    console.log(snapshot.val());
    friends = snapshot.val();
  });
}

function addFriend(){
  var email = document.getElementById('friendEmail').value;
  console.log("Adding friend with email: " + email);
  firebase.database().ref('/users/'+user.email.replace(/\./g, "_") + "/friends").push(email.replace(/\./g, "_"));
}

function displayFriends() {
  alert(friends.toString());
}
