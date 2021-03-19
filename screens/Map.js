import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { View } from 'react-native'


export default class Map extends React.Component {
   async componentDidMount() {
      SplashScreen.hide()
    }

    render() {
      return <View/>
    }
}