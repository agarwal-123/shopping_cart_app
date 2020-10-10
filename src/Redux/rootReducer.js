import {combineReducers} from 'redux';
import quoteReducer from '../screens/cart/Reducer'
import itemPageReducer from '../screens/itemPage/Reducer'

const rootReducer = combineReducers({
    quoteReducer,
    itemPageReducer
});

export default rootReducer;
