//////////////////////////////LISTENER SCREEN/////////////////////////////////

// importing touch based interactions
import 'react-native-gesture-handler'
// importing react native
import React from 'react';
// importing  media modules from react native
import {View,TouchableOpacity,ImageBackground, StyleSheet,Text, Image,Button } from 'react-native';
// importing the audio API
import { Audio } from 'expo-av';


// INITIALIZING THE SCREEN
function ListenScreen({ navigation }) {
// Initilizing a boolean state for recording
const [recording, setRecording] = React.useState();

// Setting the header bar
React.useLayoutEffect(() =>  {
navigation.setOptions({
// header left for the home icon
headerLeft: () => 
(
// Button to go to navigate back to home screen
<TouchableOpacity
onPress={() => navigation.navigate('HomeScreen')} >
<Image style={{ width: 50, height: 50, marginLeft : 15 }}
// transparent home icon found from the internet
source={require('../assets/home.png')}/>
</TouchableOpacity>
),
// header right for the App logo
headerRight: () => 
(
// Originally there were plans of the logo being a button, but it was decided against it in the end
<TouchableOpacity>
<Image style={{ width: 50, height: 50, marginLeft : 15 }}
// transparent logo made from a logo making site
source={require('../assets/logo.png')}/>
</TouchableOpacity>
),
});
});


//RECORDING FUNCTION
async function startRecording() {
try {
// asking for permission to use the audio function of the phone *for testing
console.log('Requesting permissions..');
await Audio.requestPermissionsAsync();
await Audio.setAudioModeAsync({
// allow the recording on IOS product but this does not work due to unexplained reasons
allowsRecordingIOS: true,
playsInSilentModeIOS: true,
}); 
// tell the console that the recording is starting *for testing
console.log('Starting recording..');
// initialize a recording variable
const recording = new Audio.Recording();
// use the audio API to start recording
await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
await recording.startAsync(); 
// store the recording
setRecording(recording);
// tell the console that the recording is started *for testing
console.log('Recording started');
} catch (err) {
// tell the console that the recording has failed *for testing
console.error('Failed to start recording', err);
}
}
// STOP RECORDING FUNCTION
async function stopRecording() {
// tell the console that the recording is stopped *for testing
console.log('Stopping recording..');
// set the setRecording 
setRecording(undefined);
// use the API to unload the recording
await recording.stopAndUnloadAsync();
// get the recording storage point
const uri = recording.getURI(); 
console.log('Recording stopped and stored at', uri);
}

// User-Visable area
return (
// general styling of the page to put everything centered
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
{/* inserting the background and styling it to be behind everylayer and covering the whole screen*/}
<ImageBackground source={require("../assets/background.png")} style={{width: '100%', height: "100%",position:'absolute'}}/>


{/* Button to start the recording */}
<View style={styles.RecordbuttonS}>
{/* touchable opacity to trigger the recording function */}
<TouchableOpacity onPress={recording ? stopRecording : startRecording}>
{/* Inserting a transparent image*/}
<Image style={{ width: 180, height: 120,marginLeft:55}}
source={require('../assets/sound.gif')}/>
<Text style={styles.textstyling}>Press to start listener and press again to stop</Text>
</TouchableOpacity>
</View>

{/* Button for proceeding to the next page */}
<View style={styles.ProceedButtonS}>
<TouchableOpacity onPress={() => navigation.navigate('CheckScenarioScreen')}  >
<Text style={styles.textstyling}>Proceed</Text>
</TouchableOpacity>
</View>

{/* Stop the styling */}
</View>

);
// end of screen
}
// exporting the screen
export default ListenScreen;


// Setting the style
const styles = StyleSheet.create({

// styling the text 
textstyling: {textAlign: 'center',color:'#ffffff',fontSize:30,fontWeight: 'bold'},

//styling the record button 
RecordbuttonS: {height:300,width:300,margin:50,
marginTop:0,
flexDirection: 'row',
justifyContent: 'center',
alignItems: "center",
backgroundColor:'#d6ba5c',
padding: 10,
borderRadius: 100,
},
// Styling the proceed button
ProceedButtonS: {height:80,width:160,
marginTop:40,
flexDirection: 'row',
justifyContent: 'center',
alignItems: "center",
backgroundColor:'#f6ba5c',
padding: 10,
borderRadius: 100,
}
})