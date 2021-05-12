import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ExploreScreen from '../../screens/Explore';
import HomeScreen from '../../screens/home';
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../assets/color/style";

const Tab = createMaterialBottomTabNavigator();
const MainTabScreen=(props)=>{
  console.log(props)
    return(
        <Tab.Navigator
      initialRouteName="Home"
      activeColor='#009387'
      barStyle={{ backgroundColor: colors.headerColor }}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sticker" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}



export default MainTabScreen;

