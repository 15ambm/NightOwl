import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';


import Header from './components/Header'
import FriendScreen from './screens/FriendScreen'



export default function App() {


  const [myFriendsOut, setFriendsOut] = useState([]);
  const [myFriends, setFriendsList] = useState([{key:165487, val:'Alex'}]);
  const [goalModal, setGoalModal] = useState(false)

  const addFriendHandler = goal => {
    setFriendsList(currentGoals => [...currentGoals, 
      {key:Math.random().toString() , val:goal}]);
      setGoalModal(false);
  }

  const addNightFriend = friend => {
    console.log(myFriendsOut.find(Element => Element.key === friend.key))
    if(undefined == myFriendsOut.find(Element => Element.key === friend.key)) {
      setFriendsOut(setFriendsOut => [...setFriendsOut, 
      {key:friend.key, val:friend.val}])
    }

  }

  const removeFriendHandler = (friend) => {
    setFriendsOut(currentGoals => {
      return currentGoals.filter(item => (item.key != friend.key))
    });
  }

  const onSetGoalModalHandler = (bool) => {
    setGoalModal(true);
  }

  const closeGoalModalHandler = () => {
    setGoalModal(false);
  }

  return (
    <View style={styles.screen}>
      
      <Header title="Night Owl"/>

      <FriendScreen friendMainList={myFriends}
                    friendOutList={myFriendsOut}
                    inputVisible={goalModal}
                    cancelModal={closeGoalModalHandler}
                    setFriendModal={onSetGoalModalHandler}
                    removeNightOutFriend={(friend) => removeFriendHandler(friend)}
                    onAddMainFriend={(friend) => addFriendHandler(friend)}
                    onAddNightFriend={(friend) => addNightFriend(friend)}/>


    </View>

  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    borderWidth:1
  }
  
});