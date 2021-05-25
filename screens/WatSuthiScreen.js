//////////////////////////////Wat Suthi SCREEN/////////////////////////////////

// importing touch based interactions
import 'react-native-gesture-handler'
// importing react native
import React, { useState } from 'react';
// importing  media modules from react native
import {ScrollView, View,TouchableOpacity,ImageBackground, StyleSheet,Text, Image,Button } from 'react-native';


// INITIALIZING THE SCREEN
function WatSuthiScreen({ navigation }) {
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
<TouchableOpacity>
<Image style={{ width: 50, height: 50, marginLeft : 15 }}
// transparent logo made from a logo making site
source={require('../assets/logo.png')}/>
</TouchableOpacity>
),
});
});

// User-Visable area
return (
// general styling of the page to put everything centered
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
{/* inserting the background and styling it to be behind everylayer and covering the whole screen*/}
<ImageBackground source={require("../assets/background.png")} style={{width: '100%', height: "100%",position:'absolute'}}/>


{/* Enable Horizontal scrolling for images */}
<ScrollView horizontal={true}>
<Image source={require("../assets/WatSuthi2.jpg")}style={{width: 400,height: 200}}/>
<Image source={require("../assets/WatSuthi3.jpg")} style={{width: 400,height: 200}}/>
<Image source={require("../assets/WatSuthi.png")} style={{width: 400,height: 200}}/>
</ScrollView>


{/* Enable Vertical Scrolling for texts */}
<ScrollView vertical={true}>
{/* Text deatiling information for the Temple 'Wat Suthi Wararam */}

{/* General Info */}
<Text style={styles.header}>
Wat Suthi Wararam (วัดสุทธิวราราม){'\n'} {'\n'} 
223 Charoen Krung Rd, Yan Nawa, Sathon, Bangkok 10120{'\n'} {'\n'} 
Open: Everyday,      5:30AM–11:30PM (May vary in religious days and special ceremonies)
</Text>

{/* Bio */}
<Text style={styles.text2}>
Bio: Built on the Chareon Krung Road in Sathon, Bangkok. The temple's measurements use
Thai's old measurement totaling to 5 Rai, 3 Ngan and 14 Wa and the temple's land has been bestowed
by King Chulalongkorn or King Rama V in 1881 . 
It has been speculated to be originallly built during the Thonburi period of Thailand.
</Text>

{/* Landmarks */}
<Text style={styles.text2}>
Landmarks:
1 Meter long replica of Buddha's footprint. {'\n'} 
{'\n'} 
Sukhothai period sculpture in Buddha's Image {'\n'} 
{'\n'} 
Pagoda built in the period of King Rama VII
</Text>

{/* Places to visit */}
<Text style={styles.text2}>
Places to visit near Wat Suthi Wararam: {'\n'} 
{'\n'} 
Other temples: {'\n'} 
Wat Yannawa {'\n'} 
{'\n'} 
Food and Drinks: {'\n'} 
Four Seasons Hotel {'\n'} 
Talat Noi {'\n'} 
Warehouse 30{'\n'} 
Puffy Bearkery {'\n'} 
{'\n'} 
Famous attractions:{'\n'} 
CTDC Building {'\n'} 
Chalermkrung Theatre
</Text>

{/* Ending the Scrollable buttons and its styling */}
</ScrollView>
</View>

);
// end of screen
}


// exporting the screen
export default WatSuthiScreen;

// Setting the Styles
const styles = StyleSheet.create({
// text styling
text2: {backgroundColor: '#ffcc00',margin:20,textAlign: 'center',padding: 25,
borderRadius: 100,},

// Header styling
header: {backgroundColor: '#d6ba5c',margin:20,fontSize: 20,   padding: 25,
borderRadius: 100,
fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},

})