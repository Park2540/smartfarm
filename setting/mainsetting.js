import React, { useState } from "react";
import { View, StyleSheet, Alert, Text, Image,Switch,TouchableHighlight, TouchableOpacity, Button } from 'react-native'
import { color } from 'react-native-reanimated'
import { ImageBackground } from 'react-native';
import globalStyles from '../global-styles'
import SettingStyles from '../Setting-Styles'

export default function Mainsetting({ navigation }) {
    return (
		<ImageBackground
      		source={require('../assets/background50.png')}
      		style={styles.background}
    	>
           
        <View style={globalStyles.container}>
            <View style={{marginTop:10,}}>
                <Text> {'\n'}</Text>
            </View>
            <TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('SetDurian1')}
			>
				
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>ทุเรียนโซน 1</Text>
				</View>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('SetDurian2')}
			>
				<View style={styles.viewImgTextContainer}>
					
					<Text style={styles.buttonText}>ทุเรียนโซน 2</Text>
				</View>
			</TouchableHighlight>

            <TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('SetDurian3')}
			>
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>ทุเรียนโซน 3</Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Sethouse1')}
			>
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>โรงเรือน 1 </Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Sethouse2')}
			>
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>โรงเรือน 2 </Text>
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
	img: {
		height: 40,
		width: 40,
		marginRight: 5
	}


})