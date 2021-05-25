//////////////////////////////SETTING SCREEN/////////////////////////////////


// importing touch based interactions
import 'react-native-gesture-handler'
// importing react native
import React from 'react';
// importing  media modules from react native
import {Text, View, Image,ImageBackground, StyleSheet ,TouchableOpacity,ScrollView} from 'react-native';

// A library API which was to be incorporated into the app
// import { set } from 'react-native-reanimated';


//Same as on the homescreen
//Storing the 3 different styles of the background
const img1 = ("../assets/background.png")
const img2 = ("../assets/background2.png")
const img3 = ("../assets/background3.png")
// variable to help with the background change
var setImage = 1;


// INITIALIZING THE SCREEN
function SettingsScreen({ navigation }) {

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

// FUNCTION FOR BACKGROUND CHANGE
  async function colorButton() {
        setImage = 2
         console.log('toggle new background');
  }


  // User-Visable area
    return (
      // general styling of the page to put everything centered
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* Change to a new image when the button is pressed */}
          {setImage == 1
           ? (  
            //inserting the background and styling it to be behind everylayer and covering the whole screen
         <ImageBackground source={require(img1)} style={{width: '100%', height: "100%",position:'absolute'}}/>
         )
           :    <ImageBackground source={require(img2)} style={{width: '100%', height: "100%",position:'absolute'}}/>
          }
          {/* Enable vertical scrolling */}
        <ScrollView vertical={true}>

          {/* Most of these are unimplemeted at the current state and revisions will be done */}
           <TouchableOpacity 
          // onPress={() => navigation.navigate('NamoScreen')}  
          >
          <Text style={styles.header}>Edit the Presented Temple </Text>
          </TouchableOpacity>
          {/* Change the color of the page */}
          <TouchableOpacity onPress={colorButton}>
           {/* onPress={() => navigation.navigate('NamoScreen')}   */}
          
          <Text style={styles.header}>Change the backgroundColor </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('NamoScreen')}  
          >
          <Text style={styles.header}>Send Feedback </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('NamoScreen')}  
          >
          <Text style={styles.header}>Contact Team </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={exitAppButton}
          >
          <Text style={styles.header}>Quit</Text>
          </TouchableOpacity>
          </ScrollView>
      </View>
    );
    // end of screen
  }

  // exporting the screen
export default SettingsScreen;
const styles = StyleSheet.create({

  //styling the button's text
  header: {backgroundColor: '#d6ba5c',margin:20,fontSize: 40,   padding: 10,
  borderRadius: 100,
  fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},
  // Styling the buttons
  buttonS: {
    flexDirection: 'row',
   justifyContent: 'space-between',
    marginHorizontal:1,
    
  }
})