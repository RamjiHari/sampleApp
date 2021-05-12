import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import { useSelector,useDispatch} from 'react-redux';
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import {onUserLogout} from '../../redux'
export default function index({navigation}) {
  const users=useSelector(state => state.userReducer.user)
  const dispatch = useDispatch()
  return (
    <View>
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <TouchableOpacity  onPress={()=>{navigation.openDrawer()}}>

<MaterialCommunityIcons name="menu" size={40}/>

</TouchableOpacity>
 <TouchableOpacity onPress={()=>dispatch(onUserLogout())}>

          <MaterialCommunityIcons name="exit-to-app" size={40}/>
          <Text>Logout</Text>
        </TouchableOpacity>
    </View>
            <View style={{ alignItems: 'center',
        justifyContent: 'center',}}>
            <Text>Username</Text>
      <Text>{users.first_name}</Text>
      </View>
    </View>
  )
}
