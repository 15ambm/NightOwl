import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Header from './components/Header'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Friends from './screens/screen'
import Home from './screens/Home'


const HomeStack = createAppContainer(
  createStackNavigator({
  Home: {
      screen: Home
  },
  Friends: {
      screen: Friends
  }
}));


export default function App() {

  return (
    <HomeStack/>

  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    borderWidth:1
  }
  
});
