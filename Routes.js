import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
const Project= createStackNavigator({
    Login: {
   screen: Login
  },
  Profile: {
   screen: Profile
  }
});
export default createAppContainer(Project);