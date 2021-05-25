//////////////////////////////TRIGEM SCREEN (MANTRA 1)/////////////////////////////////


// importing touch based interactions
import 'react-native-gesture-handler'
// importing  media modules from react native
import {Text,TouchableOpacity,View, Image,ImageBackground, StyleSheet,ScrollView,Alert,} from 'react-native';
// importing react native
import * as React from 'react';
// importing the audio API
import { Audio } from 'expo-av';
// importing the scrolling text API
import TextTicker from 'react-native-text-ticker'
// importing the icons from the library
import { AntDesign } from '@expo/vector-icons'; 
// initilizing like2, a boolean variable that will be exported to the profile page

var like2 = [];
export {like2};

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
"Paying Respect to the Triple Gem or คำบูชาพระรัตนตรัย is added",
// will allow the user to directly go to the profile page to see the change
[
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
// tell the console that the mantra is being load *for testing
console.log('Loading Sound');
// use the audio API to load in the mantra
const { sound } = await Audio.Sound.createAsync(require('../assets/TripleGem.mp3'));
//initializing the sound
setSound(sound);
// tell the console that the mantra is being played *for testing
console.log('Playing Sound');
// use the audio API to play the mantra through the phone's audio
await sound.playAsync(); }

//UNLOADING THE SOUND
React.useEffect(() => {
return sound
? () => {
console.log('Unloading Sound');
sound.unloadAsync(); }
: undefined;
}, [sound]);


// STOPPING THE SOUND *Alternative to pausing used in Namoscreen
async function stopSound() {
console.log('stopping Sound');
// using the audio API to stop the sound
await sound.stopAsync(); }



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
async function favourite() {
like2 = true
}


// User-Visable area
return (

// general styling of the page to put everything centered 
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
{/* inserting the background and styling it to be behind everylayer and covering the whole screen*/}
<ImageBackground source={require("../assets/background.png")} style={{width: '100%', height: "100%",position:'absolute'}}/>


{/* Enable vertical scrolling */}
<ScrollView vertical={true}>

{/* Inserting headers */} 
<Text style={styles.TitleS}>Paying Respect to the Triple Gem</Text>
<Text style={styles.TitleS}>คำบูชาพระรัตนตรัย </Text>


{/* Use the API to create an auto scrolling mantra */}
<TextTicker
style={styles.mantraScrollingtext}
duration={93000}
loop
// bounce
// repeatSpacer={50}
marqueeDelay={1000}
>{/* Start of the auto scrolling text 1 */}
อะระหัง...สัมมาสัมพุทโธ ภะคะวา..พระผู้มีพระภาคเจ้า...เป็นพระอรหันต์...ดับเพลิงกิเลสเพลิงทุกข์สิ้นเชิง...ตรัสรู้ชอบได้โดยพระองค์เอง..
พุทธัง ภควันตัง อะภิวาเทมิ...ข้าพเจ้าขออภิวาทพระผู้มีพระภาคเจ้า, ผู้รู้ ผู้ตื่น ผู้เบิกบาน..                                                              
สวากขาโต ภะคะวะตา ธัมโม...พระธรรมเป็นธรรมที่พระผู้มีพระภาคเจ้า, ตรัสไว้ดีแล้ว..
ธัมมัง นะนัสสามิ..ข้าพเจ้านมัสการพระธรรม...
สุปะฏิปันโน ภะคะวะโต สาวะกะสังโฆ.................พระสงฆ์สาวกของพระผู้มีพระภาคเจ้า, ปฏิบัติดีแล้ว......................สังฆัง นะมามิ...................ข้าพเจ้านอบน้อมพระสงฆ์
</TextTicker>


{/* Auto scroller 2 */}
<TextTicker
style={styles.mantraScrollingtext}
duration={93000}
loop
marqueeDelay={1000}
>
{/* Start of the auto scrolling text 2 */} 
Araham....... sammā-sambuddho bhagavā.......... The Lord, the Perfectly Enlightened................................................................
Buddham bhagavantam abhivādemi..........and Blessed One,........................................................
Svākkhāto bhagavatā dhammo......... The Teaching, well expounded by the Blessed One............
Dhammam namassāmi...........I pay homage to the Dhamma..............................
Supatipanno bhagavato sāvakasańgho.........The Sangha, the Blessed One's disciples have practiced well..........
Sańgham namāmi.........I pay homage to the Sangha.
</TextTicker>

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
<TouchableOpacity onPress={stopSound}>
{/*adding the icon using the library  */}
<AntDesign name="pause" size={24} color="black" />
</TouchableOpacity>
</View>

</ScrollView>


{/* Start of the regular mantra library */}
{/* making all of of the vertically scrollable */}
<ScrollView vertical={true}>


{/* Verse 1 */}
{/* Styling the verses individually*/}
<View style={styles.MantraboxS}>
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}>อะระหัง สัมมาสัมพุทโธ ภะคะวา,  {'\n'}พุทธัง ภควันตัง อะภิวาเทมิ. {'\n'}</Text>
<Text style={styles.mantratextT}>พระผู้มีพระภาคเจ้า, เป็นพระอรหันต์  {'\n'}ดับเพลิงกิเลสเพลิงทุกข์สิ้นเชิง{'\n'} ตรัสรู้ชอบได้โดยพระองค์เอง; {'\n'}ข้าพเจ้าอภิวาทพระผู้มีพระภาคเจ้า,{'\n'} ผู้รู้ ผู้ตื่น ผู้เบิกบาน{'\n'}</Text>
<Text style={styles.mantratextE}>Araham sammā-sambuddho bhagavā  {'\n'}Buddham bhagavantam abhivādemi. {'\n'}</Text>
<Text style={styles.mantratextET}>The Lord, the Perfectly Enlightened and Blessed One, {'\n'}I pay homage to the Buddha,  {'\n'}the Awakened One, the Blessed One. {'\n'}</Text>
</Text>
</View>

{/* Verse 2 */}
{/* Styling the verses individually*/}
<View style={styles.MantraboxS}>
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}>สวากขาโต ภะคะวะตา ธัมโม, {'\n'}ธัมมัง นะนัสสามิ.{'\n'}</Text>
<Text style={styles.mantratextT}>พระธรรมเป็นธรรมที่พระผู้มีพระภาคเจ้า, ตรัสไว้ดีแล้ว ;{'\n'}ข้าพเจ้านมัสการพระธรรม.{'\n'}</Text>
<Text style={styles.mantratextE}>Svākkhāto bhagavatā dhammo,{'\n'}Dhammam namassāmi{'\n'}</Text>
<Text style={styles.mantratextET}>The Teaching, well expounded by the Blessed One,{'\n'}I pay homage to the Dhamma.</Text>
</Text>
</View>

{/* Verse 3 */}
{/* Styling the verses individually*/}
<View style={styles.MantraboxS}>
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}>สุปะฏิปันโน ภะคะวะโต สาวะกะสังโฆ,{'\n'}สังฆัง นะมามิ. {'\n'}</Text>
<Text style={styles.mantratextT}>พระสงฆ์สาวกของพระผู้มีพระภาคเจ้า, ปฏิบัติดีแล้ว ;{'\n'}ข้าพเจ้านอบน้อมพระสงฆ์.{'\n'}</Text>
<Text style={styles.mantratextE}>Supatipanno bhagavato sāvakasańgho,{'\n'} Sańgham namāmi.{'\n'}</Text>
<Text style={styles.mantratextET}>The Sangha, the Blessed One's disciples have practiced well,{'\n'}I pay homage to the Sangha.{'\n'}</Text>
</Text>


{/* end of the text styling and scrolling*/}
</View>
</ScrollView>
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
mantratext: {backgroundColor: '#ffcc00',margin:10,textAlign: 'center' ,  padding: 10,fontSize:15,fontWeight:'bold',
borderRadius: 100,},

// Styling the scrolling text
mantraScrollingtext: {backgroundColor: '#ffcc00',margin:10,textAlign: 'center' ,  padding: 10,fontSize:25,fontWeight:'bold',
borderRadius: 100,},

//Styling the colour the mantra in Sanskrit
mantratextS: {color:'#0000FF'},
//Styling the colour the mantra translated to Thai
mantratextT: {color:'#00FF00'},
//Styling the colour the mantra romanized into English
mantratextE: {color:'#FF0000'},
//Styling the colour the mantra translated to English
mantratextET: {color:'#6a0dad'},

// Styling the title 
TitleS: {backgroundColor: '#ffab00',margin:10,fontSize: 32, padding: 20,borderRadius: 250,
fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},

// Styling/Centering all of the mantras
MantraboxS: {
justifyContent: 'center',
alignItems: "center",
},

// Styling the back and like button
backbutton: {height:50,width:90,marginHorizontal:60,
justifyContent: 'center',
alignItems: "center",
backgroundColor: '#000000',
padding: 1, borderRadius: 10
},

// Styling playbutton
playbutton: {height:50,width:90,marginHorizontal:55,
justifyContent: 'center',
alignItems: "center",
backgroundColor: '#ffffff',
padding: 0.5, borderRadius: 15,
borderColor:'#000000',
},

// Styling the text within the back and like button
backbuttontext: {textAlign: 'center',color:'#ffffff',fontSize:17,fontWeight: 'bold',fontFamily:'notoserif',},
})