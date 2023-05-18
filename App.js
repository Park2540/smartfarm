import React, { useState, useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { cartContext } from './tab-cart-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Maincontrol from './control/maincontrol'

import ConDurian1 from './control/ConDurian1'
import ConDurian2 from './control/ConDurian2'
import ConDurian3 from './control/ConDurian3'

import Setmode1 from './control/Setmode1'
import Setmode2 from './control/Setmode2'
import Setmode3 from './control/Setmode3'

import Timemode1 from './control/Timemode1'
import Timemode2 from './control/Timemode2'
import Timemode3 from './control/Timemode3'

import Sensormode1 from './control/Sensormode1'
import Sensormode2 from './control/Sensormode2'
import Sensormode3 from './control/Sensormode3'
// ++++++++++++++++++++++++++++++++++

import Mainsetting from './setting/mainsetting'
import SetDurian1 from './setting/SetDurian1'
import SetDurian2 from './setting/setDurian2'
import SetDurian3 from './setting/setDurian3'

import {PermissionsAndroid,Alert} from 'react-native';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
import messaging from '@react-native-firebase/messaging';

export default function App() {

	//
	// 	const requestUserPermission = async () => {
		// const authStatus = await messaging().requestPermission();
		// const enabled =
		// authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
		// authStatus === messaging.AuthorizationStatus.PROVISIONAL;

		// if (enabled) {
		// 	console.log('Authorization status:', authStatus);
		// }
	//} 	  
	  
	  
	  
  const MainControl = () => {
		const Control = createStackNavigator()
		return (
			<Control.Navigator>
				<Control.Screen name="Maincontrol" component={Maincontrol}
					options={{ 
					headerStyle: {
						height: 150,
						backgroundColor: "#87B26A",
					  },
					  headerTintColor:'#fff',
					  headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					  headerTitle: 'หน้าหลัก' 
					}}
				/>
				<Control.Screen name="ConDurian1" component={ConDurian1}
					options={{ headerTitle: 'ทุเรียนโซน 1',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Control.Screen name="ConDurian2" component={ConDurian2}
					options={{ headerTitle: 'ทุเรียนโซน 2',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Control.Screen name="ConDurian3" component={ConDurian3}
					options={{ headerTitle: 'ทุเรียนโซน 3',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Control.Screen name="Setmode1" component={Setmode1}
					options={{ headerTitle: 'เลือกโหมดการทำงาน',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Control.Screen name="Setmode2" component={Setmode2}
					options={{ headerTitle: 'เลือกโหมดการทำงาน',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Control.Screen name="Setmode3" component={Setmode3}
					options={{ headerTitle: 'เลือกโหมดการทำงาน',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Control.Screen name="Timemode1" component={Timemode1}
					options={{ headerTitle: 'ตั้งเวลาโซน1',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Control.Screen name="Timemode2" component={Timemode2}
					options={{ headerTitle: 'ตั้งเวลาโซน2',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Control.Screen name="Timemode3" component={Timemode3}
					options={{ headerTitle: 'ตั้งเวลาโซน3',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Control.Screen name="Sensormode1" component={Sensormode1}
					options={{ headerTitle: 'ตั้งค่าเซ็นเซอร์',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>

				<Control.Screen name="Sensormode2" component={Sensormode2}
					options={{ headerTitle: 'ตั้งค่าเซ็นเซอร์',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Control.Screen name="Sensormode3" component={Sensormode3}
					options={{ headerTitle: 'ตั้งค่าเซ็นเซอร์',
					headerStyle: {
						height: 150,
						
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
			</Control.Navigator>
		)
	}
	const MainSetting = () => {
		const Setting = createStackNavigator()
		return (
			<Setting.Navigator>
				<Setting.Screen name="Mainsetting" component={Mainsetting}
					options={{ headerStyle: {
						height: 150,
						backgroundColor: "#87B26A",
					  },
					  headerTintColor:'#fff',
					  headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },headerTitle: 'ตั้งค่าการแจ้งเตือน' }}
				/>
				<Setting.Screen name="SetDurian1" component={SetDurian1}
					options={{ headerTitle: 'ตั้งค่าแจ้งเตือนโซน 1',
					headerStyle: {
						height: 150,
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Setting.Screen name="SetDurian2" component={SetDurian2}
					options={{ headerTitle: 'ตั้งค่าแจ้งเตือนโซน 1',
					headerStyle: {
						height: 150,
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
				<Setting.Screen name="SetDurian3" component={SetDurian3}
					options={{ headerTitle: 'ตั้งค่าแจ้งเตือนโซน 1',
					headerStyle: {
						height: 150,
						backgroundColor: "#87B26A",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
						fontSize:28,
					  },
					headerBackTitle: ' ' }}
				/>
			</Setting.Navigator>
		)
	}
  const Tab = createBottomTabNavigator()
  const [cart, setCart] = React.useState([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}> 
      <NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen 
      name="Control" 
      component={MainControl} 
      options={{
        tabBarLabel: 'หน้าหลัก',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home-outline" size={size} color={color} />
        ),
        headerShown: false // ซ่อนส่วนหัว
      }}
    />
    <Tab.Screen 
      name="Setting" 
      component={MainSetting} 
      options={{
        tabBarLabel: 'ตั้งค่า',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        ),
        headerShown: false // ซ่อนส่วนหัว
      }}
    />
  </Tab.Navigator>
</NavigationContainer>
  </cartContext.Provider> 
  );
}