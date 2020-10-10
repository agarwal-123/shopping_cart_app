// import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import rootReducer from '../screens/itemPage/Reducer'
import rootReducer from './rootReducer'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}




// const store = createStore(quoteReducer, applyMiddleware(thunk))
