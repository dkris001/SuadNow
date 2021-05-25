//////////////////////////////SCENARIO CHECK/////////////////////////////////


// importing the checkbox API
import Checkbox from 'expo-checkbox';
// importing react native
import React, { useState } from 'react';
// importing media modules from react native
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image } from 'react-native';

// Initializing variables that can be exported and used in the ListenOutputScreen page
var morningCheck = false;
var headmonkStarted = false;
export {morningCheck};
export {headmonkStarted};



// INITIALZING THE SCREEN
export default function App({ navigation }) {

//initializing the state for the checkboxes
const [isChecked1, setChecked1] = useState(false);
const [isChecked2, setChecked2] = useState(false);
const [isChecked3, setChecked3] = useState(false);
const [isChecked4, setChecked4] = useState(false);
const [isChecked5, setChecked5] = useState(false);

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
<TouchableOpacity
>
<Image style={{ width: 50, height: 50, marginLeft : 15 }}
// transparent logo made from a logo making site
source={require('../assets/logo.png')}/>
</TouchableOpacity>
),
});
});

// User-Visable area
return (
// / general styling of the page to put everything centered
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
{/* inserting the background and styling it to be behind everylayer and covering the whole screen*/}
<ImageBackground source={require("../assets/background.png")} style={{width: '100%', height: "100%",position:'absolute'}}/>


{/* Text asking the user to select the checkboxes that corresponds to their current scenario */}
<Text style={styles.TitleS}>Please select scenarios that applies to you</Text>


{/* styling them using a box */}
<View style={styles.BoxStyling}>
{/* Creating a check box to ask if the user is in a weekday or weekend */}
{/* Checkbox styling and Setting the value change attributes */}
<Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
{/* Checkbox text styling */}
<Text style={styles.paragraphStyling}>Is it a Weekday?</Text>
</View>

{/* styling them using a box */}
<View style={styles.BoxStyling}>
{/* Creating a check box to ask if the user is in the temple for a morning event or not?*/}
{/* Checkbox styling and Setting the value change attributes */}
{/* Here the variable morning Check will be checked true if the checkbox is interacted */}
<Checkbox style={styles.checkbox}value={isChecked2}onValueChange={setChecked2}

// This is commented out as of 23/5/21 as a problem is found surrounding the logic for the checkbox outputs
// onValueChange={morningCheck = true}

/>
{/* Checkbox text styling */}
<Text style={styles.paragraphStyling}>Is it in the morning?</Text>
</View>

{/* styling them using a box */}
<View style={styles.BoxStyling}>
{/* Creating a check box to ask if in the temple the monks have started praying or not? */}
{/* Checkbox styling and Setting the value change attributes */}
{/* Here the variable headmonkstarted will be checked true if the checkbox is interacted */}
<Checkbox style={styles.checkbox}value={isChecked3}onValueChange={headmonkStarted = true}
onValueChange={setChecked3}/>
{/* Checkbox text styling */}
<Text style={styles.paragraphStyling}>Has the head monk started praying?</Text>
</View>

{/* styling them using a box */}
<View style={styles.BoxStyling}>
{/* Creating a check box to ask if the user is in the Buddhist temple in Thailand or not?*/}
{/* Checkbox styling and Setting the value change attributes */}
<Checkbox style={styles.checkbox} value={isChecked4}onValueChange={setChecked4}/>
{/* Checkbox text styling */}
<Text style={styles.paragraphStyling}>Are you in a Buddhist Temple in Bangkok?</Text>
</View>

{/* styling them using a box */}
<View style={styles.BoxStyling}>
{/* Creating a check box to ask if the user is in the Buddhist temple in Thailand or not?*/}
{/* Checkbox styling and Setting the value change attributes */}
<Checkbox style={styles.checkbox}value={isChecked5}onValueChange={setChecked5}/>
{/* Checkbox text styling */}
<Text style={styles.paragraphStyling}>Are you in a large religious event?</Text>
</View>


{/*  Styling the Proceed button*/}
{/* Linking the user to the next page */}
<TouchableOpacity onPress={() => navigation.navigate('ListenOutputScreen')}  >
<Text style={styles.ProceedButtonStyling}>Proceed</Text>
</TouchableOpacity>

{/*Ending the styling  */}
</View>
);
// end of screen
}

// Setting the style
const styles = StyleSheet.create({

// Styling the checkboxes so they are centered and have their own borders
BoxStyling: {
flexDirection: 'row',
alignItems: 'center', backgroundColor:'#d6ba5c',
padding: 10,
borderRadius: 100,
margin:10
},

// Styling  words in the checkboxes
paragraphStyling: {
fontSize: 15,
},

// Additional styling for each boxes to spread them equally
checkbox: {
margin: 8,
},

// Styling the proceed button 
ProceedButtonStyling: {textAlign: 'center',color:'#ffffff',fontSize:40,fontWeight: 'bold',backgroundColor:'#f6ba5c',
padding: 10,margin:20,borderRadius: 100,},

// Styling the title of the page 
TitleS: {backgroundColor: '#ffab00',margin:10,fontSize: 32, padding: 20,borderRadius: 250,
fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},
});