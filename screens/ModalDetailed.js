import React, {Component} from "react";
import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import moment from 'moment';

class ModalDetailed extends Component {
  state = {
    modalVisible: false
  };

  static getDerivedStateFromProps(props, state) {
    return props.show !== state.modalVisible ? {modalVisible: props.show} : null;
  }

  render() {
    const {modalVisible} = this.state;
    return (
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => this.props.unShow()}
            >
              <TouchableOpacity style={styles.centeredView} onPress={() => this.props.unShow()}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}> {this.props.modalData.title} </Text>
                  <Text style={[styles.fontMedium, {color: "red", fontSize: 18, fontWeight: '700'}]}>
                    {moment(this.props.modalData.start, 'LT').format('HH:mm')} {moment(this.props.modalData.end, 'LT').format('HH:mm')}
                  </Text>
                  <Text style={[{color: "#404040", textAlign: 'center', marginTop: 20}, styles.fontMedium]}>
                    {this.props.modalData.content}
                  </Text>
                  <View style={[{flexDirection: 'row', flexWrap: 'wrap', marginTop: 20}]}>
                    {this.props.modalData.categories.map((value, index) => ( <View key={index} style={styles[value]}><Text style={[{color: 'white', fontWeight: 'bold', fontSize: 10, textAlign: 'center'}]}>{value}</Text></View> )) }
                  </View>
                </View>
              </TouchableOpacity>
            </Modal>
    );
  }

}


const styles = StyleSheet.create({
  fontBold: {
    fontWeight: '900'
  },
  fontMedium: {
    fontWeight: '600'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontWeight: '900',
    textAlign: "center",
    fontSize: 20
  },
  Nintendo: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  ESWC: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  Esport: {
    backgroundColor: 'purple',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  Handicap: {
    backgroundColor: 'pink',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  EASports: {
    backgroundColor: 'grey',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  Riot: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  Danse: {
    backgroundColor: 'orange',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  }
});

export default ModalDetailed;
