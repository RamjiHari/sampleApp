import  React,{useState,useEffect} from 'react';
import { Button, View, Text ,ActivityIndicator,Alert} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from '../../navigation/tab/MainTabScreen';
import {DrawerContent} from '../../../src/components/drawer'
import {RootStackScreen} from '../../navigation/stack/RootStackScreen';
import * as Font from 'expo-font';
const Drawer = createDrawerNavigator();
import { MenuProvider } from 'react-native-popup-menu';
import { useSelector} from 'react-redux';

function AppComponent() {
    const isLoading= useSelector(state => state.userReducer.isLoading)
    const userToken=useSelector(state => state.userReducer.userToken)

    if(userToken>0){
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                        {text: 'Okay'}
                    ]);
    }
    console.log(userToken)
     Font.loadAsync({
        'Bold':require('../../../src/assets/fonts/Montserrat-ExtraBold.otf'),
        'Medium':require('../../../src/assets/fonts/Montserrat-Medium.otf'),
        'Regular':require('../../../src/assets/fonts/Montserrat-Regular.otf')
      });


if(isLoading) {
        return(
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large"/>
          </View>
        );
}
  return (

    <NavigationContainer>
    <MenuProvider>
      {userToken=='logged'?

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

export default AppComponent;
