import React from 'react';
// import React from 'react-native';
// import owl from "./src/images/owl.jpeg";
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import {googleLogin, gLogin} from '../components/Back'
// import '../components/Global';
import {registerForPushNotification} from '../components/getPushToken'


class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
   };
render() {
 return (

<ImageBackground source={require('../images/owl.png')} style={styles.backgroundImage}>
<View 
style={{ 
  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 90
  }}
  >
  
  <Button title="Go to Profile screen"
    color="#f194ff"
    onPress={() => {
      // googleLogin();
      // this.
      gLogin();
      // console.log(pushToken);
      // global.pushToken = "";
      // registerForPushNotification();
      this.props.navigation.navigate('Profile');

  }}
   />
   <Button title = "Help Notification" onPress={() => {
      // googleLogin();
      // this.
      // gLogin();
      // global.pushToken = "";
      // global.pushToken = registerForPushNotification();
      // console.log(pushToken);
      // this.props.navigation.navigate('Profile');

  }} />
 </View>
 </ImageBackground>
);
}
}


// let { StyleSheet } = React;

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});
export default Login;