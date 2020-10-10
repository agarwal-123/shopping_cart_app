import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import * as actions from './Actions'

import { connect } from 'react-redux'
function Home(props) {
    // console.log(props.route.params)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ItemPage</Text>
        <Button onPress={()=>props.navigation.navigate('CartPage')}>Go to Cart</Button>
        <Button onPress={()=>props.addItem(props.route.params,props.cartValues)}>Add Item {props.route.params.id}</Button>

        <Button onPress={()=>{props.loadQuote(props.quote.quote)}}>Load Sellers Name</Button>
        <Text>{props.quote.quote}</Text>
      </View>
    );
  }
  const mapStateToProps = (state)=> {
    console.log(state.quoteReducer,"prooooo")
    return {
      cartValues:state.itemPageReducer,
      quote:state.quoteReducer
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return {
      addItem: (product,state)=> dispatch(actions.addItem(product,state)),
      loadQuote:(quote)=>dispatch(actions.loadQuote(quote))
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps) (Home)