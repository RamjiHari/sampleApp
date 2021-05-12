import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../../screens/signin';

const RootStack = createStackNavigator();
export  const  RootStackScreen=({navigation}) =>{
  return (
   <RootStack.Navigator headerMode='none'>
       <RootStack.Screen name="Signin" component={SigninScreen}/>
   </RootStack.Navigator>
  );
}

