import React, { useState } from "react";
import { View, StyleSheet, Alert, Text, Image,Switch,TouchableHighlight, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import { ImageBackground } from 'react-native';
import globalStyles from '../global-styles'
import { sendValueToFirebase1, database } from '../firebase/firbase';
import {getDatabase,ref,set,update,onValue,remove,child,get} from "firebase/database";

export default function Setmodehouse2({ route, navigation }){
	const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
//   const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);


  const dbRef = ref(getDatabase());
  const database = getDatabase();
  const [username, setName] = useState("");
//   const [email, setEmail] = useState("");
  const [mode1, setTest1] = useState("");

  const [mode, setMode] = useState("");

const toggleSwitch = () => {
  setIsEnabled((previousState) => {
    setIsEnabled1(false);
    setMode(previousState ? "Normal mode" : "Time mode");
    update(child(dbRef, `Node2/Zone2${username}`), { Mode: previousState ? "Normal mode" : "Time mode" });
    return !previousState;
  });
};

const toggleSwitch1 = () => {
  setIsEnabled1((previousState) => {
    setIsEnabled(false);
    setMode(previousState ? "Normal mode" : "Sensor mode");
    update(child(dbRef, `Node2/Zone2${username}`), { Mode: previousState ? "Normal mode" : "Sensor mode" });
    return !previousState;
  });
};

  setInterval(() => {
    get(child(dbRef, `Node2/Zone2${username}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
    //    console.log(snapshot.val());
      var test = snapshot.val();
      setTest1(test["Mode"]);

    }
    else {
    //   console.log("No data available");
    }
  })
  .catch((error) => {
    //console.error(error);
  })

}, 100);
  
  
    return (
        <ImageBackground
      		source={require('../assets/background50.png')}
      		style={styles.background}
    	>
        <View style={globalStyles.container}>
           
           <TouchableHighlight style={[styles.items]}>
		   		<View style={styles.viewImgTextContainer}>
					{mode === 'Normal mode' && (
						<Text style={styles.buttonText}>โหมดปกติ</Text>
					)}
					{mode === 'Time mode' && (
						<Text style={styles.buttonText}>โหมดตั้งเวลา</Text>
					)}
					{mode === 'Sensor mode' && (
						<Text style={styles.buttonText}>โหมดเซ็นเซอร์</Text>
					)}
				</View>

			</TouchableHighlight>
            <TouchableHighlight  style={[styles.items3,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Timemodehouse2')}
			>
				
				<View >
                <View style={styles.container1}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch}
        					value={isEnabled}
      					/>
    				</View>
                    <View>
                        <Image source={require('../src/alarm-clock.png')} style={styles.img} />
                    </View>
            	
					<Text style={styles.buttonText3}>โหมดตั้งเวลา</Text>
				</View>
                
			</TouchableHighlight>
            <View style={{marginTop:10,}}>
                <Text> {'\n'}</Text>
            </View>
            {/* <TouchableHighlight  style={[styles.items3,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Sensormodehouse2')}
			>
				<View >
					<View style={styles.container1}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch1}
        					value={isEnabled1}
      					/>
    				</View>
					<Image source={require('../src/soil-analysis.png')} style={styles.img} />
					<Text style={styles.buttonText3}>โหมดเซ็นเซอร์</Text>
				</View>
			</TouchableHighlight> */}
			

            
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50
	},
	container1: {
		flex: 1,
	  },
	  container2: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	  },
	items: {
		width: 150,
		height: 45,
        // marginTop:20,
        marginLeft:90,
        marginRight:90,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: '#80cbc4'
	},
    items1:{
        marginBottom: 15
    },
	buttonText: {
		fontSize: 20,
		color: '#ffffff'
	},
    buttonText1: {
		fontSize: 60,
		color: '#ffffff'
	},
    buttonText2: {
		fontSize: 30,
		color: '#00BE00'
	},
	viewImgTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
		
	},
    button: {
		width: 200,
		height: 200,
        marginTop:20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 200,
	},


	items3: {
        marginTop:20,
        marginLeft:20,
		width: 150,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 20,
		backgroundColor: '#AED6F1'
	},
	buttonOpacity: {

	},
	buttonHighlight: {

	},
    textInput: {
		height: 32,
		color: 'black',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#aaa',
		marginTop: 5,
		paddingTop: 3,
		paddingBottom: 3
	},
	buttonText3: {
        marginTop:10,
		fontSize: 20,
		color: '#ffffff'
	},
	img: {
        marginLeft:15,
		height: 80,
		width: 80,
        alignItems: 'center',
		marginRight: 5
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 15,
	  },

})