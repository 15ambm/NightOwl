//import * as firebase from "@firebase/app";
//import "@firebase/firestore";

import * as firebase from 'firebase';



document.addEventListener("DOMContentLoaded", event => {const app = firebase.app();});

var user = "";
var friends = []

// <script defer src="/__/firebase/7.8.0/firebase-app.js"></script>
// <script defer src="/__/firebase/7.8.0/firebase-auth.js"></script>
// <script defer src="/__/firebase/7.8.0/firebase-database.js"></script>



const firebaseConfig = {
  // apiKey: "<YOUR-API-KEY>",
  // authDomain: "<YOUR-AUTH-DOMAIN>",
  databaseURL: "https://night-owl-50961.firebaseio.com/",
  // storageBucket: "<YOUR-STORAGE-BUCKET>"
};

firebase.initializeApp(firebaseConfig);


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