import React, { Component } from "react";
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Map, Events, QrCode } from './screens'
import { Provider } from 'react-redux'
import createStore from './redux'

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