const quoteValues = (state = {quote:"Add"}, action) => {
    switch (action.type) {

        case 'LOAD_QUOTE_START':
            {
                console.log('loading')
                return Object.assign({}, state, {quote:action.payload})

            }

    }

    return state
}


export default quoteValues