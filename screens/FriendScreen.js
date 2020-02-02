import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';

import FriendItem from '../components/FriendItem'
import MainFriendInput from '../components/FriendInput'
import FriendOutItem from '../components/FriendOutItem'

const FriendScreen = props => {

    const removeNightOutFriend = (friend) => {
        props.removeNightOutFriend(friend);
    }

    return (
        <View style={styles.screen}>  
            <MainFriendInput visible={props.inputVisible} 
                            onAddGoal={props.onAddMainFriend} 
                            onCancel={props.cancelModal} />

            <View style={styles.scrollList}>  
                <Text style={styles.title}>Friends I'm Going Out With</Text> 
                    <FlatList 
                    data={props.friendOutList} 
                    renderItem={itemData => 
                        <FriendOutItem 
                        title={itemData.item.val}
                        key={itemData.item.key}
                        onDelete={() => props.removeNightOutFriend(itemData.item)} 
                        />}/>  
            </View>

            <View style={styles.scrollList}> 
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}> 
                    <Text style={styles.title}>All My Friends</Text> 
                    <Button style={styles.button} title="Add New Friend" onPress={props.setFriendModal}/>
                </View>
                <FlatList 
                data={props.friendMainList} 
                renderItem={itemData => 
                    <FriendItem 
                        title={itemData.item.val}
                        key={itemData.item.key} 
                        addToNightOut={() => props.onAddNightFriend(itemData.item)}
                    />}/>  
            </View>
                
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    scrollList: {
        marginTop: 20,
        borderColor:'black'
      },
      title:{
        color:'black',
        justifyContent:'center',
        textAlign:'center'
      },
      button: {
          color:'blue'
      }
});

export default FriendScreen;