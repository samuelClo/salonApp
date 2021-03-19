import {createAppContainer} from 'react-navigation';
import React, { Component } from "react";
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {enableScreens} from 'react-native-screens';
import Main from './Main';
import Detail from './Detail';
import { Provider } from 'react-redux'
import createStore from './redux'
enableScreens();

// Instead of calling `createStackNavigator`, wrap it using `createSharedElementStackNavigator`
const StackNavigator = createSharedElementStackNavigator(
  {
    Main: {screen: Main},
    Detail: {screen: Detail},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main',
  }
);

const AppContainer = createAppContainer(StackNavigator);
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