//importing reaact native modules
import * as React from 'react';
//importing the navigation bars
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
//importing all the screens for different pages
import HomeScreen from './screens/Homescreen.js';
import SettingsScreen from './screens/SettingsScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import SoundsScreen from './screens/Soundscreen.js';
import ListenScreen from './screens/ListenScreen.js';
import NamoScreen from './screens/NamoScreen.js';
import TrigemScreen1 from './screens/TrigemScreen1';
import ListenOutputScreen from './screens/ListenOutputScreen';
import WatSuthiScreen from './screens/WatSuthiScreen';
import CheckScenarioScreen from './screens/CheckScenarioScreen';
import PraiseForBuddhaScreen from './screens/PraiseForBuddhaScreen';






//creating the navigation between pages
const Stack = createStackNavigator();
function MyStack() {
  return (
    // Styling the navigation bar
    <Stack.Navigator>
      {/* Setting the background colour and managing the styling of the text for each of them */}
      {/* Naming each of the page to be clear and distinct */}
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black', fontWeight: 'bold',alignSelf: 'center'} }} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black' ,fontWeight: 'bold',alignSelf: 'center'} }} name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black' ,fontWeight: 'bold',alignSelf: 'center'}}} name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black', fontWeight: 'bold',alignSelf: 'center'}}} name="ListenScreen" component={ListenScreen} />
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black', fontWeight: 'bold',alignSelf: 'center'}}} name="SoundsScreen" component={SoundsScreen} />
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black' ,fontWeight: 'bold',alignSelf: 'center'}}} name="NamoScreen" component={NamoScreen} />
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black' ,fontWeight: 'bold',alignSelf: 'center'}}} name="TrigemScreen1" component={TrigemScreen1} />
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black' ,fontWeight: 'bold',alignSelf: 'center'}}} name="ListenOutputScreen" component={ListenOutputScreen} />
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black' ,fontWeight: 'bold',alignSelf: 'center'}}} name="WatSuthiScreen" component={WatSuthiScreen} />
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black' ,fontWeight: 'bold',alignSelf: 'center'}}} name="CheckScenarioScreen" component={CheckScenarioScreen} />
      <Stack.Screen options={{headerStyle: { backgroundColor: '#ffcc00'}, headerTitleStyle: {color: 'black' ,fontWeight: 'bold',alignSelf: 'center'}}} name="PraiseForBuddhaScreen" component={PraiseForBuddhaScreen} />
    </Stack.Navigator>
  );
}
// exporting the app function to be use im the rest of the app
export default function App() {
  //Setting the state for the audio player *from API currently unused
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}