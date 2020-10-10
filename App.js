import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator} from '@react-navigation/stack'

// import{DrawerContent} from './DrawerContent'
import { Button } from 'react-native-paper';

import ItemPage from './src/screens/itemPage/ItemPage'
import ProductsPage from './src/screens/productsList/ProductsPage'
import CartPage from './src/screens/cart/CartPage'
import ShoppingCartIcon from './src/screens/cart/ShoppingCartIcon'

import { Provider } from 'react-redux'
import configureStore from './src/Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'

// import configureStore from './store';
const { persistor, store } = configureStore()

const Stack= createStackNavigator()
function HomeScreen() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Stack.Navigator
        initialRouteName="App"
        headerMode="screen"
        screenOptions={({ route, navigation }) => ({
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
          headerRight: () => (<ShoppingCartIcon {...navigation}/>)
        })}

      >

        <Stack.Screen
          name="ProductsPage"
          component={ProductsPage}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="ItemPage"
          component={ItemPage}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="CartPage"
          component={CartPage}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
      </PersistGate>
    </Provider>
  );
}

function SettingsScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button onPress={()=>props.navigation.navigate('Home')}>Go to home</Button>
    </View>
  );
}



function App() {
  return (
    <NavigationContainer independent={true}>

     </NavigationContainer>
  );
}


// const Tab = createMaterialBottomTabNavigator()
const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="red"
        shifting={true}
      >
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor:'blue',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color="white" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarColor:"green",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color="white" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={App}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color="white" size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}