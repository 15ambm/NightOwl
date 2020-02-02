import React from 'react';
import { Button, View, Text } from 'react-native';
import {registerForPushNotification} from '../components/getPushToken'

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile'
   };
 render() {
 return (
  <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
<Button title="Go to Login screen"
    onPress={() => this.props.navigation.navigate('Login')}
   />
<Button title = "Help Notification" 
 onPress={() => registerForPushNotification()}
/>
  </View>
);
}
}
export default Profile;