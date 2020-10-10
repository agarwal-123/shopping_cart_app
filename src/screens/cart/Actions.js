export const loadQuote=()=>{
    return {type:'LOAD_QUOTE_START'}
}


export const addItem=(product,state)=>{
    // console.log({product,...state},"ll")
    // state.cartItems.push(product)
    var updatedCart={cartItems:state.cartItems.slice(),totalQty:state.totalQty,totalVal:state.totalVal}
    updatedCart.totalQty++;
    updatedCart.cartItems.push(product)

    console.log(updatedCart,"oo")
    return {type:'ADD_TO_CART',payload:updatedCart}
}
           