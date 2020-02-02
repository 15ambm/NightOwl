import React, {useState} from 'react'
import FriendItem from './FriendItem'
import { View, Button, TextInput, StyleSheet, Modal} from 'react-native'


const MainFriendInput = props => {
    
    const [enteredFriend, setEnteredFriend] = useState('');

    const FriendInputHandler = (enteredText) => {
        // this callback is what changes the value of the enteredText
        setEnteredFriend(enteredText);
    };
    
    const addFriendHandler = () => {
        props.onAddGoal(enteredFriend);
        setEnteredFriend('');
    }
    
    return (
    <Modal visible={props.visible} animationType='slide'>  
        <View style={styles.inputContainer}>  
            <TextInput 
                placeholder="Course Goal" 
                style={styles.input}
                onChangeText={FriendInputHandler}
                value={enteredFriend}/> 
            <Button title="Add" onPress={addFriendHandler}/>
            <Button title="Cancel" color='red' onPress={props.onCancel}/>
        </View>
    </Modal>);
};

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      },
      input:{
        width:'80%', 
        borderColor: 'black', 
        borderWidth:1, 
        padding:10,
        marginBottom:10,
        color:'black'
      },
      modal:{
          margin:40
      }
});

export default MainFriendInput;