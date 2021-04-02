import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { View } from 'react-native'
import Header from "../components/Header";


export default class Map extends React.Component {
    // async componentDidMount() {
    //    SplashScreen.hide()
    //  }
    render() {
        return (
            <View>
                <Header />
            </View>
        )
    }
}