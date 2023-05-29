import React, { useState,useEffect } from "react";
import { View, StyleSheet, Alert, Text, Image,Switch,TouchableHighlight, TouchableOpacity, Button } from 'react-native'
import { color } from 'react-native-reanimated'
import { ImageBackground } from 'react-native';
import dayjs from 'dayjs'

import globalStyles from '../global-styles'
import SettingStyles from '../Setting-Styles'
import {getDatabase,ref,set,update,onValue,remove,child,get} from "firebase/database";
import database from '@react-native-firebase/database';


export default function Maincontrol({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);
  	//dayjs.extend(LocalizedFormat);
    var date_str = dayjs('2000-01-01').format('h:mm:ss A');


	const dbRef = ref(getDatabase());
  const database = getDatabase();
  const [username, setName] = useState("");
  const [Status1, setStatus1] = useState("");
  const [Status2, setStatus2] = useState("");
  const [Status3, setStatus3] = useState("");
  const [Status4, setStatus4] = useState("");
  const [Status5, setStatus5] = useState("");
  useEffect(() => {
	const modeTimeRef1 = child(dbRef, `Node1/Zone1${username}`);
	const unsubscribe1 = onValue(modeTimeRef1, (snapshot) => {
	  if (snapshot.exists()) {
		const data = snapshot.val();
		setStatus1(data["Valve"]);
	  } else {
		console.log("No data available");
	  }
	}, (error) => {
	  console.error(error);
	},
	
	);
	const modeTimeRef2 = child(dbRef, `Node1/Zone2${username}`);
	const unsubscribe2 = onValue(modeTimeRef2, (snapshot) => {
	  if (snapshot.exists()) {
		const data = snapshot.val();
		setStatus2(data["Valve"]);
	  } else {
		console.log("No data available");
	  }
	}, (error) => {
	  console.error(error);
	},
	
	);
	const modeTimeRef3 = child(dbRef, `Node1/Zone3${username}`);
	const unsubscribe3 = onValue(modeTimeRef3, (snapshot) => {
	  if (snapshot.exists()) {
		const data = snapshot.val();
		setStatus3(data["Valve"]);
	  } else {
		console.log("No data available");
	  }
	}, (error) => {
	  console.error(error);
	},
	
	);
	const modeTimeRef4 = child(dbRef, `Node2/Zone1${username}`);
	const unsubscribe4 = onValue(modeTimeRef4, (snapshot) => {
	  if (snapshot.exists()) {
		const data = snapshot.val();
		setStatus4(data["Valve"]);
	  } else {
		console.log("No data available");
	  }
	}, (error) => {
	  console.error(error);
	},
	
	);
	const modeTimeRef5 = child(dbRef, `Node2/Zone2${username}`);
	const unsubscribe5 = onValue(modeTimeRef5, (snapshot) => {
	  if (snapshot.exists()) {
		const data = snapshot.val();
		setStatus5(data["Valve"]);
	  } else {
		console.log("No data available");
	  }
	}, (error) => {
	  console.error(error);
	},
	
	);
	return () => {
		// ยกเลิกการติดตามเมื่อคอมโพเนนต์ถูกทำลาย
		(modeTimeRef1, 'value', unsubscribe1);
		(modeTimeRef2, 'value', unsubscribe2);
		(modeTimeRef3, 'value', unsubscribe3);
		(modeTimeRef4, 'value', unsubscribe4);
		(modeTimeRef5, 'value', unsubscribe5);
		// off(modeTimeRef3, 'value', unsubscribe3);
	  };

  },[]);
    return (
        <ImageBackground
      		source={require('../assets/background50.png')}
      		style={styles.background}
    	>
        <View style={globalStyles.container}>
			
            <View style={{marginTop:10,}}>
                <Text> {'\n'}</Text>
            </View>
			
			{/* <ImageBackground
      		source={require('./assets/background.jpg')}
      		style={styles.background}>
      
    		</ImageBackground> */}

            <TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('ConDurian1')}
			>
				
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>ทุเรียนโซน 1</Text>
					<View style={styles.container1}>
						<Text style={{ color: Status1 === "Zone_1_OFF" ? "red" : "green" }}>
      						{Status1 === "Zone_1_OFF" ? "ปิด" : "เปิด"}
    					</Text>
    				</View>
				</View>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('ConDurian2')}
			>
				<View style={styles.viewImgTextContainer}>
					
					<Text style={styles.buttonText}>ทุเรียนโซน 2</Text>
					<View style={styles.container1}>
					<Text style={{ color: Status2 === "Zone_2_OFF" ? "red" : "green" }}>
      						{Status2 === "Zone_2_OFF" ? "ปิด" : "เปิด"}
    					</Text>
      					{/* <Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch1}
        					value={isEnabled1}
      					/> */}
    				</View>
				</View>
			</TouchableHighlight>

            <TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('ConDurian3')}
			>
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>ทุเรียนโซน 3</Text>
					<View style={styles.container1}>
						<Text style={{ color: Status3 === "Zone_3_OFF" ? "red" : "green" }}>
      						{Status3 === "Zone_3_OFF" ? "ปิด" : "เปิด"}
    					</Text>
    				</View>
				</View>
			</TouchableHighlight>
			<TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Conhouse1')}
			>
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>โรงเรือน 1 </Text>
					<View style={styles.container1}>
						<Text style={{ color: Status4 === "Zone_1_OFF" ? "red" : "green" }}>
      						{Status4 === "Zone_1_OFF" ? "ปิด" : "เปิด"}
    					</Text>
    				</View>
				</View>
			</TouchableHighlight>
			<TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Conhouse2')}
			>
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>โรงเรือน 2 </Text>
					<View style={styles.container1}>
						<Text style={{ color: Status5 === "Zone_2_OFF" ? "red" : "green" }}>
      						{Status5 === "Zone_2_OFF" ? "ปิด" : "เปิด"}
    					</Text>
    				</View>
				</View>
			</TouchableHighlight>

            
           
        </View>
		</ImageBackground>
    )
}
const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: 'cover',
		
	  },
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50
	},
	container1: {
		marginLeft:100,
		paddingLeft:20,
	  },
	items: {
		width: 350,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: '#80cbc4',
		elevation: 10, // เพิ่ม elevation ให้กับปุ่ม
		shadowColor: '#000', // กำหนดสีเงา
	},
	buttonOpacity: {

	},
	buttonHighlight: {

	},
	buttonText: {
		fontSize: 20,
		color: 'white'
	},
	viewImgTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
	},
	img: {
		height: 40,
		width: 40,
		marginRight: 5
	}


})