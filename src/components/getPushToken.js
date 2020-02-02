import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

export async function registerForPushNotification(){
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
    console.log(token);
}

