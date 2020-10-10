import axios from 'axios'

export const loadQuote = () => {

    return (dispatch, getState) => {

        axios.get('http://dummy.restapiexample.com/api/v1/employee/'+Math.floor(Math.random()*10) ).then(function (response) {
            console.log(response.data.data,"gg")
            dispatch({ type: 'LOAD_QUOTE_START', payload: response.data.data.employee_name })

        }).catch(function (error) {
            dispatch({ type: 'LOAD_QUOTE_FAILURE', payload: error })
        })
    }

}
     

export const addItem=(product,state)=>{
    // console.log(product)
    // state.cartItems.push(product)
    var updatedCart={cartItems:state.cartItems.slice(),totalQty:state.totalQty,totalVal:state.totalVal}
    updatedCart.totalQty++;
    updatedCart.cartItems.push(product)

    // console.log(updatedCart.totalQty,"oo")
    return {type:'ADD_TO_CART',payload:updatedCart}
}
