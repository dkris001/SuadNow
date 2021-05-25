//////////////////////////////HOME SCREEN/////////////////////////////////


// importing touch based interactions
import 'react-native-gesture-handler'
// importing react native
import React, { useState, useEffect } from 'react';
// importing  media modules from react native
import {ScrollView, Text,View, Image,ImageBackground, StyleSheet,TouchableOpacity, Platform,TextInput  } from 'react-native';
// importing the image picker API
import * as ImagePicker from 'expo-image-picker';
// importing the country picker API
import CountryPicker from 'react-native-country-picker-modal'

// importing like1,like2,like3 from the 3 available mantra pages
import {like1} from './NamoScreen.js';
import {like2} from './TrigemScreen1.js';
import { like3 } from './PraiseForBuddhaScreen.js';

// INITIALIZING THE SCREEN
function ProfileScreen({ navigation }) {

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

// Initializing the image variables
const [image, setImage] = useState(null);

// use effect function to use the camera functions
useEffect(() => {
(async () => {
if (Platform.OS !== 'web') {
const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
if (status !== 'granted') {
alert('Sorry, we need camera roll permissions to make this work!');
}
}
})();
}, []);

//PICK IMAGE FUNCTION
const pickImage = async () => {
let result = await ImagePicker.launchImageLibraryAsync({
mediaTypes: ImagePicker.MediaTypeOptions.All,
allowsEditing: true,
aspect: [4, 3],
quality: 1,
});

// tell the console the details of the image selected
console.log(result);

// if the process is cancelled
if (!result.cancelled) {
setImage(result.uri);
}
};

// Intializing the variables  for the country picker
const [value, onChangeText] = React.useState();
const [country, setCountry] = useState()


return (

// general styling of the page to put everything centered
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
{/* inserting the background and styling it to be behind everylayer and covering the whole screen*/}
<ImageBackground source={require("../assets/background.png")} style={{width: '100%', height: "100%",position:'absolute'}}/>


{/* Enable vertical scrolling */}
<ScrollView vertical={true}>

{/* Button for profile pic */}
<View style={styles.ProfileButtonS}>
{/* on press begin the pick image function*/}
<TouchableOpacity onPress={pickImage}>
<Text style={styles.Profiletext}>Profile Pic</Text>
{/* force the styling on the selected image */}
{image && <Image source={{ uri: image }} style={{
height:300,width:300,
marginTop:-55,
flexDirection: 'row',
justifyContent: 'center',
alignItems: "center",
backgroundColor:'#d6ba5c',
padding: 10,
borderRadius: 100,
margin:10,
}} />}
</TouchableOpacity>
</View>


{/* Area for the user to input their details */}
<TextInput
style={{ height: 40, width: 300,borderColor: 'black', borderWidth: 5,marginTop:50,marginBottom:50,textAlign: 'center' }}
defaultValue='Full Name'
onChangeText={text => onChangeText(text)}
value={value}
/>


{/* button to input the country you come from */}
{/* may not display properly sometimes */}
<View style={styles.ProfiletextS}>
<TouchableOpacity onPress={pickImage}>
<CountryPicker 
countryCodes
withFilter
withFlag
withCountryNameButton
withAlphaFilter
onSelect={(country) => setCountry(country)}
/> 
</TouchableOpacity>
</View>


{/* Area for the user to input their details */}
<TextInput
style={{ height: 140, width: 300,borderColor: 'black', borderWidth: 5,marginTop:50,fontSize:30,textAlign: 'center'}}
defaultValue='Notes'
onChangeText={text => onChangeText(text)}
value={value}
/>

{/* Display any mantras that the user have saved */}
<Text style={styles.MantratextS}>Saved Mantras</Text>

{/* Will only display if the like button is pressed on NamoScreen*/}
{like1 == true
? (  
<TouchableOpacity onPress={() => navigation.navigate('NamoScreen')}  >
<Text style={styles.Mantratext}> Preliminary Passage in Homage to the Buddha{'\n'}บุพพะภาคะนะมะการ </Text>
</TouchableOpacity>
)
: null
}
{/* Will only display if the like button is pressed on TrigemScreen1*/}
{like2 == true
? ( 
<TouchableOpacity onPress={() => navigation.navigate('TrigemScreen1')}  >
<Text style={styles.Mantratext}> Paying Respect to the Triple Gem{'\n'}คำบูชาพระรัตนตรัย </Text>
</TouchableOpacity>
)
: null
}
{/* Will only display if the like button is pressed on PraiseForBuddhaScreen*/}
{like3 == true
? ( 
<TouchableOpacity onPress={() => navigation.navigate('PraiseForBuddhaScreen')}  >
<Text style={styles.Mantratext}> Praise for Buddha{'\n'}พุทธาภิถุติ  </Text>
</TouchableOpacity>
)
: null
}
{/* Ending the Scrollable buttons and its styling */}
</ScrollView>
</View>

);
// end of screen
}

// exporting the screen
export default ProfileScreen;


// Setting the style
const styles = StyleSheet.create({

// styling the profile text
Profiletext: {textAlign: 'center',color:'#ffffff',fontSize:50},

// styling the text for the mantrabox
Mantratext: {backgroundColor: '#ff9900',marginTop:20,fontSize: 20,   padding: 10,
borderRadius: 100,
fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},

// styling for the subtitle for the mantrabox
MantratextS: {backgroundColor: '#ff8000',marginTop:20,fontSize: 20,   padding: 10,
borderRadius: 100,
fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},

// Styling the button for the profile picture
ProfileButtonS: {height:300,width:300,
marginTop:20,
flexDirection: 'row',
justifyContent: 'center',
alignItems: "center",
backgroundColor:'#d6ba5c',
padding: 10,
borderRadius: 100,
},

// Styling the text within the button
ProfiletextS: {height:80,width:160,
justifyContent: 'center',
backgroundColor:'#d6ba5c',
alignItems: "center",
textAlign: 'center',
padding: 0,
borderRadius: 200,
}
})
