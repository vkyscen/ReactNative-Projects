import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'


import { createAppContainer,createStackNavigator } from 'react-navigation'

import Homescreen from './screens/Homescreen'

import Loadingscreen from './screens/Lodingscreen'

import SignUpscreen from './screens/SignUpscreen'

import SignIn from './screens/SignIn'

var firebaseConfig = {
  apiKey: "AIzaSyCvNg2kpWB1DVGgcF0_d2kWvvtCeNBZQrA",
  authDomain: "fir-955f9.firebaseapp.com",
  databaseURL: "https://fir-955f9.firebaseio.com",
  projectId: "fir-955f9",
  storageBucket: "fir-955f9.appspot.com",
  messagingSenderId: "240557261861",
  appId: "1:240557261861:web:b403c52ff2cdb2c7"
};

firebase.initializeApp(firebaseConfig)

const MainNavigator = createStackNavigator( 
  { 
    Loading: {screen:Loadingscreen},
    SignIn:{screen:SignIn},
    Home:{screen:Homescreen},
    SignUp:{screen:SignUpscreen}, 
  } ,
  {
    initialRouteName:'Loading'

  }
)   
 
const App=createAppContainer(MainNavigator)

export default App;