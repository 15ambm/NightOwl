import React from 'react';
import { Button, View, Text } from 'react-native';
class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
   };
render() {
 return (
  <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
<Button title="Go to Profile screen"
    onPress={() => {this.props.navigation.navigate('Profile');
    //other function goes here ;
  }}
   />
  </View>

);
}
}
export default Login;