import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { View } from 'react-native'
import Header from "../components/Header.js";
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

export default class Map extends React.Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return <View style={{ flex: 1 }}>
      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={0.5}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
      /*         style={{
                padding: 10,
                backgroundColor: 'red',
              }} */
      >
        <Svg
          height="1000"
          width="1000"
        >
          <G>
            <G>
              <G>
                <Circle onPress={() => alert('Pressed on circle')} cx="80" cy="80" r="30" fill="green" x="20" scale="1.2" />
                <Rect onPress={() => alert('Pressed on Rect')} x="20" y="20" width="40" height="40" fill="yellow" />
              </G>
              <G>
                <Circle onPress={() => alert('Pressed on circle')} cx="80" cy="80" r="30" fill="pink" x="170" scale="1.2" />
                <Rect onPress={() => alert('Pressed on Rect')} x="90" y="80" width="40" height="40" fill="blue" />
              </G>
            </G>
          </G>
        </Svg>
      </ReactNativeZoomableView>
    </View>
  }
}
