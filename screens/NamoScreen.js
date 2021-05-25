//////////////////////////////NAMO SCREEN (MANTRA 2)/////////////////////////////////


// importing touch based interactions
import 'react-native-gesture-handler'
// importing  media modules from react native
import {Text,View,TouchableOpacity, Image,ImageBackground, StyleSheet,ScrollView,Alert } from 'react-native';
// importing react native
import * as React from 'react';
// importing the audio API
import { Audio } from 'expo-av';
// importing icons from a library
import { AntDesign } from '@expo/vector-icons'; 
// One of the API that is tried to incorporate into the app
// import SoundPlayer from 'react-native-sound-player'


// initilizing like1, a boolean variable that will be exported to the profile page
var like1 = [];
var isplaying = Boolean;
export {like1};

//INITIALIZING THE SCREEN
export default function App({ navigation }) {

// Initailizing a boolean state for playing the sound
const [sound, setSound] = React.useState();

// Intializing the user alert function
const createThreeButtonAlert = () =>
// will display that the current mantra will be added to the profile
// will allow the user to directly go to the profile page to see the change
Alert.alert(
"Profile Updated",
"Preliminary Passage in Homage to the Buddha or บุพพะภาคะนะมะการ is added",
[
// will allow the user to directly go to the profile page to see the change
{
text: "Go to profile",
onPress: () => navigation.navigate('ProfileScreen')
},
{ text: "OK"}
],
{ cancelable: false }
);


// THE SOUND PLAYER FUNCTION
async function playSound() {

// setting the state for this.isplaying but is correctly unused in the current edition
// isplaying = true;


// tell the console that the mantra is being load *for testing
console.log('Loading Sound');
// use the audio API to load in the mantra
const { sound } = await Audio.Sound.createAsync(require('../assets/Namotassa.mp3'));
//initializing the sound
setSound(sound);
// tell the console that the mantra is being played *for testing
console.log('Playing Sound');
// use the audio API to play the mantra through the phone's audio
await sound.playAsync();}


//UNLOADING THE SOUND
React.useEffect(() => {
return sound
? () => {
console.log('Unloading Sound');
sound.unloadAsync(); }
: undefined;
}, [sound]);

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

// FUNCTION TO INCREMENT THE LIKE COUNTER
async function favourite() 
{
like1 = true
}

// PAUSING THE SOUND FUNCTION
async function pauseSound()
{
await sound.pauseAsync();
}



return (
// general styling of the page to put everything centered
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
{/* {/* inserting the background and styling it to be behind everylayer and covering the whole screen*/}
<ImageBackground source={require("../assets/background.png")} style={{width: '100%', height: "100%",position:'absolute'}}/>


{/* Inserting header */}
<Text style={styles.MantraTitle}>Preliminary Passage in Homage to the Buddha {'\n'}บุพพะภาคะนะมะการ</Text>

{/* Styling and adding the text for each of the mantras*/}
<Text style={styles.MantraText}>
<Text style={styles.mantratextS}>
นะโม ตัสสะ ภะคะวะโต  {'\n'}
</Text>
<Text style={styles.mantratextT}>
ขอนอบน้อมแด่พระผู้มีพระภาคเจ้า พระองค์นั้น  {'\n'} 
</Text>
<Text style={styles.mantratextE}>
Namo tassa bhagavato {'\n'} 
</Text>
<Text style={styles.mantratextET}>
Homage to the Blessed One,
</Text>
</Text>

<Text style={styles.MantraText}>
<Text style={styles.mantratextS}>
อะระหะโต{'\n'}
</Text>
<Text style={styles.mantratextT}>
ซึ่งเป็นผู้ไกลจากกิเลส {'\n'} 
</Text>
<Text style={styles.mantratextE}>
Arahato{'\n'} 
</Text>
<Text style={styles.mantratextET}>
The worthy one.
</Text>
</Text>

<Text style={styles.MantraText}>
<Text style={styles.mantratextS}>
สัมมาสัมพุทธัสสะ {'\n'}
</Text>
<Text style={styles.mantratextT}>
ตรัสรู้ชอบได้โดยพระองค์เอง {'\n'}
</Text>
<Text style={styles.mantratextE}>
Samma-sambuddhassa{'\n'}
</Text>
<Text style={styles.mantratextET}>
the perfectly self-awakened One, </Text>
</Text>

{/* Making the buttons scrollable if needed */}
<ScrollView horizontal={true}>

{/* Play button */}
<View style={styles.playbutton}>
<TouchableOpacity onPress={playSound} >  
{/*adding the icon using the library  */}
<AntDesign name="play" size={24} color="black" />
</TouchableOpacity>
</View>

{/* Pause button */}
<View style={styles.playbutton}>
<TouchableOpacity onPress={pauseSound}>
{/*adding the icon using the library  */}
<AntDesign name="pause" size={24} color="black" />
</TouchableOpacity>
</View>

</ScrollView>

{/* Making the buttons scrollable if needed */}
<ScrollView horizontal={true}>

{/* Back button */}
<View style={styles.backbutton}>
  {/* link back to the library screen */}
<TouchableOpacity onPress={() => navigation.goBack()}>
<Text style={styles.backbuttontext}>Go back</Text>
</TouchableOpacity>
</View>

{/*Like Button  */}
<View style={styles.backbutton}>
{/* Alert the user on click */}
<TouchableOpacity onPress={() => {favourite(); createThreeButtonAlert() }}>
<Text style={styles.backbuttontext}>Like</Text>
</TouchableOpacity>
</View>

</ScrollView>

{/* Stop the styling */}
</View>
);
  // end of screen
}


// Setting the style
const styles = StyleSheet.create({

// Styling the Mantra text
MantraText: {backgroundColor: '#ffcc00',margin:10,textAlign: 'center' ,  padding: 10,fontSize:18,fontWeight:'bold',
borderRadius: 100,},

//Styling the colour the mantra in Sanskrit
mantratextS: {color:'#0000FF'},
//Styling the colour the mantra translated to Thai
mantratextT: {color:'#00FF00'},
//Styling the colour the mantra romanized into English
mantratextE: {color:'#FF0000'},
//Styling the colour the mantra translated to English
mantratextET: {color:'#6a0dad'},

// Styling the back and like button
backbutton: {height:50,width:90,marginHorizontal:60,
justifyContent: 'center',
alignItems: "center",
backgroundColor: '#000000',
padding: 1, borderRadius: 10
},
// Styling playbutton
playbutton: {height:50,width:90,marginHorizontal:10,
justifyContent: 'center',
alignItems: "center",
backgroundColor: '#ffffff',
padding: 0.5, borderRadius: 15,
borderColor:'#000000',
},
// Styling the text within the back and like button
backbuttontext: {textAlign: 'center',color:'#ffffff',fontSize:17,fontWeight: 'bold',fontFamily:'notoserif',},

//Styling the text used for the heading
MantraTitle: {backgroundColor: '#ffab00',margin:20,fontSize: 22, padding: 10,borderRadius: 100,
fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},
})