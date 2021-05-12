import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import {Avatar,Text,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style.js';
import { useSelector,useDispatch} from 'react-redux';
import {onUserLogout} from '../../redux'
export function  DrawerContent(props){
    const[isDarkTheme,setDarkTheme]=React.useState(false);
    const dispatch = useDispatch()
    const toggleTheme=()=>{
        setDarkTheme(!isDarkTheme)
    }
    const users=useSelector(state => state.userReducer.user)
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image
                            source={{
                                uri: users.userProfileImage
                            }}
                            size={50}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>{users.username}</Title>
                            <Caption style={styles.caption}>{users.first_name}</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />




                    </Drawer.Section>

            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={()=>dispatch(onUserLogout())}
                />
        </Drawer.Section>
    </View>
  );
}




