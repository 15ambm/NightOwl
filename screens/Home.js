import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { gLogin, sendHelp } from '../components/Backend'

export default function Home({ navigation }) {
    
    //console.log(navigation) 

    const [myData, setMyData] = useState({});

    const [myFriendsOut, setFriendsOut] = useState([]);
    const [myFriends, setFriendsList] = useState([]);


    moveToFriendScreenHandler = () => {
        navigation.navigate('Friends', myFriends)
    }

    return (
        <View style={styles.screen}>

            <TouchableOpacity style={styles.friends} onPress={moveToFriendScreenHandler}>  
                 <Text style={styles.helpText}>My Friends</Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.help} onPress={() => {setMyData(gLogin())}}>  
                 <Text style={styles.helpText}>I Need Help</Text> 
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.help} onPress={() => {console.log("My Data", JSON.stringify(myData))}}>  
                 <Text style={styles.helpText}>I Need Support</Text> 
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:2,
        justifyContent:'flex-end',
        marginBottom:75
        
    },
    friends:{
        marginRight:'10%',
        marginLeft:'10%',
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'lightblue',
        borderRadius:5,
    },
    help:{
        marginRight:'10%',
        marginLeft:'10%',
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'lightgrey',
        borderRadius:10,

    },
    helpText:{
        color:'grey',
        textAlign:'center',
        fontSize:40
    },
    support:{
        marginRight:'10%',
        marginLeft:'10%',
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'lightgrey',
        borderRadius:10,
    },
    supportText:{
        color:'grey',
        textAlign:'center',
        fontSize:40
    }
    
  });