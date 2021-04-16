import React, {useState} from 'react'
import SplashScreen from 'react-native-splash-screen'
import {View, useWindowDimensions, StyleSheet, Button, Text} from 'react-native'
import Header from "../components/Header.js";
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import Svg, {
    G,
    Rect,
    Polygon,
    Circle,
    SvgCss,
    Text as SvgText
} from 'react-native-svg';

const Map = () => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const tabFooterHeight = 49
    const realHeight = windowHeight - tabFooterHeight;

    function renderSvgElements2() {
        return svgElements.map((SvgGroup, index) => {
            return SvgGroup.map(SvgElement => {
                return (
                    <SvgElement.type
                        {...SvgElement.props}
                        id={index + "_" + SvgElement.type.name}
                        key={index + "_" + SvgElement.type.name}
                        onPress={() => {
                            pressStandArea(SvgElement)
                        }}>
                        {SvgElement.type.name === "Text" ? index+1 : ""}
                    </SvgElement.type>
                )
            })
        })
    }

    function pressStandArea(element) {
        console.log(element.props.className)
    }

    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <Header/>
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
                        {renderSvgElements2()}

                        <Rect key="disableStand1" stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-7" fill={COLORS.cls7} x="131.04" y="452.74" width="40.35" height="6.64"
                              transform="translate(607.29 304.85) rotate(90)"/>
                        <Rect key="disableStand2" stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-7" fill={COLORS.cls7} x="144.52" y="153.82" width="23.64" height="6.64"
                              transform="translate(356.73 62.38) rotate(109.54)"/>
                    </G>
                </Svg>
            </ReactNativeZoomableView>
        </View>
    )
}

const COLORS= {
    cls1: '#f72585',
    cls2: "#209b7f",
    cls3: "#ffbf1f",
    cls4: "#49b800",
    cls5: "#11a3d0",
    cls6: "#e07400",
    cls7: "#726565",
    cls8: 'aqua',
}

const svgElements = [
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-3" fill={COLORS.cls3}
                 points="0.13 430.42 0.13 391.1 55.4 391.1 55.4 412.01 30.67 430.42 0.13 430.42"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="8.06" cy="398.6" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(6.27 400.7)">1</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} x="14.32" y="348.53" width="26.88" height="55.28"
              transform="translate(403.93 348.4) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="8.06" cy="370.32" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(6.27 372.43)">2</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} x="3.91" y="309.67" width="47.71" height="55.28"
              transform="translate(365.07 309.55) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="7.64" cy="320.32" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(5.84 322.42)">3</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} x="10.95" y="267.49" width="33.62" height="55.28"
              transform="translate(322.89 267.36) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="7.64" cy="285.69" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(5.84 287.79)">4</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} x="11.91" y="233.2" width="31.71" height="55.28"
              transform="translate(288.6 233.07) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="7.64" cy="252.18" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(5.84 254.28)">5</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-1" fill={COLORS.cls1} x="18.73" y="206.9" width="18.07" height="55.28"
              transform="translate(262.3 206.78) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="7.64" cy="232.96" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(5.84 235.07)">6</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} points="0.13 224.22 0.13 201.29 36.91 201.29 55.4 218.56 55.4 224.22 0.13 224.22"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="7.64" cy="208.46" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(5.84 210.56)">7</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-4" fill={COLORS.cls4}
                 points="0.13 199.67 0.13 181.5 15.5 181.5 34.85 199.67 0.13 199.67"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="7.64" cy="188.19" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(5.84 190.29)">8</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-3" fill={COLORS.cls3}
                 points="23.1 186.65 34.54 174.39 16.31 157.38 16.31 143.46 0.67 158.82 0.67 179.95 15.91 179.95 23.1 186.65"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="7.64" cy="163.05" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(5.84 165.15)">9</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} fill={COLORS.cls5} className="cls-5"
                 points="35.6 173.14 43.38 164.8 33.94 156 58.17 130.01 42.73 115.6 17.92 142.2 17.92 156.65 22.39 160.81 22.39 160.81 35.6 173.14"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="42.87" cy="126.28" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(39.38 128.46)">10</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} fill={COLORS.cls5} className="cls-5"
                 points="37.63 199.67 81.97 152.13 74.08 144.77 74.08 144.77 59.42 131.1 36.09 156.13 45.41 164.83 24.42 187.35 37.63 199.67"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="60.23" cy="140.99" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(56.73 143.17)">11</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-3" fill={COLORS.cls3}
                 points="52.13 213.2 38.92 200.87 83.07 153.52 89.96 172.63 52.13 213.2"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="80.23" cy="166.3" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(76.73 168.48)">12</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-1" fill={COLORS.cls1} x="76.07" y="172.3" width="10.35" height="39.4"
              transform="translate(152.77 -3.83) rotate(43)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="89.96" cy="182.66" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(86.46 184.84)">13</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} points="71.89 211.92 99.61 182.19 112.44 194.16 95.82 211.99 71.89 211.92"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="99.92" cy="192" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(96.42 194.18)">14</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} fill={COLORS.cls5} className="cls-5"
                 points="98.01 212 113.62 195.26 128.13 209.17 128.13 211.99 98.01 212"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="113.94" cy="203.63" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(110.45 205.81)">15</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} x="93.16" y="192.3" width="13.51" height="56.43"
              transform="translate(320.44 120.6) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="121.19" cy="220.55" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(117.7 222.73)">16</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} x="91.65" y="209.14" width="16.53" height="56.43"
              transform="translate(337.28 137.45) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="121.19" cy="235.67" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(117.7 237.85)">17</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-1" fill={COLORS.cls1} x="86.14" y="232.91" width="27.54" height="56.43"
              transform="translate(361.04 161.21) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="121.19" cy="254.28" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(117.7 256.46)">18</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-4" fill={COLORS.cls4}
                 points="71.7 291.62 71.7 276.74 128.13 276.74 128.13 283.86 116.06 291.62 71.7 291.62"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="118.41" cy="282.52" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(114.92 284.7)">19</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} x="86.19" y="278.89" width="15.18" height="44.16"
              transform="translate(394.75 207.19) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="109.17" cy="299.95" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(105.67 302.13)">20</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} x="86.37" y="295.65" width="14.82" height="44.16"
              transform="translate(411.51 223.95) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="109.17" cy="316.76" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(105.67 318.94)">21</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-3" fill={COLORS.cls3}
                 points="71.7 340.9 71.7 326.91 116.08 326.91 128.32 334.61 128.32 340.9 71.7 340.9"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="115.86" cy="334.38" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(112.37 336.55)">22</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} x="93.11" y="321.25" width="14" height="56.43"
              transform="translate(449.57 249.36) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="121.59" cy="348.85" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(118.1 351.03)">23</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-6" fill={COLORS.cls6} x="92.84" y="337.28" width="14.53" height="56.43"
              transform="translate(465.6 265.39) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="121.59" cy="364.63" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(118.1 366.81)">24</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-1" fill={COLORS.cls1} x="97.39" y="355.28" width="11.92" height="49.94"
              transform="translate(483.6 276.89) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="121.59" cy="380.3" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(118.1 382.48)">25</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} points="116.16 421.23 128.32 409.12 128.32 387.8 78.39 387.8 78.39 409.12 104.05 409.12 116.16 421.23"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="121.59" cy="393.77" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(118.1 395.95)">26</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-4" fill={COLORS.cls4}
                 points="80.59 410.92 103.57 410.92 114.98 422.34 103.49 433.82 80.59 410.92"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="105.67" cy="422.37" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(102.18 424.55)">27</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-4" fill={COLORS.cls4}
                 points="70.68 417.05 76.81 410.92 78.38 410.93 102.39 434.94 95.48 441.85 70.68 417.05"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="94.42" cy="433.97" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(90.92 436.15)">28</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} fill={COLORS.cls5} className="cls-5"
                 points="45.74 467.75 64.27 486.28 90.3 460.25 90.3 460.25 100.86 449.69 69.34 418.16 58.78 428.72 63.91 433.85 63.91 449.58 45.74 467.75"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="91.64" cy="449.75" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(88.15 451.93)">29</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-3" fill={COLORS.cls3}
                 points="58.81 451.58 62.3 448.09 62.3 442.51 36.15 442.51 36.15 456.17 45.18 465.21 58.81 451.58"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="42.77" cy="448.94" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(39.28 451.12)">30</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-1" fill={COLORS.cls1}
                 points="62.3 434.87 47.71 419.76 36.16 428.35 36.15 428.35 36.15 440.89 62.3 440.89 62.3 434.87"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="42.77" cy="431.72" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(39.28 433.9)">31</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-1" fill={COLORS.cls1} x="113.18" y="436.88" width="24.77" height="24.12"
              transform="translate(574.51 323.37) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="131.17" cy="442.88" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(127.67 445.06)">32</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-4" fill={COLORS.cls4} x="124.2" y="485.42" width="32.28" height="15.25"
              transform="translate(633.38 352.7) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="141.25" cy="483.31" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(137.75 485.49)">33</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-4" fill={COLORS.cls4}
                 points="147.96 543.11 147.96 510.83 132.72 510.83 115.69 527.86 130.94 543.11 147.96 543.11"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="141.25" cy="517.04" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(137.75 519.22)">34</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} fill={COLORS.cls5} className="cls-5"
                 points="130.94 509.18 130.94 476.9 116.13 476.9 116.13 476.91 107.99 484.5 130.94 509.18"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="124.29" cy="483.31" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(120.8 485.49)">35</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-4" fill={COLORS.cls4} x="93.98" y="494.94" width="36.61" height="15.25"
              transform="translate(395.8 72.68) rotate(46)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="104.76" cy="493.51" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(101.27 495.69)">36</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-3" fill={COLORS.cls3}
                 points="113.95 526.76 92.93 506.6 92.65 496.44 118.09 522.77 113.95 526.76"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="98.34" cy="507.39" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(94.85 509.57)">37</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} fill={COLORS.cls5} className="cls-5" x="146.94" y="397.43" width="21.75" height="19.71"
              transform="translate(565.11 249.47) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="154.54" cy="402.99" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(151.05 405.17)">38</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} fill={COLORS.cls5} className="cls-5" x="146.94" y="373.04" width="21.75" height="19.71"
              transform="translate(540.72 225.08) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="154.54" cy="378.62" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(151.05 380.79)">39</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-1" fill={COLORS.cls1} x="146.94" y="348.37" width="21.75" height="19.71"
              transform="translate(516.05 200.41) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="154.54" cy="353.68" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(151.05 355.86)">40</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-3" fill={COLORS.cls3}
                 points="147.9 313.06 147.9 345.19 167.61 345.19 167.61 343.2 157.75 332.24 157.75 313.06 147.9 313.06"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="154.54" cy="339.2" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(151.05 341.38)">41</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-3" fill={COLORS.cls3} x="145.79" y="298.93" width="14.08" height="9.86"
              transform="translate(456.68 151.03) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="152.86" cy="303.09" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(149.36 305.27)">42</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-6" fill={COLORS.cls6}
                 points="147.9 294.55 147.9 262.43 167.61 262.43 167.61 264.41 157.75 275.37 157.75 294.55 147.9 294.55"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="152.83" cy="287.79" r="4.83"/>,
        <SvgText fontSize={7} fill="#000" className="cls-9" transform="translate(149.33 289.97)">43</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-1" fill={COLORS.cls1} x="146.88" y="239.32" width="21.75" height="19.71"
              transform="translate(406.94 91.43) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="154.25" cy="253.58" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(150.75 255.76)">44</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-1" fill={COLORS.cls1} x="146.88" y="214.94" width="21.75" height="19.71"
              transform="translate(382.55 67.04) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="154.25" cy="229.09" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(150.75 231.27)">45</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-6" fill={COLORS.cls6} x="146.88" y="190.27" width="21.75" height="19.71"
              transform="translate(357.88 42.37) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="154.25" cy="204.95" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(150.75 207.13)">46</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-6" fill={COLORS.cls6} x="117.66" y="160.06" width="16.71" height="16.71"
              transform="translate(294.43 42.4) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="128.13" cy="166.3" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(124.64 168.48)">47</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} fill={COLORS.cls5} className="cls-5"
                 points="128.13 140.91 128.13 110.56 138.24 89.59 160.92 89.59 160.92 127.21 150.22 140.91 128.13 140.91"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="147.05" cy="133.94" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(143.55 136.12)">48</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-2" fill={COLORS.cls2} points="126.57 108.89 136.46 88.13 123.76 75.44 91.48 107.71 91.42 118.71 115.47 140.91 126.57 140.91 126.57 108.89"/>,,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="98.34" cy="115.6" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(94.85 117.78)">49</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-3" fill={COLORS.cls3}
                 points="90.42 106.19 159.47 37.13 129.27 6.93 129.25 6.94 86.61 6.94 79.71 0.13 51.27 0.13 44.37 6.94 35.77 6.94 35.77 55.64 90.31 106.19 90.36 106.14 90.42 106.19"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="42.97" cy="52.84" r="4.83"/>,
        <SvgText fontSize={7} fill="#000" className="cls-9" transform="translate(39.48 55.02)">50</SvgText>
    ],
    [
        <Polygon stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-4" fill={COLORS.cls4}
                 points="138.18 87.36 160.92 87.36 160.92 64.61 160.81 38.58 125.09 74.3 138.18 87.36"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="154.65" cy="80.61" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(151.16 82.79)">51</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-4" fill={COLORS.cls4} x="173.44" y="86.46" width="21.75" height="19.71"
              transform="translate(280.63 -88) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="180.8" cy="101.14" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(177.3 103.32)">52</SvgText>
    ],
    [
        <Rect stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-3" fill={COLORS.cls3} x="173.44" y="109.61" width="21.75" height="19.71"
              transform="translate(303.78 -64.85) rotate(90)"/>,
        <Circle stroke="#000" strokeMiterlimit={10} strokeWidth={0.25} className="cls-8" fill={COLORS.cls8} cx="180.8" cy="124.29" r="4.83"/>,
        <SvgText className="cls-9" fontSize={7} fill="#000" transform="translate(177.3 126.47)">53</SvgText>
    ]
]

const styles = StyleSheet.create({
});

export default Map
