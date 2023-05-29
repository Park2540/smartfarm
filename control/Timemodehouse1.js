import React, { useState,useEffect } from "react";
import {View,ScrollView,SafeAreaView,Switch,StyleSheet, Alert,Text,Image,TextInput,TouchableHighlight} from "react-native";
import { color } from "react-native-reanimated";
import {  Button, TouchableOpacity, Modal, TimePickerAndroid } from 'react-native';
import {getDatabase,ref,set,update,onValue,remove,child,get} from "firebase/database";
import database from '../firebase/firbase'
import '@react-native-firebase/database';
import DropDownPicker from 'react-native-dropdown-picker';
import { Platform } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import DateTimePickerModal from "react-native-modal-datetime-picker"
import dayjs from "dayjs";
import { ImageBackground } from 'react-native';
import globalStyles from "../global-styles";
import SettingStyles from "../Setting-Styles";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { fonts } from "react-native-elements/dist/config";
import { sendValueToFirebase, } from '../firebase/firbase';

export default function Timemodehouse1({ route, navigation }) {


  var date_str = dayjs('2000-01-01').format('h:mm:ss A');
  //การทำงานของสวิช
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // const [isEnabled1, setIsEnabled1] = useState(false);
  // const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  const onPressHandler = () => {}


  const toggleSwitch1 = (value) => {
    const status = value ? "true" : "false";
    setStatus11_1(value);

    // Update the switch status in Firebase Realtime Database
    set(ref(dbRef, `Node2/Zone1/ModeTime/1${username}/Status11_1`), status)
      .then(() => {
        console.log("Switch status updated successfully");
      })
      .catch((error) => {
        console.error("Error updating switch status:", error);
      });
  };
  
// ส่วนการแสดงข้อมูล
  const dbRef = ref(getDatabase());
  const database = getDatabase();
  const [username, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [on1, seton1] = useState("");
  const [off1, setoff1] = useState("");
  const [day1, setday1] = useState("");
  const [Status11_1, setStatus11_1] = useState(false);
  const [on2, seton2] = useState("");
  const [off2, setoff2] = useState("");
  const [day2, setday2] = useState("");
  const [Status2, setStatus2] = useState("");
  // const [on3, seton3] = useState("");
  // const [off3, setoff3] = useState("");
  // const [day3, setday3] = useState("");
// ส่วนของการดึงข้อมูลจากตัวแปรต่างๆ
useEffect(() => {
  // ดึงข้อมูล ModeTime จากฐานข้อมูล
  const modeTimeRef3 = child(dbRef, `Node2/Zone1/ModeTime/1${username}/Status11_1`);
  const unsubscribe3 = onValue(modeTimeRef3, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const status = snapshot.val();
        setStatus11_1(status === "true");
    } else {
      console.log("No data available");
    }
  },(error) => {
    console.error(error);
  },
  
  );

  const modeTimeRef1 = child(dbRef, `Node2/Zone1/ModeTime/1${username}`);
  const unsubscribe1 = onValue(modeTimeRef1, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      seton1(data["Time21_1"]);
      setoff1(data["Time21_2"]);
      setday1(data["Day11_1"]);
    } else {
      console.log("No data available");
    }
  }, (error) => {
    console.error(error);
  },
  
  );

const modeTimeRef2 = child(dbRef, `Node2/Zone1/ModeTime/2${username}`);
  const unsubscribe2 = onValue(modeTimeRef2, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      seton2(data["Time11_3"]);
      setoff2(data["Time11_4"]);
      setday2(data["Day11_2"]);
      setStatus2(data["Status11_2"]);
    } else {
      console.log("No data available");
    }
  }, (error) => {
    console.error(error);
  });

  return () => {
    // ยกเลิกการติดตามเมื่อคอมโพเนนต์ถูกทำลาย
    off1(modeTimeRef1, 'value', unsubscribe1);
    off2(modeTimeRef2, 'value', unsubscribe2);
    off3(modeTimeRef3, 'value', unsubscribe3);
  };
}, []);
  // function onChangeTime2(event, selectedTime) {
  //   const currentTime = selectedTime || Time2;
  //   setShowModal(Platform.OS === 'ios');
  //   setTime2(currentTime);
  // }

  // const [selectedDay, setSelectedDay] = useState('Sunday');
  const [showModaltime1, setShowModaltime1] = useState(false);
  const [Time21_1, setTime1] = useState('');
  const [Time21_2, setTime2] = useState('');
  const [Day11_1, selectedDay11_1] = useState('');
  

  function updateDatatime1() {
    const path = `Node2/Zone1/ModeTime/1${String(username)}`;
    const db = getDatabase();
    const dbRef = ref(db, path);
    update(dbRef, {
      Time21_1: Time21_1,
      Time21_2: Time21_2,
      Day11_1: Day11_1
    })
    .then(() => {
      alert("ยืนยันการเปลี่ยนแปลง");
      setShowModaltime1(false);
    })
    .catch((error) => {
      alert(error);
    });
  }
  
  const [showModaltime2, setShowModaltime2] = useState(false);
  const [Time11_3, setTime3] = useState('');
  const [Time11_4, setTime4] = useState('');
  const [Day11_2, selectedDay11_2] = useState('');

  function updateDatatime2() {
    const path = `Node2/Zone1/ModeTime/2${String(username)}`;
    const db = getDatabase();
    const dbRef = ref(db, path);
    update(dbRef, {
      Time11_3: Time11_3,
      Time11_4: Time11_4,
      Day11_2: Day11_2
    })
    .then(() => {
      alert("ยืนยันการเปลี่ยนแปลง");
      setShowModaltime2(false);
    })
    .catch((error) => {
      alert(error);
    });
  }
//  

const TimePicker = () => {
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setTime(selectedTime);
    }
    setShowTimePicker(Platform.OS === 'ios');
  };

  const showPicker = () => {
    setShowTimePicker(true);
  };
}
  return (
        <ImageBackground
      		source={require('../assets/background50.png')}
      		style={styles.background}
    	>
    <ScrollView>
       
      <View style={globalStyles.container}>
        <TouchableHighlight style={SettingStyles.items3}>
          <View>
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
              <Image
                source={require("../src/alarm-clock.png")}
                style={SettingStyles.img}
              />
            </View>

            <Text style={SettingStyles.buttonText3}>โหมดตั้งเวลา</Text>
          </View>
        </TouchableHighlight>
      </View>
      
      <TouchableHighlight style={SettingStyles.itemsBtime}
      underlayColor='#00BE00'
       onPress={() => setShowModaltime1(true)}
      >
        
        <View style={SettingStyles.viewImgTextContainer}>
          <SafeAreaView style={ SettingStyles.itemsminandmax} >
						<Text style={ SettingStyles.buttonText3}>{on1}</Text>
      					<Text style={ SettingStyles.t}>เวลาเปิด</Text>
                <View>
          </View>
          {/* <Text style={ SettingStyles.t}>{day1}</Text> */}
    				</SafeAreaView>

					<SafeAreaView style={ SettingStyles.itemsminandmax}>
						<Text style={ SettingStyles.buttonText3}>{off1}</Text>
      					<Text style={ SettingStyles.t}>เวลาปิด</Text>
    				</SafeAreaView>
            <View style={SettingStyles.container2}>
            {/* <Switch
              trackColor={{ false: "#767577", true: "#00BE00" }}
              thumbColor={Status11_1 ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={Status11_1}
            /> */}

          </View>
          </View>
      </TouchableHighlight>
      {/* <TouchableHighlight
          underlayColor='#00BE00'
          onPress={() => setShowModaltime2(true)}
      style={SettingStyles.itemsBtime}>
        <View style={SettingStyles.viewImgTextContainer}>
          
          <SafeAreaView style={ SettingStyles.itemsminandmax} >
						<Text style={ SettingStyles.buttonText3}>{on2}</Text>
      					<Text style={ SettingStyles.t}>เวลาเปิด</Text>
            </SafeAreaView>
            <Text style={ SettingStyles.t}>{day2}</Text>
					<SafeAreaView style={ SettingStyles.itemsminandmax}>
						<Text style={ SettingStyles.buttonText3}>{off2}</Text>
      					<Text style={ SettingStyles.t}>เวลาปิด</Text>
						
    				</SafeAreaView>
            <View style={SettingStyles.container2}>
            <Switch
              trackColor={{ false: "#767577", true: "#00BE00" }}
              thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </View>
      </TouchableHighlight> */}
      
    </ScrollView>

    <View style={styles.main}>
      <Modal 
        transparent={true}
        visible={showModaltime1}
        animationType="slide"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>ตั้งเวลาเปิดปิด</Text>
            <View>
              <Text style={styles.text}>เวลาเปิด</Text>
              <TextInput
                value={Time21_1}
                onChangeText={setTime1} // Updated this line
                style={SettingStyles.input}
                placeholder="เวลาเปิด"
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styles.text}>เวลาปิด</Text>
              <TextInput
                value={Time21_2}
                onChangeText={setTime2} // Updated this line
                style={SettingStyles.input}
                placeholder="เวลาปิด"
                keyboardType="numeric"
              />
            </View>
            {/* <View>
              <Text style={styles.text}>วันที่</Text>
              <DropDownPicker
                items={[
                  {label: 'Mo', value: 'Mo'},
                  {label: 'Tu', value: 'Tu'},
                  {label: 'We', value: 'We'},
                  {label: 'Th', value: 'Th'},
                  {label: 'Fr', value: 'Tu'},
                  {label: 'Sa', value: 'Sa'},
                  {label: 'Su', value: 'Su'},
                  // เพิ่มเองตามต้องการ
                ]}
                selectedValue={Day11_1} // เปลี่ยน defaultValue เป็น selectedValue
                containerStyle={{height: 40}}
                style={{
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 15,
                  color: '#000066',
                  backgroundColor: '#AED6F1', // เปลี่ยนสีพื้นหลังของ DropDownPicker
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#AED6F1'}}
                onChangeItem={(item) => selectedDay11_1(item.value)}
              />
            </View> */}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setShowModaltime1(false)}
              >
                <Text style={styles.buttonText}>ยกเลิก</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={updateDatatime1}
              >
                <Text style={styles.buttonText}>ยืนยัน</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>

    {/* ตั้งเวลาอันที่2 */}
    <View style={styles.main}>
      <Modal 
        transparent={true}
        visible={showModaltime2}
        animationType="slide"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>ตั้งเวลาเปิดปิด</Text>
            <View>
              <Text style={styles.text}>เวลาเปิด</Text>
              <TextInput
                value={Time11_3}
                onChangeText={setTime3} // Updated this line
                style={SettingStyles.input}
                placeholder="เวลาเปิด"
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styles.text}>เวลาปิด</Text>
              <TextInput
                value={Time11_4}
                onChangeText={setTime4} // Updated this line
                style={SettingStyles.input}
                placeholder="เวลาปิด"
                keyboardType="numeric"
              />
            </View>
            {/* <View>
            <Text style={styles.text}>วันที่</Text>
            <DropDownPicker
              items={[
                {label: 'Mo', value: 'Mo'},
                {label: 'Tu', value: 'Tu'},
                {label: 'We', value: 'We'},
                {label: 'Th', value: 'Th'},
                {label: 'Fr', value: 'Tu'},
                {label: 'Sa', value: 'Sa'},
                {label: 'Su', value: 'Su'},
                // เพิ่มเองตามต้องการ
              ]}
              defaultValue={Day11_1}
              containerStyle={{height: 40}}
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 15,
                color: '#000066',
                backgroundColor: '#AED6F1', // เปลี่ยนสีพื้นหลังของ DropDownPicker
              }}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#AED6F1'}}
              onChangeItem={(item) => selectedDay11_2(item.value)}
            />
    </View> */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setShowModaltime2(false)}
              >
                <Text style={styles.buttonText}>ยกเลิก</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={updateDatatime2}
              >
                <Text style={styles.buttonText}>ยืนยัน</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>

    </ImageBackground>
  );
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  text: {
    fontSize: 22,
    // fontWeight: 'bold',
    color: '#000066',
  },
});

