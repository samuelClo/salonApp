import React, { Component } from "react";
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {enableScreens} from 'react-native-screens';
import { Map, Events, QrCode } from './screens'
import { Provider } from 'react-redux'
import createStore from './redux'


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