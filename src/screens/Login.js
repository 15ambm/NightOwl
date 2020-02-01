import React from 'react';
// import React from 'react-native';
// import owl from "./src/images/owl.jpeg";
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import googleLogin from '../components/Back.js'

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
    onPress={() => {this.props.navigation.navigate('Profile')
    
    //; other function goes here ;
  }}
   />
   
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