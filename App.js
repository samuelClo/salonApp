import React, { Component } from "react";
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {enableScreens} from 'react-native-screens';
import Map from './Screens/Map'
import QrCode from './Screens/QrCode'
import Events from './Screens/Events'
import { Provider } from 'react-redux'
import createStore from './redux'
enableScreens();

// Instead of calling `createStackNavigator`, wrap it using `createSharedElementStackNavigator`
// const StackNavigator = createSharedElementStackNavigator(
//   {
//     Main: {screen: Main},
//     Detail: {screen: Detail},
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'Main',
//   }
// );

const TabNavigator = createBottomTabNavigator({
  Map: Map,
  QrCode: QrCode,
  Events: Events
});

const AppContainer = createAppContainer(TabNavigator);
const { store } = createStore()
class RootContainer extends Component{
    render(){
        return (
          <Provider store={store}>
            <AppContainer/>
          </Provider>
        )
    }
}

export default RootContainer;