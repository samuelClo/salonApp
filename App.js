import React, { Component } from "react";
import { createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Map, Events, QrCode } from './screens'
import { Provider } from 'react-redux'
import createStore from './redux'

const TabNavigator = createBottomTabNavigator({
  Map: Map,
  QrCode: QrCode,
  Events: Events
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Map') {
                    iconName = focused
                        ? 'map'
                        : 'map-outline';
                } else if (routeName === 'QrCode') {
                    iconName = focused ? 'qr-code' : 'qr-code-outline';
                }else if (routeName === 'Events') {
                    iconName = focused ? 'calendar' : 'calendar-outline';
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={25} style={{color: tintColor}} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#01ACF5',
            inactiveTintColor: 'gray',
        },
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
