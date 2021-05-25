//////////////////////////////PRAISE FOR BUDDHA SCREEN (MANTRA 3)/////////////////////////////////

// importing touch based interactions
import 'react-native-gesture-handler'
// importing  media modules from react native
import {Text,TouchableOpacity,View, Image,ImageBackground, StyleSheet,ScrollView,Alert} from 'react-native';
// importing react native
import * as React from 'react';
// importing the audio API
import { Audio } from 'expo-av';
// importing the scrolling text API
import TextTicker from 'react-native-text-ticker'
// importing the icons from the library
import { AntDesign } from '@expo/vector-icons'; 

// initilizing like3, a boolean variable that will be exported to the profile page
var like3 = [];
export {like3};

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
"Praise for Buddha or พุทธาภิถุติ  is added",
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

// tell the console that the mantra is being load *for testing
console.log('Loading Sound');
// use the audio API to load in the mantra
const { sound } = await Audio.Sound.createAsync(require('../assets/PraiseforBuddha.mp3'));
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
like3 = true
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
<Text style={styles.TitleS}>Praise for Buddha</Text>

<Text style={styles.TitleS}>พุทธาภิถุติ </Text>

{/* Use the API to create an auto scrolling mantra */}
<TextTicker
style={styles.mantraScrollingtext}
duration={202000}
loop
// testing running both mantras in pararell in all sections
// bounce
// repeatSpacer={50}
marqueeDelay={1000}
>
{/* Start of the auto scrolling text 1 */}

{/* Due to the length and the speed of the mantra from the audio
the mantra is not currently spaced along with the speed and pauses of
the audio */}
โย  โส  ตะถาคะโต            

พระตถาคตเจ้านั้น  พระองค์ใด

อะระหัง                        

เป็นผู้ไกลจากกิเลส

สัมมาสัมพุทโธ                 

เป็นผู้ตรัสรู้ชอบได้โดยพระองค์เอง

วิชชาจะระณะสัมปันโน       

เป็นผู้ถึงพร้อมด้วยวิชชาและจรณะ

สุคะโต                          

เป็นผู้ไปแล้วด้วยดี

โลกะวิทู                        

เป็นผู้รู้โลกอย่างแจ่มแจ้ง

อะนุตตะโร  ปุริสะทัมมะสาระถิ      

เป็นผู้สามารถฝึกบุรุษที่สมควรฝึกได้อย่างไม่มีใครยิ่งกว่า

สัตถา  เทวะมะนุสสานัง      

เป็นครูผู้สอน ของเทวดาและมนุษย์ทั้งหลาย

พุทโธ                           

เป็นผู้รู้  ผู้ตื่น  ผู้เบิกบานด้วยธรรม

ภะคะวา     

เป็นผู้มีความจำเริญ   จำแนกธรรมสั่งสอนสัตว์

โย  อิมัง  โลกัง  สะเทวะกัง  สะมาระกัง  สะพ๎รัหมะกัง  สัสสะมะณะพ๎ราหมะณิง  ปะชัง  สะเทวะมะนุสสัง  สะยัง  อะภิญญา  สัจฉิกัต๎วา  ปะเวเทสิ

พระผู้มีพระภาคเจ้า  พระองค์ใด  ได้ทรงทำความดับทุกข์ให้แจ้ง    ด้วยพระปัญญาอันยิ่งเองแล้ว  ทรงสอนโลกนี้พร้อมทั้งเทวดา มาร พรหม และหมู่สัตว์  พร้อมทั้งสมณะพราหมณ์  พร้อมทั้งเทวดาและมนุษย์ให้รู้ตาม

โย  ธัมมัง  เทเสสิ             

พระผู้มีพระภาคเจ้าพระองค์ใด ทรงแสดงธรรมแล้ว

อาทิกัล๎ยาณัง                  

ไพเราะในเบื้องต้น

มัชเฌกัล๎ยาณัง                

ไพเราะในท่ามกลาง

ปะริโยสานะกัล๎ยาณัง         

ไพเราะในที่สุด

สาตถัง  สะพ๎ยัญชะนัง  เกวะละปะริปุณณัง  ปะริสุทธัง  พ๎รัหมะจะริยัง  ปะกาเสสิ

ทรงประกาศพรหมจรรย์  คือ แบบแห่งการปฏิบัติ  อันประเสริฐ  บริสุทธิ์ บริบูรณ์  สิ้นเชิง  พร้อมทั้งอรรถะ  พร้อมทั้งพยัญชนะ

ตะมะหัง  ภะคะวันตัง  อะภิปูชะยามิ

ข้าพเจ้า  บูชาอย่างยิ่ง  เฉพาะพระผู้มีพระภาคเจ้า  พระองค์นั้น

ตะมะหัง  ภะคะวันตัง  สิระสา  นะมามิ

ข้าพเจ้า นอบน้อมพระผู้มีพระภาคเจ้า พระองค์นั้น ด้วยเศียรเกล้า
{/* END of the auto scrolling text 1 */}
</TextTicker>


{/* Auto scroller 2 */}
<TextTicker
style={styles.mantraScrollingtext}
duration={202000}
loop
marqueeDelay={1000}
>
 {/* Start of the auto scrolling text 2 */} 
Yo so tathagato He who has attained the truth.

Araham The worthy one,

Samma-sambuddho Perfectly Self-awakened,

Vijja carana sampanno consummates in knowledge and conduct,

Sugato one who has gone the good way, 
lokavidu  knower of the cosmos,

Anuttaro purisa damma sarathi unexcelled trainer of those who could be taught,

Sattha deva manussanam teacher of human and divine beings,

Buddho awakened,

Bhagava blessed,

Yo imam lokam sa devakam sa-marakam sa-bramakam sa-ssamana brahmanim pajam sadeva manussam sayam abhinna sacchikatva pavedesi
who made known – having realized it through direct knowledge -this world with its devas maras, and brahmas, its generations with priests, their rulers and common people,

Yo dhammam dasesi who explained the Dharma 

Adi kalyanam fine in the beginning,

Majjhe kalyanam fine fine in the middle,

Pariyosana kalyanam fine in the end,

Sattham sa byanjanam kevala pari punnam parisuddham brahma cariyam pakasesi who expounded the holy life both in its particulars and in its essence, entirely pure,

Tam aham bhagavantam abhipujayami I worship most highly that Blessed One.

Tam aham bhagavantam sirasa namami To that Blessed One, I bow my head down.
 {/* END of the auto scrolling text 2 */} 
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
{/* Making the mantra also available to scroll horizontaly if the words do not fit */}
<ScrollView horizontal={true}>

{/* Styling the whole section */}
<View style={styles.MantraboxS}>


{/* Mantra Library section */}

{/* Verse 1 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}>
โย  โส  ตะถาคะโต{'\n'}         
</Text>
<Text style={styles.mantratextT}>       
พระตถาคตเจ้านั้น  พระองค์ใด{'\n'}
</Text>
<Text style={styles.mantratextE}>    
Yo so tathagato{'\n'}
</Text>
<Text style={styles.mantratextET}>  
He who has attained the truth.{'\n'}
</Text>
</Text>


{/* Verse 2 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>

<Text style={styles.mantratextS}>
อะระหัง{'\n'}        
</Text>
<Text style={styles.mantratextT}>    

เป็นผู้ไกลจากกิเลส{'\n'}
</Text>
<Text style={styles.mantratextE}>   
Araham{'\n'}
</Text>
<Text style={styles.mantratextET}>  
The worthy one,{'\n'}
</Text>
</Text>


{/* Verse 3 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
สัมมาสัมพุทโธ{'\n'}  
</Text>
<Text style={styles.mantratextT}>  
เป็นผู้ตรัสรู้ชอบได้โดยพระองค์เอง{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Samma-sambuddho {'\n'}
</Text>
<Text style={styles.mantratextET}>  
Perfectly Self-awakened,{'\n'}
</Text>
</Text>


{/* Verse 4 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
วิชชาจะระณะสัมปันโน{'\n'}
</Text>
<Text style={styles.mantratextT}>  
เป็นผู้ถึงพร้อมด้วยวิชชาและจรณะ{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Vijja carana sampanno{'\n'}
</Text>
<Text style={styles.mantratextET}> 
consummates in knowledge and conduct,{'\n'}
</Text>
</Text>


{/* Verse 5 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
สุคะโต{'\n'}                     
</Text>
<Text style={styles.mantratextT}>  
เป็นผู้ไปแล้วด้วยดี{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Sugato{'\n'}
</Text>
<Text style={styles.mantratextET}> 
one who has gone the good way,{'\n'}
</Text>
</Text>


{/* Verse 6 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
โลกะวิทู{'\n'}                   
</Text> 
<Text style={styles.mantratextT}>  
เป็นผู้รู้โลกอย่างแจ่มแจ้ง{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Lokavidu{'\n'}
</Text>
<Text style={styles.mantratextET}>
knower of the cosmos,{'\n'}
</Text>
</Text>


{/* Verse 7 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
อะนุตตะโร  ปุริสะทัมมะสาระถิ{'\n'}   
</Text>
<Text style={styles.mantratextT}> 
เป็นผู้สามารถฝึกบุรุษที่สมควรฝึกได้อย่างไม่มีใครยิ่งกว่า{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Anuttaro purisa damma sarathi{'\n'}
</Text>
<Text style={styles.mantratextET}>
unexcelled trainer of those who could be taught,{'\n'}
</Text>
</Text>


{/* Verse 8 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
สัตถา  เทวะมะนุสสานัง    {'\n'}  
</Text>
<Text style={styles.mantratextT}> 
เป็นครูผู้สอน ของเทวดาและมนุษย์ทั้งหลาย{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Sattha deva manussanam{'\n'}
</Text>
<Text style={styles.mantratextET}>
teacher of human and divine beings,{'\n'}
</Text>
</Text>


{/* Verse 9 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
พุทโธ           {'\n'}                
</Text>
<Text style={styles.mantratextT}> 
เป็นผู้รู้  ผู้ตื่น  ผู้เบิกบานด้วยธรรม{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Buddho{'\n'}
</Text>
<Text style={styles.mantratextET}>
awakened,{'\n'}
</Text>
</Text>


{/* Verse 10 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
ภะคะวา     {'\n'}
</Text>
<Text style={styles.mantratextT}> 
เป็นผู้มีความจำเริญ   จำแนกธรรมสั่งสอนสัตว์{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Bhagava{'\n'}
</Text>
<Text style={styles.mantratextET}>
blessed,{'\n'}
</Text>
</Text>


{/* Verse 11 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
โย  อิมัง  โลกัง  สะเทวะกัง  สะมาระกัง  สะพ๎รัหมะกัง {'\n'} สัสสะมะณะพ๎ราหมะณิง  ปะชัง  สะเทวะมะนุสสัง{'\n'}
สะยัง  อะภิญญา  สัจฉิกัต๎วา  ปะเวเทสิ{'\n'}
</Text>
<Text style={styles.mantratextT}> 
พระผู้มีพระภาคเจ้า  พระองค์ใด{'\n'}   ได้ทรงทำความดับทุกข์ให้แจ้ง{'\n'}  ด้วยพระปัญญาอันยิ่งเองแล้ว{'\n'}
ทรงสอนโลกนี้พร้อมทั้งเทวดา มาร พรหม และหมู่สัตว์{'\n'}
พร้อมทั้งสมณะพราหมณ์  พร้อมทั้งเทวดาและมนุษย์ให้รู้ตาม{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Yo imam lokam sa devakam sa-marakam sa-bramakam {'\n'}
sa-ssamana brahmanim pajam sadeva manussam {'\n'}
sayam abhinna sacchikatva pavedesi{'\n'}
</Text>
<Text style={styles.mantratextET}>
who made known –{'\n'}  having realized it through direct knowledge {'\n'}
-this world with its devas maras,{'\n'}
and brahmas,{'\n'}
its generations with priests, {'\n'} their rulers and common people,{'\n'}
</Text>
</Text>


{/* Verse 11 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
โย  ธัมมัง  เทเสสิ{'\n'}
</Text>
<Text style={styles.mantratextT}> 
พระผู้มีพระภาคเจ้าพระองค์ใด ทรงแสดงธรรมแล้ว {'\n'}
</Text>
<Text style={styles.mantratextE}> 
Yo dhammam dasesi{'\n'}
</Text>
<Text style={styles.mantratextET}>
who explained the Dharma{'\n'}
</Text>
</Text>


{/* Verse 12 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
อาทิ กัล๎ยาณัง{'\n'}
</Text>
<Text style={styles.mantratextT}> 
ไพเราะในเบื้องต้น{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Adi kalyanam{'\n'}
</Text>
<Text style={styles.mantratextET}>
fine in the beginning,{'\n'}
</Text>
</Text>


{/* Verse 13 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
มัชเฌกัล๎ยาณัง{'\n'}
</Text>
<Text style={styles.mantratextT}> 
ไพเราะในท่ามกลาง{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Majjhe kalyanam{'\n'}
</Text>
<Text style={styles.mantratextET}>
fine in the middle,{'\n'}
</Text>
</Text>


{/* Verse 14 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
ปะริโยสานะกัล๎ยาณัง       {'\n'}  
</Text>
<Text style={styles.mantratextT}> 
ไพเราะในที่สุด{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Pariyosana kalyanam{'\n'}
</Text>
<Text style={styles.mantratextET}>
fine in the end,{'\n'}
</Text>
</Text>


{/* Verse 15 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
สาตถัง  สะพ๎ยัญชะนัง  เกวะละปะริปุณณัง {'\n'}  ปะริสุทธัง  พ๎รัหมะจะริยัง  ปะกาเสสิ{'\n'}
</Text>
<Text style={styles.mantratextT}> 
ทรงประกาศพรหมจรรย์  คือ แบบแห่งการปฏิบัติ  อันประเสริฐ {'\n'}  บริสุทธิ์ บริบูรณ์  สิ้นเชิง  พร้อมทั้งอรรถะ  พร้อมทั้งพยัญชนะ{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Sattham sa byanjanam kevala pari punnam{'\n'}  parisuddham brahma cariyam pakasesi{'\n'}
</Text>
<Text style={styles.mantratextET}>
who expounded the holy life {'\n'} both in its particulars and in its essence, entirely pure,{'\n'}
</Text>
</Text>


{/* Verse 16 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
ตะมะหัง  ภะคะวันตัง  อะภิปูชะยามิ{'\n'}
</Text>
<Text style={styles.mantratextT}> 
ข้าพเจ้า  บูชาอย่างยิ่ง  เฉพาะพระผู้มีพระภาคเจ้า  พระองค์นั้น{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Tam aham bhagavantam abhipujayami{'\n'}
</Text>
<Text style={styles.mantratextET}>
I worship most highly that Blessed One.{'\n'}
</Text>
</Text>


{/* Verse 17 */}
{/* Styling the verses */}
<Text style={styles.mantratext}>
<Text style={styles.mantratextS}> 
ตะมะหัง  ภะคะวันตัง  สิระสา  นะมามิ{'\n'}
</Text>
<Text style={styles.mantratextT}> 
ข้าพเจ้า นอบน้อมพระผู้มีพระภาคเจ้า{'\n'}  พระองค์นั้น ด้วยเศียรเกล้า{'\n'}
</Text>
<Text style={styles.mantratextE}> 
Tam aham bhagavantam sirasa namami{'\n'}
</Text>
<Text style={styles.mantratextET}>
To that Blessed One, I bow my head down.{'\n'}
</Text>
</Text>

{/* end of the styling */}
</View>

{/* END OF THE MANTRA LIBRARY */}
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
mantratext: {backgroundColor: '#ffcc00',margin:10,textAlign: 'center' ,alignSelf: 'center',  padding: 10,fontSize:15,fontWeight:'bold',
borderRadius: 100,},

//Styling the colour the mantra in Sanskrit
mantratextS: {color:'#0000FF'},
//Styling the colour the mantra translated to Thai
mantratextT: {color:'#00FF00'},
//Styling the colour the mantra romanized into English
mantratextE: {color:'#FF0000'},
//Styling the colour the mantra translated to English
mantratextET: {color:'#6a0dad'},

// Styling the scrolling text
mantraScrollingtext: {backgroundColor: '#ffcc00',margin:10,textAlign: 'center' ,  padding: 10,fontSize:25,fontWeight:'bold',
borderRadius: 100,},


// Styling the title 
TitleS: {backgroundColor: '#ffab00',margin:10,fontSize: 32, padding: 20,borderRadius: 250,
fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},

// Styling/Centering all of the mantras
MantraboxS: {
justifyContent: 'center',
alignItems: "center",
},

// Styling the back and like button
backbutton: {height:50,width:90,
marginHorizontal:60,
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