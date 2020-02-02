import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';

export async function registerForPushNotification(user){
    const {status} = Permissions.getAsync(Permissions.NOTIFICATIONS);

    if (status !== 'granted'){
        const {status} = Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }
    

    if(finalStatus !== 'granted'){
        return;
    }
    //get push notification token
    let token = await Notifications.getExpoPushTokenAsync();
    //uploads token to firebase
    firebase.database().ref("/users/" + user._55.email.replace(/\./g, "_").update({'pushToken' : token}));
    // console.log(token);


}

