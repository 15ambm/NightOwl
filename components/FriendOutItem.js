import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const FriendOutItem = props => {
    return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}> 
        <View style={styles.listItem} >    
            <Text >{props.title}</Text>
        </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor:'pink',
        borderColor:'black',
        borderWidth:1,
        padding:5,
        margin:5
      }
});

export default FriendOutItem;