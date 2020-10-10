import * as React from 'react';
import { Text, View,Image, TouchableOpacity, ScrollView } from 'react-native';

import { Button, IconButton } from 'react-native-paper';
import {connect} from 'react-redux'
// import Icon from 'react-native-vector-icons/Ionicons'


function CartItem(props) {
  // console.log(props,"incart!!")
  return (
    <TouchableOpacity onPress={()=>{props.navigation.navigate('ProductsPage')}}>
      <View style={{ flexDirection: 'row',marginTop: 10,paddingLeft:10, borderBottomWidth:0.3,paddingBottom:5}}>
        <Image 
        style={{width:90,height:150,flex:0.3}}
        source={{uri:"https://m.media-amazon.com/images/I/310Z6lVaCiL._AC_SR320,400_.jpg"}}
        />
        <View style={{flex:0.6,paddingTop:10,paddingLeft:20}}>
          <Text style={{fontSize:16,color:'#2e1280'}}>{props.item.name}</Text>
          <Text style={{fontSize:14,color:'grey'}}>Size: XL</Text>
          <View style={{justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:14,color:'grey',marginTop:10}}>Qty:</Text>
              <IconButton icon="plus-circle-outline" onPress={() => {console.log(props);props.addItem(props.item)} } size={20} />
              <Text style={{height:26,fontSize:16,color:'grey',marginTop:7,backgroundColor:'white',paddingRight:10,paddingLeft:10}}>{props.item.qty}</Text>
              <IconButton icon="minus-circle-outline" onPress={() => {props.decItem(props.item)}} size={20}/>
            </View>
  <Text style={{fontSize:24,fontStyle:'normal'}}>$ {props.item.price}</Text>
          </View>
        </View>
        <View style={{flex:0.1,padding:10,paddingRight:20,height:40}}><IconButton icon="delete" onPress={()=>props.removeItem(props.item)} /></View>
      </View>
    </TouchableOpacity>
  );
}


  function Home(props) {
    // console.log(props,"incart")
    return (
      <View style={{ flex: 1}}>
        <View style={{flex:0.17,justifyContent:"space-between",paddingBottom:30,paddingTop:20}}>
          <View style={{flexDirection: 'row',paddingLeft:30,paddingRight:30,justifyContent:"space-between"}}>
            <Text style={{fontSize:22,fontWeight:'bold'}}>{props.cartValues.totalQty} Items</Text>
            <Text style={{fontSize:26,fontWeight:'bold'}}>$ {props.cartValues.totalVal}</Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent:"space-between",paddingRight:10,paddingLeft:10}}>
            <Button mode='outlined'>Continue Shopping</Button>
            <Button mode='contained'>Checkout</Button>
          </View>
        </View>
        <View style={{flex:0.8}}>
        <ScrollView>
            {props.cartValues.cartItems.length > 0 ?
            props.cartValues.cartItems.map(item =>{
              return (<CartItem item={item} {...props}/>)
            })
                : 
                <Text>No items in your cart</Text>
            }
          </ScrollView>
          </View>
      </View>
    );
  }

  const mapStateToProps = (state)=> {
    return {
      cartValues:state.itemPageReducer
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return {
      removeItem: (product)=> dispatch({type:'REMOVE_FROM_CART',payload:product}),
      addItem: (product)=> dispatch({type:'ADD_TO_CART',payload:product}),
      decItem: (product)=> dispatch({type:'DEC_QTY',payload:product})
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps) (Home)