//////////////////////////////LIBRARY SCREEN/////////////////////////////////


// importing touch based interactions
import 'react-native-gesture-handler'
// importing  media modules from react native
import {Text,View,ScrollView, Image,ImageBackground, StyleSheet,TouchableOpacity } from 'react-native';
// importing react native
import * as React from 'react';

// INITIALIZING THE SCREEN
export default function App({ navigation }) {
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


{/* Enable vertical scrolling */}
<ScrollView vertical={true}>

{/* Link to their own pages*/}

{/* Triple Gem */}
<TouchableOpacity onPress={() => navigation.navigate('TrigemScreen1')}  >
<Text style={styles.MantratextS}>Paying Respect to the Triple Gem{'\n'}คำบูชาพระรัตนตรัย </Text>
</TouchableOpacity>

{/* Homage */}
<TouchableOpacity onPress={() => navigation.navigate('NamoScreen')}  >
<Text style={styles.MantratextS}>Preliminary Passage in Homage to the Buddha{'\n'}บุพพะภาคะนะมะการ </Text>
</TouchableOpacity>

{/* Praise */}
<TouchableOpacity 
onPress={() => navigation.navigate('PraiseForBuddhaScreen')} >
<Text style={styles.MantratextS}>Praise for Buddha{'\n'}พุทธาภิถุติ  </Text>
</TouchableOpacity>


{/* Below here are the rest of the mantras in the morning chant set */}
{/* They are currently excluded from this build of the program */}
<TouchableOpacity 
// onPress={() => navigation.navigate('NamoScreen')}  
>
<Text style={styles.MantratextS}>Praise for Buddha's Teaching{'\n'}ธัมมาภิถุติ  </Text>
</TouchableOpacity>
<TouchableOpacity 
// onPress={() => navigation.navigate('NamoScreen')} 
>
<Text style={styles.MantratextS}>Praise for the Sangha{'\n'}สังฆาภิถุติ  </Text>
</TouchableOpacity>
<TouchableOpacity 
// onPress={() => navigation.navigate('NamoScreen')}  
>
<Text style={styles.MantratextS}>Salutation to the Triple Gem{'\n'}ระตะนัตตะยัปปะณาทะคาถา</Text>
</TouchableOpacity>
<TouchableOpacity 
// onPress={() => navigation.navigate('NamoScreen')}  
>
<Text style={styles.MantratextS}>Passage Expressing a Sense of Urgency{'\n'}สังเวคะปะริกิตตะนะปาฐะ </Text>
</TouchableOpacity>

{/* Ending the Scrollable buttons and its styling */}
</ScrollView>
</View>


);
// end of screen
}

// Styling
const styles = StyleSheet.create({
// Stying the mantra text
MantratextS: {backgroundColor: '#ff9900',margin:20,fontSize: 20,   padding: 10,
borderRadius: 100,
fontWeight: 'bold',alignSelf: 'center',textAlign: 'center'},
// styling the the boxes
MantraBoxS: {
flexDirection: 'row',
justifyContent: 'space-between',
marginHorizontal:1,

}
})