import React, { useState, useEffect } from 'react';
import {  View,SafeAreaView,Switch, StyleSheet, Alert, Text, Image,TextInput,TouchableHighlight } from 'react-native'
import { color } from 'react-native-reanimated'
import { ImageBackground } from 'react-native';
import {  Button, TouchableOpacity, Modal, TimePickerAndroid } from 'react-native';
// import { sendValueToFirebase } from '../firebase/firbase';
import {getDatabase,ref,set,update,onValue,remove,child,get} from "firebase/database";
import database from '../firebase/firbase'
import '@react-native-firebase/database';
import globalStyles from '../global-styles'
import SettingStyles from '../Setting-Styles'

export default function Sensormodehouse1({ route, navigation }){

  const [isEnabled, setIsEnabled] = useState(false);

const toggleSwitch = () => {
  const newEnabled = !isEnabled;
  setIsEnabled(newEnabled);
  setTest3(newEnabled);
};
    const dbRef = ref(getDatabase());
    const database = getDatabase();
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [test1, setTest1] = useState("");
    const [test2, setTest2] = useState("");
    const [test3, setTest3] = useState("");
    

    // clearInterval(setInterval);

    useEffect(() => {
      const intervalId = setInterval(() => {
        get(child(dbRef, `Node2/Zone1/ModeSensor${username}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const test = snapshot.val();
              setTest1(test["Max"]);
              setTest2(test["Min"]);
              setTest3(test["Sensor"]);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }, 100);
    
      return () => clearInterval(intervalId);
    }, []);
    
    useEffect(() => {
      if (test3 !== null) {
        setIsEnabled(test3);
      }
    }, [test3]);
    
	//การทำงานของสวิช
	
	// การเรียกใช้ฟังชัน dialog

    const[showModal,setShowModal]=useState(false)
    const [Min, Setmin] = useState(''); 
    const [Max, Setmax] = useState('');

    function updateData() {
        const path = `Node2/Zone1/ModeSensor${String(username)}`;
        const db = getDatabase();
        const dbRef = ref(db, path);
        update(dbRef, {
          Min: Min,
          Max: Max
        })
        .then(() => {
          alert("ยืนยันการเปลี่ยนแปลง");
          setShowModal(false);
        })
        .catch((error) => {
          alert(error);
        });
      }
    return (
        <ImageBackground
            source={require('../assets/background50.png')}
            style={styles.background}
        >
        
            <View style={globalStyles.container}>
            <TouchableHighlight  style={ SettingStyles.items3}>
				<View >
				{/* <View style={SettingStyles.container1}>
          <Switch
            trackColor={{ false: "#767577", true: "#00BE00" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View> */}
                    <View>
                        <Image source={require('../src/soil-analysis.png')} style={ SettingStyles.img}/>
                    </View>
            	
					<Text style={ SettingStyles.buttonText3}>ความชื้นดิน</Text>
				</View>
                
			</TouchableHighlight>
            </View>
           
            <TouchableHighlight  style={ SettingStyles.itemsBtime}
                underlayColor='#00BE00'
                onPress={() => setShowModal(true)}
            >

				<View style={ SettingStyles.viewImgTextContainer}>
					
					<SafeAreaView style={ SettingStyles.itemsminandmax} >
						<Text style={ SettingStyles.buttonText3}>ต่ำสุด</Text>
      					<Text style={ SettingStyles.buttonText3}>{test2} %</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={ SettingStyles.itemsminandmax}>
						<Text style={ SettingStyles.buttonText3}>สุงสุด</Text>
      					<Text style={ SettingStyles.buttonText3}>{test1} %</Text>
						
    				</SafeAreaView>
              {/* <View style={SettingStyles.container2}>
                <Switch
                  trackColor={{ false: "#767577", true: "#00BE00" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View> */}
					
				</View>
			</TouchableHighlight>
			<View style={styles.main}>
            <Modal 
                transparent={true}
                visible={showModal}
                animationType="slide"
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>ค่าความชื้นดิน</Text>
                    <SafeAreaView >
                    <Text style={styles.text}>ความชื้นต่ำสุด</Text>
                    <TextInput
                        value={Min}
                        onChangeText={(value) => {Setmin(value)}}
                        style={SettingStyles.input}
                        placeholder="ต่ำสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <SafeAreaView >
                    <Text style={styles.text}>ความชื้นสูงสุด</Text>
                    <TextInput
                        value={Max}
                        onChangeText={(value) => {Setmax(value)}}
                        style={SettingStyles.input}
                        placeholder="สุงสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                        underlayColor='#80cbc4'
                        onPress={() => setShowModal(false)}
                    >
                        <Text style={styles.buttonText}>ยกเลิก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.confirmButton]}
                        underlayColor='#80cbc4'
                        onPress={updateData}
                    >
                        <Text style={styles.buttonText}>ยืนยัน</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({

    main:{
        flex:1
        
    },
    buttonView:{
        flex:1,
        justifyContent:'flex-end'
    },
    centeredView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalView:{
        backgroundColor:'#AED6F1',
        padding:30,
        width:300,
        borderRadius:20,
        shadowColor:'#000000',
        elevation:5
    },
    modalText: {
        fontSize: 30,
        marginBottom: 20,
        color: "#ffffff",
        fontWeight: 'bold',
      },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
      text: {
        fontSize: 22,
        // fontWeight: 'bold',
        color: '#000066',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
      },
      button: {
        borderRadius: 25,
        paddingHorizontal: 25,
        paddingVertical: 10,
      },
      cancelButton: {
        backgroundColor: '#cc0033',
        marginRight: 10,
      },
      confirmButton: {
        backgroundColor: '#87B26A',
        marginLeft: 10,
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });
  
    
    
    
    
    
    
    
    
    
