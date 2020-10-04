import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./components/Home";
import Chat from "./components/Chat";

const mainNavigator = createStackNavigator({
  Home: Home,
  Chat: Chat
});

const AppContainer = createAppContainer(mainNavigator);

export default AppContainer;
