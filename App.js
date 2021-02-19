import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import SuggestionScreen from './screens/SuggestionScreen';
import WelcomeScreen from './screens/WelcomeScreen';


  export default class App extends React.Component {
     render(){
       return ( <AppContainer/> ); } }
 

const switchNavigator = createSwitchNavigator(
  { WelcomeScreen:
    {screen:WelcomeScreen}, SuggestionScreen:
    {screen: SuggestionScreen} }) 
  const AppContainer = createAppContainer(switchNavigator);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
