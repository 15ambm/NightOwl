# NightOwl
QHACKS 2020 Project

Set project parameters to:
---------------------------------------------------------
Project name:  NightOwl
Company name:  qhacks
Package name:  com.qhacks.nightowl
----------------------------------------------

Oauth Client ID
443939003384-737sv9ne47b2o0hdae70tv0psvej887l.apps.googleusercontent.com

databaseURL: "https://night-owl-50961.firebaseio.com/"

To install packages for development make sure you have these packages

if your using expo:
expo install 

otherwise 
npm install

 "expo": "~36.0.0",
    "firebase": "^7.8.0",
    "react": "~16.9.0",
    "react-dom": "~16.9.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-36.0.0.tar.gz",
    "react-native-gesture-handler": "~1.5.0",
    "react-native-reanimated": "~1.4.0",
    "react-native-safe-area-context": "^0.6.4",
    "react-native-safe-area-view": "^1.0.0",
    "react-native-screens": "2.0.0-alpha.12",
    "react-native-web": "~0.11.7",
    "react-navigation": "^4.1.0",
    "react-navigation-stack": "^2.0.16"

Firebase info:

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCFPoSc_OGc84P9Rky5R3IAacaWxMS42PY",
    authDomain: "night-owl-50961.firebaseapp.com",
    databaseURL: "https://night-owl-50961.firebaseio.com",
    projectId: "night-owl-50961",
    storageBucket: "night-owl-50961.appspot.com",
    messagingSenderId: "443939003384",
    appId: "1:443939003384:web:b91218976ef30c6353940d",
    measurementId: "G-M6FHV27H5N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>