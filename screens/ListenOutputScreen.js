//////////////////////////////LISTENER OUTPUT/////////////////////////////////


// importing touch based interactions
import 'react-native-gesture-handler'
// importing react native
import React from 'react';
// importing  media modules from react native
import {View,TouchableOpacity,ImageBackground, StyleSheet,Text, Image} from 'react-native';

//importing the two variables (Only 2 for the time being) from the previous page
import {headmonkStarted} from './CheckScenarioScreen.js';
import {morningCheck} from './CheckScenarioScreen.js';


// INITIALIZING THE SCREEN
function ListenOutputScreen({ navigation }) {

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

// User-Visable area
return (

// general styling of the page to put everything centered
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
{/* inserting the background and styling it to be behind everylayer and covering the whole screen*/}
<ImageBackground source={require("../assets/background.png")} style={{width: '100%', height: "100%",position:'absolute'}}/>


{/* Styling the header text box */}
<View style={styles.Bigtextbox}>
<TouchableOpacity >
<Text style={styles.Title}>We believe you could be listening to </Text>
</TouchableOpacity>
</View>

{/* Outputing one of the potential mantra thhat the reader could've heard */}
{/* This is defaulted to this mantra first as it is one of the most commonly heard one from every event */}
<TouchableOpacity onPress={() => navigation.navigate('TrigemScreen1')}  >
<Text style={styles.Recommendedmantra}>Paying Respect to the Triple Gem{'\n'}คำบูชาพระรัตนตรัย </Text>
</TouchableOpacity>


{/* Here if in the previous page specifc buttons are pressed another suggested mantra in added */}
{/* For the current scenario this mantra would appear if those two scenarios would allign */}
{morningCheck == true && headmonkStarted == true 
? ( 
<TouchableOpacity onPress={() => navigation.navigate('NamoScreen')}  >
<Text style={styles.Recommendedmantra}>Preliminary Passage in Homage to the Buddha{'\n'}บุพพะภาคะนะมะการ </Text>
</TouchableOpacity>
)
//would return a null value if the two check boxes are not ticked  
: null
}

{/* Styling the go back button in case the user want to go back and change their checkbox answer from the last page */}
<View style={styles.backbutton}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Text style={styles.backbuttontext}>Go back</Text>
</TouchableOpacity>
</View>


{/* End of styling */}
</View> 
);
// end of screen
}
// exporting the screen
export default ListenOutputScreen;


// Setting the style
const styles = StyleSheet.create({

// Styling an eye catching title
Title: {color:'#000000',backgroundColor: '#fffc00',margin:10,fontSize: 50, padding: 1, borderRadius: 20,fontFamily:'notoserif',
fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},

// Style the recommended mantra the same as the onw in the library
Recommendedmantra: {backgroundColor: '#ff9900',margin:20,fontSize: 30,   padding: 10, borderRadius: 100,
fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},

// styling the button is it appears better
buttonS: {marginTop:0,marginBottom:50
},

// Styling the back button and its text
backbutton: {height:50,width:90,marginLeft:-280,
justifyContent: 'center',
alignItems: "center",
backgroundColor: '#000000',
padding: 1, borderRadius: 10,
},
backbuttontext: {textAlign: 'center',color:'#ffffff',fontSize:17,fontWeight: 'bold',fontFamily:'notoserif',}
})