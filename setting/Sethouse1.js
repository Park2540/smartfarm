import React, { useState,useEffect } from "react";
import {Button, Modal,View,SafeAreaView, StyleSheet,TextInput, Alert, Text, Image,Switch,TouchableHighlight,ScrollView } from 'react-native'
import { color } from 'react-native-reanimated'
import { ImageBackground } from 'react-native';
import { TouchableOpacity, TimePickerAndroid } from 'react-native';
import {getDatabase,ref,set,update,onValue,remove,child,get} from "firebase/database";
import database from '../firebase/firbase'
import '@react-native-firebase/database';
import globalStyles from '../global-styles'
import SettingStyles from '../Setting-Styles'

export default function Sethouse1({route, navigation }) {

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

//   const [modalVisible, setModalVisible] = useState(false);

//   ความชื้นในดิน
	const dbRef = ref(getDatabase());
	const database = getDatabase();
	const [username, setName] = useState("");
	const [AirTemperaturetest1, setAirTemperatureTest1] = useState("");
	const [AirTemperaturetest2, setAirTemperatureTest2] = useState("");
	const [Resulttest1, setResultTest1] = useState("");

	const [Humiditytest1, setHumidityTest1] = useState("");
	const [Humiditytest2, setHumidityTest2] = useState("");
	const [Resulttest2, setResultTest2] = useState("");

	const [Lighttest1, setLightTest1] = useState("");
	const [Lighttest2, setLightTest2] = useState("");
	const [Resulttest3, setResultTest3] = useState("");

	const [Moisturetest1, setMoistureTest1] = useState("");
	const [Moisturetest2,setMoistureTest2] = useState("");
	const [Resulttest4, setResultTest4] = useState("");

	const [SoilTemperaturetest1, setSoilTemperatureTest1] = useState("");
	const [SoilTemperaturetest2,setSoilTemperatureTest2] = useState("");
	const [Resulttest5, setResultTest5] = useState("");


	useEffect(() => {
		const unsubscribe1 = onValue(child(dbRef, `Node2/Notification/AirTemperature${username}`), (snapshot) => {
		  if (snapshot.exists()) {
			const test = snapshot.val();
			setAirTemperatureTest1(test["MaxAir"]);
			setAirTemperatureTest2(test["MinAir"]);
			setResultTest1(test["Result"]);
		  }
		});
		const unsubscribe2 = onValue(child(dbRef, `Node2/Notification/Humidity${username}`), (snapshot) => {
		  if (snapshot.exists()) {
			const test = snapshot.val();
			setHumidityTest1(test["MaxHum"]);
			setHumidityTest2(test["MinHum"]);
			setResultTest2(test["Result"]);
		  }
		});
		const unsubscribe3 = onValue(child(dbRef, `Node2/Notification/Light${username}`), (snapshot) => {
		  if (snapshot.exists()) {
			const test = snapshot.val();
			setLightTest1(test["MaxLig"]);
			setLightTest2(test["MinLig"]);
			setResultTest3(test["Result"]);
		  }
		});
		const unsubscribe4 = onValue(child(dbRef, `Node2/Notification/Moisture${username}`), (snapshot) => {
		  if (snapshot.exists()) {
			const test = snapshot.val();
			setMoistureTest1(test["MaxMoi"]);
			setMoistureTest2(test["MinMoi"]);
			setResultTest4(test["Result"]);
		  }
		});
		const unsubscribe5 = onValue(child(dbRef, `Node2/Notification/SoilTemperature${username}`), (snapshot) => {
		  if (snapshot.exists()) {
			const test = snapshot.val();
			setSoilTemperatureTest1(test["MaxSoi"]);
			setSoilTemperatureTest2(test["MinSoi"]);
			setResultTest5(test["Result"]);
		  }
		});
		return () => {
		  unsubscribe1();
		  unsubscribe2();
		  unsubscribe3();
		  unsubscribe4();
		  unsubscribe5();
		};
	  }, []);
	  

	
	// เรียกใช้ modal AirTemperature อุณหภูมิในอากาศ
	const[showModalAir,setShowModalAir]=useState(false)
    const [MinAir, SetminAir] = useState(''); 
    const [MaxAir, SetmaxAir] = useState('');

	function updateDataAir() {
		const path = `Node2/Notification/AirTemperature${String(username)}`;
		const db = getDatabase();
		const dbRef = ref(db, path);
		update(dbRef, {
		  MinAir: MinAir,
		  MaxAir: MaxAir
		})
		.then(() => {
		  alert("ยืนยันการเปลี่ยนแปลง");
		  setShowModalAir(false);
		})
		.catch((error) => {
		  alert(error);
		});
	  }
	  
	  // เรียกใช้ modal Humidity ความชื้นอากาศ
	const[showModalHum,setShowModalHum]=useState(false)
    const [MinHum, SetminHum] = useState(''); 
    const [MaxHum, SetmaxHum] = useState('');
	function updateDataHum() {
        const path = `Node2/Notification/Humidity${String(username)}`;
        const db = getDatabase();
        const dbRef = ref(db, path);
        update(dbRef, {
          MinHum: MinHum,
          MaxHum: MaxHum
        })
        .then(() => {
          alert("ยืนยันการเปลี่ยนแปลง");
          setShowModalHum(false);
        })
        .catch((error) => {
          alert(error);
        });
      }

	  // เรียกใช้ modal Light ความเข็มแสง
	  const[showModalLi,setShowModalLig]=useState(false)
    const [MinLig, SetminLig] = useState(''); 
    const [MaxLig, SetmaxLig] = useState('');
	function updateDataLig() {
        const path = `Node2/Notification/Light${String(username)}`;
        const db = getDatabase();
        const dbRef = ref(db, path);
        update(dbRef, {
          MinLig: MinLig,
          MaxLig: MaxLig
        })
        .then(() => {
          alert("ยืนยันการเปลี่ยนแปลง");
          setShowModalLig(false);
        })
        .catch((error) => {
          alert(error);
        });
      }
	  // เรียกใช้ modal Moisture ความชื้นดิน
	  const[showModalMoi,setShowModalMoi]=useState(false)
    const [MinMoi, SetminMoi] = useState(''); 
    const [MaxMoi, SetmaxMoi] = useState('');
	function updateDataMoi() {
        const path = `Node2/Notification/Moisture${String(username)}`;
        const db = getDatabase();
        const dbRef = ref(db, path);
        update(dbRef, {
          MinMoi: MinMoi,
          MaxMoi: MaxMoi
        })
        .then(() => {
          alert("ยืนยันการเปลี่ยนแปลง");
          setShowModalMoi(false);
        })
        .catch((error) => {
          alert(error);
        });
      }
	  // เรียกใช้ modal SoilTemperature อุณหภูมิดิน
	  const[showModalSoi,setShowModalSoi]=useState(false)
    const [MinSoi, SetminSoi] = useState(''); 
    const [MaxSoi, SetmaxSoi] = useState('');
	  function updateDataSoi() {
        const path = `Node2/Notification/SoilTemperature${String(username)}`;
        const db = getDatabase();
        const dbRef = ref(db, path);
        update(dbRef, {
          MinSoi: MinSoi,
          MaxSoi: MaxSoi
        })
        .then(() => {
          alert("ยืนยันการเปลี่ยนแปลง");
          setShowModalSoi(false);
        })
        .catch((error) => {
          alert(error);
        });
      }
    return (
		<ScrollView>
		<ImageBackground
      		source={require('../assets/background50.png')}
      		style={styles.background}
    	>
        <View style={globalStyles.container}>

		<TouchableOpacity underlayColor='#00BE00' onPress={() => setShowModalMoi(true)}>
		<ImageBackground
      			style={[styles.itemsbbb]}
      			source={require('../assets/images.png')}
				opacity={0.8}
    		>

				<View style={{ flexDirection: 'row' }}>
				<Text style={styles.text1}>ความชื้นในดิน</Text>
				<View style={styles.container2}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch}
        					value={isEnabled}
      					/>
    				</View>
				</View>
				
					<View style={{ flexDirection: 'row' }}>
					<SafeAreaView style={[styles.itemsminandmax]} >
						<Text style={[styles.text2]}>ต่ำสุด</Text>
      					<Text style={[styles.text2]}>{Moisturetest2} %</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={[styles.itemsminandmax]}>
						<Text style={[styles.text2]}>สุงสุด</Text>
      					<Text style={[styles.text2]}>{Moisturetest1} %</Text>
    				</SafeAreaView>
					</View>
		</ImageBackground>
		</TouchableOpacity>
			
		<TouchableOpacity underlayColor='#00BE00' onPress={() => setShowModalHum(true)}>
			<ImageBackground
				
				style={[styles.itemsbbb]}
				source={require('../assets/airhumidity.gif')}>

				<View style={{ flexDirection: 'row' }}>
				<Text style={styles.text1}>ความชื้นในอากาศ</Text>
				<View style={styles.container2}>
						<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch1}
        					value={isEnabled1}
      					/>
    				</View>
					</View>
				
					<View style={{ flexDirection: 'row' }}>
					<SafeAreaView style={[styles.itemsminandmax]} >
						<Text style={[styles.text2]}>ต่ำสุด</Text>
      					<Text style={[styles.text2]}>{Humiditytest2} %</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={[styles.itemsminandmax]}>
						<Text style={[styles.text2]}>สุงสุด</Text>
      					<Text style={[styles.text2]}>{Humiditytest1} %</Text>
    				</SafeAreaView>
					</View>
			</ImageBackground>
			</TouchableOpacity>
			<TouchableOpacity underlayColor='#00BE00' onPress={() => setShowModalSoi(true)}>
			<ImageBackground
      			style={[styles.itemsbbb]}
      			source={require('../assets/earth.jpg')}
    		>
				<View style={{ flexDirection: 'row' }}>
				<Text style={styles.text1}>อุณหภูมิในดิน</Text>
				<View style={styles.container2}>
						<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch2}
        					value={isEnabled2}
      					/>
    				</View>
				</View>
				
					<View style={{ flexDirection: 'row' }}>
					<SafeAreaView style={[styles.itemsminandmax]} >
						<Text style={[styles.text2]}>ต่ำสุด</Text>
      					<Text style={[styles.text2]}>{SoilTemperaturetest2} °C</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={[styles.itemsminandmax]}>
						<Text style={[styles.text2]}>สุงสุด</Text>
      					<Text style={[styles.text2]}>{SoilTemperaturetest1} °C</Text>
    				</SafeAreaView>
					</View>
			</ImageBackground>
			</TouchableOpacity>
			
		<TouchableOpacity underlayColor='#00BE00' onPress={() => setShowModalAir(true)}>
			<ImageBackground
      			style={[styles.itemsbbb]}
      			source={require('../assets/airtemperature.jpg')}
				  opacity={0.5} 
    		>
				<View style={{ flexDirection: 'row' }}>
				<Text style={styles.texttt}>อุณหภูมิในอากาศ</Text>
				<View style={styles.container2}>
						<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch3}
        					value={isEnabled3}
      					/>
    				</View>
				</View>
				
					<View style={{ flexDirection: 'row' }}>
					<SafeAreaView style={[styles.itemsminandmax]} >
						<Text style={[styles.texttt1]}>ต่ำสุด</Text>
      					<Text style={[styles.texttt1]}>{AirTemperaturetest2} °C</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={[styles.itemsminandmax]}>
						<Text style={[styles.texttt1]}>สุงสุด</Text>
      					<Text style={[styles.texttt1]}>{AirTemperaturetest1} °C</Text>
    				</SafeAreaView>
					</View>
    			</ImageBackground>

				</TouchableOpacity>

				<TouchableOpacity underlayColor='#00BE00' onPress={() => setShowModalLig(true)}>
				<ImageBackground
      			style={[styles.itemsbbb1]}
      			source={require('../assets/intensity1.jpg')}
				opacity={0.6}
    		>

				<View style={{ flexDirection: 'row' }}>
				<Text style={styles.texttt}>ความเข้มแสง</Text>
				<View style={styles.container2}>
						<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch4}
        					value={isEnabled4}
      					/>
    				</View>
				</View>
				
					<View style={{ flexDirection: 'row' }}>
					<SafeAreaView style={[styles.itemsminandmax]} >
						<Text style={[styles.texttt1]}>ต่ำสุด</Text>
      					<Text style={[styles.texttt1]}>{Lighttest2} Lux</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={[styles.itemsminandmax]}>
						<Text style={[styles.texttt1]}>สุงสุด</Text>
      					<Text style={[styles.texttt1]}>{Lighttest1} Lux</Text>
    				</SafeAreaView>
					</View>
			</ImageBackground>
			</TouchableOpacity>
			
           
        </View>

{/* อุณหภูมิอากาศ */}
		<View style={styles.main}>
            <Modal 
                transparent={true}
                visible={showModalAir}
                animationType="slide"
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>อุณหภูมิในอากาศ</Text>
                    <SafeAreaView >
                    <Text style={styles.text}>อุณหภูมิต่ำสุด</Text>
                    <TextInput
                        value={MinAir}
                        onChangeText={(value) => {SetminAir(value)}}
                        style={SettingStyles.input}
                        placeholder="ต่ำสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <SafeAreaView >
                    <Text style={styles.text}>อุณหภูมิสูงสุด</Text>
                    <TextInput
                        value={MaxAir}
                        onChangeText={(value) => {SetmaxAir(value)}}
                        style={SettingStyles.input}
                        placeholder="สุงสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                        underlayColor='#80cbc4'
                        onPress={() => setShowModalAir(false)}
                    >
                        <Text style={styles.buttonText}>ยกเลิก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.confirmButton]}
                        underlayColor='#80cbc4'
                        onPress={updateDataAir}
                    >
                        <Text style={styles.buttonText}>ยืนยัน</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
            </View>
{/* ความชื้นอากาศ */}
			<View style={styles.main}>
            <Modal 
                transparent={true}
                visible={showModalHum}
                animationType="slide"
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>ความชื้นในอากาศ</Text>
                    <SafeAreaView >
                    <Text style={styles.text}>ความชื้นต่ำสุด</Text>
                    <TextInput
                        value={MinHum}
                        onChangeText={(value) => {SetminHum(value)}}
                        style={SettingStyles.input}
                        placeholder="ต่พสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <SafeAreaView >
                    <Text style={styles.text}>ความชื้นสูงสุด</Text>
                    <TextInput
                        value={MaxHum}
                        onChangeText={(value) => {SetmaxHum(value)}}
                        style={SettingStyles.input}
                        placeholder="สุงสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                        underlayColor='#80cbc4'
                        onPress={() => setShowModalHum(false)}
                    >
                        <Text style={styles.buttonText}>ยกเลิก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.confirmButton]}
                        underlayColor='#80cbc4'
                        onPress={updateDataHum}
                    >
                        <Text style={styles.buttonText}>ยืนยัน</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
            </View>

{/* ความเข็มแสง */}

<View style={styles.main}>
            <Modal 
                transparent={true}
                visible={showModalLi}
                animationType="slide"
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>ความเข้มแสง</Text>
                    <SafeAreaView >
                    <Text style={styles.text}>ความเข้มแสงต่ำสุด</Text>
                    <TextInput
                        value={MinLig}
                        onChangeText={(value) => {SetminLig(value)}}
                        style={SettingStyles.input}
                        placeholder="ต่ำสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <SafeAreaView >
                    <Text style={styles.text}>ความเข้มแสงสูงสุด</Text>
                    <TextInput
                        value={MaxLig}
                        onChangeText={(value) => {SetmaxLig(value)}}
                        style={SettingStyles.input}
                        placeholder="สุงสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                        underlayColor='#80cbc4'
                        onPress={() => setShowModalLig(false)}
                    >
                        <Text style={styles.buttonText}>ยกเลิก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.confirmButton]}
                        underlayColor='#80cbc4'
                        onPress={updateDataLig}
                    >
                        <Text style={styles.buttonText}>ยืนยัน</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
            </View>

			{/* ความชื้นดิน */}

			<View style={styles.main}>
            <Modal 
                transparent={true}
                visible={showModalMoi}
                animationType="slide"
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>ความชื้นในดิน</Text>
                    <SafeAreaView >
                    <Text style={styles.text}>ความชื้นต่ำสุด</Text>
                    <TextInput
                        value={MinMoi}
                        onChangeText={(value) => {SetminMoi(value)}}
                        style={SettingStyles.input}
                        placeholder="ต่ำสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <SafeAreaView >
                    <Text style={styles.text}>ความชื้นสูงสุด</Text>
                    <TextInput
                        value={MaxMoi}
                        onChangeText={(value) => {SetmaxMoi(value)}}
                        style={SettingStyles.input}
                        placeholder="สุงสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                        underlayColor='#80cbc4'
                        onPress={() => setShowModalMoi(false)}
                    >
                        <Text style={styles.buttonText}>ยกเลิก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.confirmButton]}
                        underlayColor='#80cbc4'
                        onPress={updateDataMoi}
                    >
                        <Text style={styles.buttonText}>ยืนยัน</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
            </View>
			{/* อุณหภูมิดิน */}
			<View style={styles.main}>
            <Modal 
                transparent={true}
                visible={showModalSoi}
                animationType="slide"
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>อุณหภูมิในดิน</Text>
                    <SafeAreaView >
                    <Text style={styles.text}>ความชื้นต่ำสุด</Text>
                    <TextInput
                        value={MinSoi}
                        onChangeText={(value) => {SetminSoi(value)}}
                        style={SettingStyles.input}
                        placeholder="ต่ำสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <SafeAreaView >
                    <Text style={styles.text}>ความชื้นสูงสุด</Text>
                    <TextInput
                        value={MaxSoi}
                        onChangeText={(value) => {SetmaxSoi(value)}}
                        style={SettingStyles.input}
                        placeholder="สุงสุด"
                        keyboardType="numeric"
                    />
                    </SafeAreaView>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                        underlayColor='#80cbc4'
                        onPress={() => setShowModalSoi(false)}
                    >
                        <Text style={styles.buttonText}>ยกเลิก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.confirmButton]}
                        underlayColor='#80cbc4'
                        onPress={updateDataSoi}
                    >
                        <Text style={styles.buttonText}>ยืนยัน</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
            </View>
		</ImageBackground>
		</ScrollView>
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
	  text1:{
		marginTop:15,
		marginLeft:10,
		fontSize: 25,
		color: '#ffffff'
	  },
	  text2:{
		marginTop:15,
		marginLeft:10,
		fontSize: 20,
		color: '#ffffff'
	  },
	  texttt:{
		marginTop:15,
		marginLeft:10,
		fontSize: 25,
		color: '#000066'
	  },
	  texttt1:{
		marginTop:10,
		fontSize: 20,
		color: '#000066'
	  },
	  itemsminandmax:{
		marginLeft:80,
		
	},
	  itemsbbb:{
		marginTop:30,
		height:150,
		width:350,
		// borderRadius: 15,
		backgroundColor: '#ffffff',
		borderRadius: 20,
		// ImageBackground: '../assets/temperaturebb.png',
		elevation: 8, // เพิ่ม elevation ให้กับปุ่ม
		shadowColor: '#000', // กำหนดสีเงา

	  },
	  itemsbbb1:{
		marginTop:30,
		marginBottom:30,
		height:150,
		width:350,
		// borderRadius: 15,
		backgroundColor: '#80cbc4',
		elevation: 8, // เพิ่ม elevation ให้กับปุ่ม
		shadowColor: '#000', // กำหนดสีเงา

	  },
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50
	},
	container1: {
		paddingLeft:20,
	  },
	container2: {
		flex: 1,
	  },
	items: {
		width: 350,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: '#80cbc4',
		elevation: 8, // เพิ่ม elevation ให้กับปุ่ม
		shadowColor: '#000', // กำหนดสีเงา
	},
	buttonOpacity: {

	},
	buttonHighlight: {

	},
	
	viewImgTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	img:{
		height: 40,
		width: 40,
		marginRight: 5
	},
	img1: {
		height: 100,
		width: 100,
		marginRight: 5
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


})