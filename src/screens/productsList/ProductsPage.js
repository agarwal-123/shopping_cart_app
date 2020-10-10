import * as React from 'react';
import { Text, View } from 'react-native';

import { Button } from 'react-native-paper';
import {electronics} from './Data'
// import Stripe from '../tipsy-stripe/index'
export default function Home(props) {
  // console.log(electronics)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ProductsPage</Text>
        {
          electronics.map((product)=>{
          return (<Button onPress={()=>props.navigation.navigate('ItemPage',{...product})}>{product.name}</Button>)
          })
        }
        
      </View>
      
    );
  }