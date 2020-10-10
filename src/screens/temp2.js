import * as React from 'react';
import { Text, View } from 'react-native';

import { Button } from 'react-native-paper';
import {connect} from 'react-redux'

  function Home(props) {
    console.log(props,"incart")
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CartPage </Text>
          {props.cartItems.length > 0 ?
          props.cartItems.map(item =>{
            return (<Button onPress={()=>props.removeItem(item)}>Item no {item.id}, qty:{item.qty}</Button>)
          })
               : 
              <Text>No items in your cart</Text>
          }
      </View>
    );
  }

  const mapStateToProps = (state)=> {
    return {
      cartItems:state
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return {
      removeItem: (product)=> dispatch({type:'REMOVE_FROM_CART',payload:product})
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps) (Home)







  const cartItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            {   
                var temp=state.slice()
                for(var i=0;i<temp.length;i++) {
                    if(temp[i].id==action.payload.id) {temp[i].qty++;return temp;}
                }
                action.payload.qty=1
                return [...state, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return state.filter(cartItem => cartItem.id !== action.payload.id)

        case 'DEC_QTY':
            {   
                var temp=state.slice()
                for(var i=0;i<temp.length;i++) {
                    if(temp[i].id==action.payload.id && temp[i].qty<=1) return state
                    if(temp[i].id==action.payload.id) {temp[i].qty--;return temp;}
                }

            }

        case 'INC_QTY':
            {   
                var temp=state.slice()
                for(var i=0;i<temp.length;i++) {
                    if(temp[i].id==action.payload.id) {temp[i].qty++;return temp;}
                }

            }
    }

    return state
}


export default cartItems