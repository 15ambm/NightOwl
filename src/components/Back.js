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

var user = "";
var friends = []

export async function gLogin(){

  iosClientID =  '443939003384-737sv9ne47b2o0hdae70tv0psvej887l.apps.googleusercontent.com';

  const { type, accessToken, user } = await Google.logInAsync(iosClientID);

if (type === 'success') {
  // Then you can use the Google REST API
  let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}
}

export async function googleLogin() {
  //get google auth cridential
  const {type, token} = await firebase.auth.GoogleAuthProvider.credential();

  firebase.auth().signInWithCredential(provider).then(result => {
  user = result.user;
  //document.write("Welcome to Night Owl " + user.displayName);
  console.log(JSON.stringify(result.user));
  }).catch(console.log)
}



// function sendHelp() {
//   console.log("Send Help to " + user.displayName);
//   firebase.database().ref('/users/' + user.email.replace(/\./g, "_")).update({'status' : 'help'});
// }

// function cancelHelp() {
//   console.log("Cancelling help to " + user.displayName);
//   firebase.database().ref('/users/' + user.email.replace(/\./g, "_")).update({'status' : 'safe'});
// }

// function getFriends() {
//   firebase.database().ref('/users/'+ user.email.replace(/\./g, "_") + "/friends").on('value', function(snapshot){
//     console.log(snapshot.val());
//     friends = snapshot.val();
//   });
// }

// function addFriend(){
//   var email = document.getElementById('friendEmail').value;
//   console.log("Adding friend with email: " + email);
//   firebase.database().ref('/users/'+user.email.replace(/\./g, "_") + "/friends").push(email.replace(/\./g, "_"));
// }

// function displayFriends() {
//   alert(friends.toString());
// }