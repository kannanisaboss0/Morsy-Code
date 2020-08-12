import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'
import Constants from 'expo-constants';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import MainScreen from './Screens/MainScreen'
import HomeScreen from './Screens/HomeScreen'
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
render(){
  return(
    <Container/>
  )
}}

     
const Navigator =createSwitchNavigator({
  HomeScreen:HomeScreen,
MainScreen:MainScreen
})
const Container =createAppContainer(Navigator)


