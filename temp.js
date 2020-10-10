import React,{useState} from 'react';

import{View,StyleSheet,Button} from 'react-native'
import{DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from './Dropdown-npm';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

export function DrawerContent(props){
    var [w,inc]=useState(51);var [w2,inc2]=useState(51);var [w3,inc3]=useState(51);var [w4,inc4]=useState(51);var [w5,inc5]=useState(51);
    return (
        <View style={styles.drawerContent}>
                    <DrawerContentScrollView {...props}>
                        <View style={{height:w}}>
                            <DropDownPicker
                                items={[
                                    {label: 'Football Kits', value: 'Home', icon: () => <Icon name="soccer" size={25} color="#900" />},
                                    {label: 'Clothing', value: 'Settings', icon: () => <Icon name="tshirt-crew" size={25} color="#900" />},
                                    {label: 'Accessories', value: 'Settings', icon: () => <Icon name="basketball" size={25} color="#900" />},
                                ]}
                                // defaultValue={'Home'}
                                placeholder='Mens'
                                containerStyle={{height: 50}}
                                style={{backgroundColor: '#f2e9f0',paddingLeft:30}}
                                itemStyle={{
                                    //  backgroundColor:'white',
                                     justifyContent:'flex-start',
                                     paddingLeft:30,
                                     width:'100%'
                                }}
                                // placeholder='Mens'

                                placeholderStyle={{fontWeight:'bold',fontSize:18}}
                                selectedLabelStyle={{fontWeight:'bold',fontSize:18}}

                                dropDownStyle={{backgroundColor: '#fafafa'}}
                                onOpen={() => inc(50*4)}
                                onClose={() => inc(51)}
                                onChangeItem={item => props.navigation.navigate(item.value)}
                            />
                        </View>
                        <View style={{height:w2}}>
                            <DropDownPicker
                                items={[
                                    {label: 'Football Kits', value: 'Home', icon: () => <Icon name="soccer" size={25} color="#900" />},
                                    {label: 'Clothing', value: 'Settings', icon: () => <Icon name="tshirt-crew" size={25} color="#900" />},
                                    {label: 'Accessories', value: 'Settings', icon: () => <Icon name="basketball" size={25} color="#900" />},
                                ]}
                                // defaultValue={'Home'}
                                placeholder='Womans'
                                containerStyle={{height: 50}}
                                style={{backgroundColor: '#f2e9f0',paddingLeft:30}}
                                itemStyle={{
                                    //  backgroundColor:'white',
                                     justifyContent:'flex-start',
                                     paddingLeft:30,
                                     width:'100%'
                                }}
                                

                                placeholderStyle={{fontWeight:'bold',fontSize:18}}
                                selectedLabelStyle={{fontWeight:'bold',fontSize:18}}

                                dropDownStyle={{backgroundColor: '#fafafa'}}
                                onOpen={() => inc2(50*4+1)}
                                onClose={() => inc2(51)}
                                onChangeItem={item => props.navigation.navigate(item.value)}
                            />
                        </View>
                        <View style={{height:w3}}>
                            <DropDownPicker
                                items={[
                                    {label: 'Football Kits', value: 'Home', icon: () => <Icon name="soccer" size={25} color="#900" />},
                                    {label: 'Clothing', value: 'Settings', icon: () => <Icon name="tshirt-crew" size={25} color="#900" />},
                                    {label: 'Accessories', value: 'Settings', icon: () => <Icon name="basketball" size={25} color="#900" />},
                                ]}
                                // defaultValue={'Home'}
                                placeholder='Youths'
                                containerStyle={{height: 50}}
                                style={{backgroundColor: '#f2e9f0',paddingLeft:30}}
                                itemStyle={{
                                    //  backgroundColor:'white',
                                     justifyContent:'flex-start',
                                     paddingLeft:30,
                                     width:'100%'
                                }}
                                // placeholder='Mens'

                                placeholderStyle={{fontWeight:'bold',fontSize:18}}
                                // activeLabelStyle={{color: 'grey'}}
                                selectedLabelStyle={{fontWeight:'bold',fontSize:18}}
                                dropDownStyle={{backgroundColor: '#fafafa'}}
                                onOpen={() => inc3(50*4+1)}
                                onClose={() => inc3(51)}
                                onChangeItem={item => {props.navigation.navigate(item.value);placeholder='Youth'}}
                            />
                        </View>
                        <View style={{height:w4}}>
                            <DropDownPicker
                                items={[
                                    {label: 'Masks', value: 'Home', icon: () => <Icon name="charity" size={25} color="#900" />},
                                    {label: 'Drinks', value: 'Settings', icon: () => <Icon name="glass-mug" size={25} color="#900" />},
                                    {label: 'Cloathings', value: 'Settings', icon: () => <Icon name="tshirt-crew" size={25} color="#900" />},
                                ]}
                                // defaultValue={'Home'}
                                containerStyle={{height: 50}}
                                style={{backgroundColor: '#f2e9f0',paddingLeft:30}}
                                itemStyle={{
                                    //  backgroundColor:'white',
                                     justifyContent:'flex-start',
                                     paddingLeft:30,
                                     width:'100%'
                                }}
                                placeholder='Sale !'

                                placeholderStyle={{fontWeight:'bold',fontSize:18}}
                                selectedLabelStyle={{fontWeight:'bold',fontSize:18}}

                                dropDownStyle={{backgroundColor: '#fafafa'}}
                                onOpen={() => inc4(50*4+1)}
                                onClose={() => inc4(51)}
                                onChangeItem={item => props.navigation.navigate(item.value)}
                            />
                        </View>
    </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    //   overflow: 'scroll', 
      marginTop:50
    },

    drawerSection: {
      marginTop: 15,
    },

  });
