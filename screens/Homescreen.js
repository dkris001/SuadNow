//////////////////////////////HOME SCREEN/////////////////////////////////


// importing touch based interactions
import 'react-native-gesture-handler'
// importing  media modules from react native
import {ScrollView, View,TouchableOpacity,ImageBackground, StyleSheet,Text, Image} from 'react-native';
// importing react native
import React from 'react';

// INITIALIZING THE SCREEN
function HomeScreen({ navigation }) {

//Importing the 3 different version of the background which can be changed in the setting screen
const img1 = ("../assets/background.png")
const img2 = ("../assets/background2.png")
const img3 = ("../assets/background3.png")

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
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
{/* inserting the background and styling it to be behind everylayer and covering the whole screen*/}
<ImageBackground source={require(img1)} style={{width: '100%', height: "100%",position:'absolute'}}/>


{/* Setting the container */}
<View style={styles.container}>
{/* Setting the Temple banner and the link into the temple page*/}
<Image source={require("../assets/WatSuthi.png")} style={{width: '100%', height:'30%',position:'absolute',
opacity:0.5,  borderColor: "black",borderWidth: 5}}/>

{/* Button to navigate to the temple info screen */}
<View style={styles.TransButtonStyling}>
<TouchableOpacity onPress={() => navigation.navigate('WatSuthiScreen')}  >
<Text style={styles.Imgtext}>Explore</Text>
</TouchableOpacity>
</View>


{/* Setting up the menu */}
{/* Making the manu buttons scrollable */}
<ScrollView horizontal={true}>
{/* Setting the button for the library page */}
<View style={styles.ButtonStyling}>
<TouchableOpacity onPress={() => navigation.navigate('SoundsScreen')}>
{/* styling of the icon here are different between each of them */}
<Image style={{ width: 150, height: 150,}}
source={require('../assets/library.png')}/>
<Text style={styles.IconHeader}>Library</Text>
</TouchableOpacity>
</View>

{/* Setting the button for the listener page*/}
<View style={styles.ButtonStyling}>
<TouchableOpacity onPress={() => navigation.navigate('ListenScreen')} >
{/* styling of the icon here are different between each of them */}
<Image style={{ width: 80, height: 120,marginLeft:45}}
source={require('../assets/mic.png')}/>
<Text style={styles.IconHeader}>Listener</Text>
</TouchableOpacity>
</View>

{/* Setting the button for the profile page */}
<View style={styles.ButtonStyling}>
<TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
{/* styling of the icon here are different between each of them */}
<Image style={{ width: 150, height: 150,}}
source={require('../assets/profile.png')}/>
<Text style={styles.IconHeader}>Profile</Text>
</TouchableOpacity>
</View>

{/* Setting the button for the setting page */}
<View style={styles.ButtonStyling}>
<TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}  >
{/* styling of the icon here are different between each of them */}
<Image style={{ width: 150, height: 150,}}
source={require('../assets/setting.png')}/>
<Text style={styles.IconHeader}>Setting</Text>
</TouchableOpacity>
</View>

{/* Ending the Scrollable buttons and its styling */}
</ScrollView>
</View>
</View>
);
// end of screen
}
// exporting the screen
export default HomeScreen;

// Setting the Styles
const styles = StyleSheet.create({

// Styling the icon text with a large  white font
IconHeader: {textAlign: 'center',color:'#ffffff',fontSize:50},

// Styling the banner text for the temple with a bold and noticable font
Imgtext: {textAlign: 'center',color:'#ffffff',fontSize:30,fontWeight: 'bold',fontFamily:'notoserif'},

// Styling the Buttons for navigation
// Size of the button itself and the spacing around it
ButtonStyling: {height:300,width:300,margin:50,marginTop:200,
// aligning them correctly
flexDirection: 'row',
justifyContent: 'center',
alignItems: "center",
backgroundColor:'#d6ba5c',
padding: 10,
borderRadius: 100,
},

// Styling the transparent button for the banner to be centered correctly using the margins
TransButtonStyling: {height:80,width:160,
justifyContent: 'center',
alignItems: "center",
marginLeft:130,
marginTop:50,
}
})