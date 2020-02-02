import * as firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';


const firebaseConfig = {
  apiKey: "AIzaSyCFPoSc_OGc84P9Rky5R3IAacaWxMS42PY",
  authDomain: "night-owl-50961.firebaseapp.com",
  databaseURL: "https://night-owl-50961.firebaseio.com",
  storageBucket: "night-owl-50961.appspot.com", 
};

firebase.initializeApp(firebaseConfig);

var userSession = "";


async function gLogin(){
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

    console.log("logged in");
    //console.log(JSON.stringify(user));
    let data = [];
    startSession(user).then(data );
    console.log(data);
    return user;
    }
}


async function startSession(user) {
    //console.log(JSON.stringify(user));
  //Logs into google and populates user data
  //Sets status of user to safe and drinks to 0 on session start
  firebase.database().ref('/users/' + user.email.replace(/\./g, "_")).update({'status' : 'safe', 'drinks' : 0, 'pushToken' : 0})
  let friends = [];
  //Sets the friends variable to a list of friends emails
  firebase.database().ref('/users/'+ user.email.replace(/\./g, "_") + "/friends").on('value', (snapshot) => {
    if(snapshot.val() != null){
      friends = Object.values(snapshot.val());
        }
    });
    
  registerForPushNotification(user);
}

//Gets push token and uploads to firebase
async function registerForPushNotification(user){
  const {status} = Permissions.getAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted'){
      const {status} = Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
  }
  
  if (finalStatus !== 'granted'){
      return;
  }
  //get push notification token
  let token = await Notifications.getExpoPushTokenAsync();
  //uploads token to firebase
  firebase.database().ref("/users/" + user._email.replace(/\./g, "_").update({'pushToken' : token}));
  // console.log(token);
}

//Sets user's status to help
function sendHelp(user) {
  //console.log("Send Help to " + user.displayName);
  console.log(user._55.email);
  firebase.database().ref('/users/' + user._55.email.replace(/\./g, "_")).update({'status' : 'help'});
}

//Sets user's status to safe
function cancelHelp(user) {
  console.log("Cancelling help to " + user._55.name);
  firebase.database().ref('/users/' + user._55.email.replace(/\./g, "_")).update({'status' : 'safe'});
}

function submitPushToken(user, token) {
  console.log("Adding " + token + " as " + user._55.name + "\'s push token");
  firebase.database().ref('/users/' + user._55.email.replace(/\./g, "_")).update({'pushToken' : token});
}

/*
function getFriendsTokens(user){
  firebase.database().ref('/users/'+ user.email.replace(/\./g, "_") + "/friends").on('value', function(snapshot){
    friends = Object.values(snapshot.val());
    for(var f )
     
  });
}
*/

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

export {
    gLogin,
    sendHelp
}