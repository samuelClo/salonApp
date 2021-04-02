import React, { useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { View, useWindowDimensions, StyleSheet, Text, Button } from 'react-native'
import Header from "../components/Header.js";
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import Svg, {
  G,
  Rect,
  Polygon,
} from 'react-native-svg';

const Map = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])


  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const tabFooterHeight = 49
  const realHeight = windowHeight - tabFooterHeight;

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <ReactNativeZoomableView
        maxZoom={4}
        minZoom={1}
        zoomStep={0.5}
        initialZoom={1.7}
        bindToBorders={true}
        zoomEnabled={true}
        style={{
          backgroundColor: '#fff',
          height: windowHeight * 2,
          windowWidth: windowWidth * 2
        }}
      >
        <Svg
          height={realHeight}
          width={windowWidth}
          viewBox={`-400 -120 1000 1000`}
        >
          <G scale="1">
            <Rect   fill='#FFADAD' x="18.73" y="206.9" width="18.07" height="55.28"
              transform="translate(262.3 206.78) rotate(90)" />
            <Rect fill='#FFADAD' className="cls-1" x="11.91" y="233.2" width="31.71" height="55.28"
              transform="translate(288.6 233.07) rotate(90)" />
            <Rect fill='#FFADAD' className="cls-1" x="10.95" y="267.49" width="33.62" height="55.28"
              transform="translate(322.89 267.36) rotate(90)" />
            <Rect fill='#FFADAD' className="cls-1" x="3.91" y="309.67" width="47.71" height="55.28"
              transform="translate(365.07 309.55) rotate(90)" />
            <Rect fill='#FFADAD' className="cls-1" x="14.32" y="348.53" width="26.88" height="55.28"
              transform="translate(403.93 348.4) rotate(90)" />
            <Polygon fill="#FFD6A5" className="cls-1"
              points="0.13 430.42 0.13 391.1 55.4 391.1 55.4 412.01 30.67 430.42 0.13 430.42" />
            <Polygon fill="#FFD6A5" className="cls-1"
              points="0.13 224.22 0.13 201.29 36.91 201.29 55.4 218.56 55.4 224.22 0.13 224.22" />
            <Polygon fill="#FFD6A5" className="cls-1"
              points="0.13 199.67 0.13 181.5 15.5 181.5 34.85 199.67 0.13 199.67" />
            <Polygon fill="#FFD6A5" className="cls-1"
              points="52.13 213.2 38.92 200.87 83.07 153.52 89.96 172.63 52.13 213.2" />
            <Polygon fill="#CAFFBF" className="cls-1"
              points="37.63 199.67 81.97 152.13 74.08 144.77 74.08 144.77 59.42 131.1 36.09 156.13 45.41 164.83 24.42 187.35 37.63 199.67" />
            <Polygon fill="#CAFFBF" className="cls-1"
              points="35.6 173.14 43.38 164.8 33.94 156 58.17 130.01 42.73 115.6 17.92 142.2 17.92 156.65 22.39 160.81 22.39 160.81 35.6 173.14" />
            <Polygon fill="#CAFFBF" className="cls-1"
              points="23.1 186.65 34.54 174.39 16.31 157.38 16.31 143.46 0.67 158.82 0.67 179.95 15.91 179.95 23.1 186.65" />
            <Rect fill="#9BF6FF" className="cls-1" x="76.07" y="172.3" width="10.35" height="39.4"
              transform="translate(152.77 -3.83) rotate(43)" />
            <Rect fill="#9BF6FF" className="cls-1" x="93.16" y="192.3" width="13.51" height="56.43"
              transform="translate(320.44 120.6) rotate(90)" />
            <Rect fill="#9BF6FF" className="cls-1" x="91.65" y="209.14" width="16.53" height="56.43"
              transform="translate(337.28 137.45) rotate(90)" />
            <Rect fill="#9BF6FF" className="cls-1" x="86.14" y="232.91" width="27.54" height="56.43"
              transform="translate(361.04 161.21) rotate(90)" />
            <Polygon fill="#9BF6FF" className="cls-1"
              points="71.89 211.92 99.61 182.19 112.44 194.16 95.82 211.99 71.89 211.92" />
            <Polygon fill="#9BF6FF" className="cls-1"
              points="98.01 212 113.62 195.26 128.13 209.17 128.13 211.99 98.01 212" />
            <Polygon fill="#9BF6FF" className="cls-1"
              points="71.7 291.62 71.7 276.74 128.13 276.74 128.13 283.86 116.06 291.62 71.7 291.62" />
            <Rect fill="#A0C4FF" className="cls-1" x="86.19" y="278.89" width="15.18" height="44.16"
              transform="translate(394.75 207.19) rotate(90)" />
            <Rect fill="#A0C4FF" className="cls-1" x="86.37" y="295.65" width="14.82" height="44.16"
              transform="translate(411.51 223.95) rotate(90)" />
            <Polygon fill="#A0C4FF" className="cls-1"
              points="71.7 340.9 71.7 326.91 116.08 326.91 128.32 334.61 128.32 340.9 71.7 340.9" />
            <Rect fill="#A0C4FF" className="cls-1" x="93.11" y="321.25" width="14" height="56.43"
              transform="translate(449.57 249.36) rotate(90)" />
            <Rect fill="#A0C4FF" className="cls-1" x="92.84" y="337.28" width="14.53" height="56.43"
              transform="translate(465.6 265.39) rotate(90)" />
            <Rect fill="#A0C4FF" className="cls-1" x="97.39" y="355.28" width="11.92" height="49.94"
              transform="translate(483.6 276.89) rotate(90)" />
            <Polygon fill="#BDB2FF" className="cls-1"
              points="116.16 421.23 128.32 409.12 128.32 387.8 78.39 387.8 78.39 409.12 104.05 409.12 116.16 421.23" />
            <Polygon fill="#BDB2FF" className="cls-1"
              points="80.59 410.92 103.57 410.92 114.98 422.34 103.49 433.82 80.59 410.92" />
            <Polygon fill="#BDB2FF" className="cls-1"
              points="70.68 417.05 76.81 410.92 78.38 410.93 102.39 434.94 95.48 441.85 70.68 417.05" />
            <Polygon fill="#BDB2FF" className="cls-1"
              points="45.74 467.75 64.27 486.28 90.3 460.25 90.3 460.25 100.86 449.69 69.34 418.16 58.78 428.72 63.91 433.85 63.91 449.58 45.74 467.75" />
            <Polygon fill="#BDB2FF" className="cls-1"
              points="58.81 451.58 62.3 448.09 62.3 442.51 36.15 442.51 36.15 456.17 45.18 465.21 58.81 451.58" />
            <Polygon fill="#BDB2FF" className="cls-1"
              points="62.3 434.87 47.71 419.76 36.16 428.35 36.15 428.35 36.15 440.89 62.3 440.89 62.3 434.87" />
            <Rect fill="#FFC6FF" className="cls-1" x="113.18" y="436.88" width="24.77" height="24.12"
              transform="translate(574.51 323.37) rotate(90)" />
            <Rect fill="#FFC6FF" className="cls-1" x="124.2" y="485.42" width="32.28" height="15.25"
              transform="translate(633.38 352.7) rotate(90)" />
            <Polygon fill="#FFC6FF" className="cls-1"
              points="147.96 543.11 147.96 510.83 132.72 510.83 115.69 527.86 130.94 543.11 147.96 543.11" />
            <Polygon fill="#FFC6FF" className="cls-1"
              points="130.94 509.18 130.94 476.9 116.13 476.9 116.13 476.91 107.99 484.5 130.94 509.18" />
            <Rect fill="#FFC6FF" className="cls-1" x="93.98" y="494.94" width="36.61" height="15.25"
              transform="translate(395.8 72.68) rotate(46)" />
            <Polygon fill="#FFC6FF" className="cls-1"
              points="113.95 526.76 92.93 506.6 92.65 496.44 118.09 522.77 113.95 526.76" />
            <Rect fill="#FFC6FF" className="cls-1" x="146.94" y="397.43" width="21.75" height="19.71"
              transform="translate(565.11 249.47) rotate(90)" />
            <Rect fill="#FFC6FF" className="cls-1" x="146.94" y="373.04" width="21.75" height="19.71"
              transform="translate(540.72 225.08) rotate(90)" />
            <Rect fill="#FFC6FF" className="cls-1" x="146.94" y="348.37" width="21.75" height="19.71"
              transform="translate(516.05 200.41) rotate(90)" />
            <Rect fill="#FFC6FF" className="cls-1" x="146.88" y="239.32" width="21.75" height="19.71"
              transform="translate(406.94 91.43) rotate(90)" />
            <Rect fill="#FFC6FF" className="cls-1" x="146.88" y="214.94" width="21.75" height="19.71"
              transform="translate(382.55 67.04) rotate(90)" />
            <Rect fill="#FFC6FF" className="cls-1" x="146.88" y="190.27" width="21.75" height="19.71"
              transform="translate(357.88 42.37) rotate(90)" />
            <Polygon fill="#FFC6FF" className="cls-1"
              points="147.9 294.55 147.9 262.43 167.61 262.43 167.61 264.41 157.75 275.37 157.75 294.55 147.9 294.55" />
            <Rect fill="#fdffb6" className="cls-1" x="145.79" y="298.93" width="14.08" height="9.86"
              transform="translate(456.68 151.03) rotate(90)" />
            <Polygon fill="#fdffb6" className="cls-1"
              points="147.9 313.06 147.9 345.19 167.61 345.19 167.61 343.2 157.75 332.24 157.75 313.06 147.9 313.06" />
            <Rect fill="#fdffb6" className="cls-1" x="131.04" y="452.74" width="40.35" height="6.64"
              transform="translate(607.29 304.85) rotate(90)" />
            <Rect fill="#fdffb6" className="cls-1" x="144.52" y="153.82" width="23.64" height="6.64"
              transform="translate(356.73 62.38) rotate(109.54)" />
            <Rect fill="#fdffb6" className="cls-1" x="173.44" y="86.46" width="21.75" height="19.71"
              transform="translate(280.63 -88) rotate(90)" />
            <Rect fill="#fdffb6" className="cls-1" x="173.44" y="109.61" width="21.75" height="19.71"
              transform="translate(303.78 -64.85) rotate(90)" />
            <Polygon fill="#fdffb6" className="cls-1"
              points="128.13 140.91 128.13 110.56 138.24 89.59 160.92 89.59 160.92 127.21 150.22 140.91 128.13 140.91" />
            <Polygon fill="#fdffb6" className="cls-1"
              points="126.57 108.89 136.46 88.13 123.76 75.44 91.48 107.71 91.42 118.71 115.47 140.91 126.57 140.91 126.57 108.89" />
            <Rect fill="#fdffb6" className="cls-1" x="117.66" y="160.06" width="16.71" height="16.71"
              transform="translate(294.43 42.4) rotate(90)" />
            <Polygon fill="#fdffb6" className="cls-1"
              points="138.18 87.36 160.92 87.36 160.92 64.61 160.81 38.58 125.09 74.3 138.18 87.36" />
            <Polygon fill="#fdffb6" className="cls-1"
              points="90.42 106.19 159.47 37.13 129.27 6.93 129.25 6.94 86.61 6.94 79.71 0.13 51.27 0.13 44.37 6.94 35.77 6.94 35.77 55.64 90.31 106.19 90.36 106.14 90.42 106.19" />


                    </G>
                </Svg>
            </ReactNativeZoomableView>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default Map
