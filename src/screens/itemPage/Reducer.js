const cartValues = (state = {cartItems:[],totalQty:0,totalVal:0}, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        {   
            console.log(action.payload,"reducer")
            return Object.assign({}, state, {...action.payload})
        }
        
        case 'REMOVE_FROM_CART':
        {
            // console.log(state,"reducer")
            return Object.assign({}, state, {...action.payload})
        }

        case 'DEC_QTY':
        {   
            return Object.assign({}, state, {...action.payload})
        }

        // case 'LOAD_QUOTE_START':
        //     {
        //         console.log('loading')
        //         return Object.assign({}, state, {quote:action.payload})

        //     }

    }

    return state
}


export default cartValues