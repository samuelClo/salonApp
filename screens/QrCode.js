import React, { Component, Fragment } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './scanStyle'
import {TouchableOpacity, Text, StatusBar, Linking, View} from 'react-native';
import ParametersRedux from "../redux/ParametersRedux";
import {connect} from "react-redux";

class ScanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scan: true,
            ScanResult: false,
            result: null,
            brands: this.props.brands
        };
    }

    onSuccess = (e) => {
        const check = e.data.substring(0, 4);
        console.log('scanned data' + check);
        this.setState({
            result: e,
            scan: false,
            ScanResult: true
        })
        if (check === 'http') {
            Linking
                .openURL(e.data)
                .catch(err => console.error('An error occured', err));
        } else {
            this.setState({
                result: e,
                scan: false,
                ScanResult: true
            })
        }

    }
    scanAgain = () => {
        this.setState({
            scan: true,
            ScanResult: false
        })
    }
    render() {
        const { scan, ScanResult, result } = this.state
        return (
            <View style={styles.scrollViewStyle}>
                    <StatusBar barStyle="dark-content" />
                    {ScanResult &&
                        <Fragment>
                            <Text style={styles.textTitle1}>Result !</Text>
                            <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                                <Text>Result : {result.data}</Text>
                                <TouchableOpacity onPress={this.scanAgain} style={styles.buttonTouchable}>
                                    <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
                                </TouchableOpacity>

                            </View>
                        </Fragment>
                    }


                    {scan &&
                        <QRCodeScanner
                            reactivate={true}
                            showMarker={true}
                            cameraStyle={{height: '100%'}}
                            ref={(node) => { this.scanner = node }}
                            onRead={this.onSuccess}
                        />
                    }
            </View>

        );
    }
}

const mapStateToProps = state => {
    return {
        brands: state.ParametersStore.brands
    }
}

export default connect(
    mapStateToProps,
)(ScanScreen)
