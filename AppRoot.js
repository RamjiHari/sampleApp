import  React,{useState,useEffect} from 'react';
import { Button, View, Text ,ActivityIndicator,Alert} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/common/navigation/tab/MainTabScreen';
import {DrawerContent} from './src/common/navigation/drawer'

import {RootStackScreen} from './src/common/navigation/stack/RootStackScreen';
import * as Font from 'expo-font';
const Drawer = createDrawerNavigator();
import { MenuProvider } from 'react-native-popup-menu';
import { useSelector} from 'react-redux';
import HomeScreen from './src/domain/home/HomeScreen';

function AppRoot() {
  const session = useSelector((state) => state.session);

     Font.loadAsync({
        'Bold':require('./src/common/assets/fonts/Montserrat-ExtraBold.otf'),
        'Medium':require('./src/common/assets/fonts/Montserrat-Medium.otf'),
        'Regular':require('./src/common/assets/fonts/Montserrat-Regular.otf')
      });


  return (

    <NavigationContainer>
    <MenuProvider>
      {session.loggedIn ?

        (<Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
      <Drawer.Screen name="Index" component={MainTabScreen} />
    </Drawer.Navigator> )
    :
      <RootStackScreen/>

      }
     </MenuProvider>
  </NavigationContainer>

  );
}

export default AppRoot;
