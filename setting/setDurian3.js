import React, { useState } from "react";
import {Button, Modal,View,SafeAreaView, StyleSheet, Alert, Text, Image,Switch,TouchableHighlight, TouchableOpacity,ScrollView } from 'react-native'
import { color } from 'react-native-reanimated'
import { ImageBackground } from 'react-native';
import globalStyles from '../global-styles'
import SettingStyles from '../Setting-Styles'

export default function SetDurian3({ navigation }) {

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

  const [modalVisible, setModalVisible] = useState(false);
    return (
		<ScrollView>
		<ImageBackground
      		source={require('../assets/background50.png')}
      		style={styles.background}
    	>
        <View style={globalStyles.container}>
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
      					<Text style={[styles.text2]}>25 %</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={[styles.itemsminandmax]}>
						<Text style={[styles.text2]}>สุงสุด</Text>
      					<Text style={[styles.text2]}>35 %</Text>
    				</SafeAreaView>
					</View>
		</ImageBackground>
			
				
			<ImageBackground
      			style={[styles.itemsbbb]}
      			source={require('../assets/airhumidity.gif')}
				//   opacity={0.7}
    		>
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
      					<Text style={[styles.text2]}>25 %</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={[styles.itemsminandmax]}>
						<Text style={[styles.text2]}>สุงสุด</Text>
      					<Text style={[styles.text2]}>35 %</Text>
    				</SafeAreaView>
					</View>
			</ImageBackground>
			
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
      					<Text style={[styles.text2]}>25 °C</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={[styles.itemsminandmax]}>
						<Text style={[styles.text2]}>สุงสุด</Text>
      					<Text style={[styles.text2]}>35 °C</Text>
    				</SafeAreaView>
					</View>
			</ImageBackground>
			
			
					
			
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
      					<Text style={[styles.texttt1]}>25 °C</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={[styles.itemsminandmax]}>
						<Text style={[styles.texttt1]}>สุงสุด</Text>
      					<Text style={[styles.texttt1]}>35 °C</Text>
    				</SafeAreaView>
					</View>
      
    </ImageBackground>
	<ImageBackground
      			style={[styles.itemsbbb1]}
      			source={require('../assets/intensity1.jpg')}
				opacity={0.6}
    		>

				<View style={{ flexDirection: 'row' }}>
				<Text style={styles.texttt}>ความเข็มแสง</Text>
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
      					<Text style={[styles.texttt1]}>25 Lux</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={[styles.itemsminandmax]}>
						<Text style={[styles.texttt1]}>สุงสุด</Text>
      					<Text style={[styles.texttt1]}>35 Lux</Text>
    				</SafeAreaView>
					</View>
			</ImageBackground>
			
        </View>
		</ImageBackground>

		<View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              title="Close Modal"
            />
          </View>
        </View>
      </Modal>

      <Button
        onPress={() => {
          setModalVisible(true);
        }}
        title="Open Modal"
      />
    </View>
		</ScrollView>
    )
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: 'cover',
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
	buttonText: {
		fontSize: 20,
		color: 'white'
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
	}


})