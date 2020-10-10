
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/Ionicons'

function ShoppingCartIcon(props){
    // console.log(props,"carticon")
    return(
        <TouchableOpacity onPress={()=>props.navigate('CartPage')} style={{paddingRight:10}}>
            <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
                <View style={{
                    position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 20, bottom: 20, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.cartValues.totalQty}</Text>
                </View>
                <Icon  name="ios-cart" size={35} />
            </View>
    </TouchableOpacity>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});

    const mapStateToProps = (state)=> {
    return {
      cartValues:state.itemPageReducer
    }
  }


export default connect(mapStateToProps)(ShoppingCartIcon)