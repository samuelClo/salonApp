import React, {Component} from "react";
import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";

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
                  <Text>
                    {this.props.modalData.start} {this.props.modalData.end}
                  </Text>
                  <Text>
                    {this.props.modalData.categories}
                  </Text>
                  <Text>
                    {this.props.modalData.content}
                  </Text>
                </View>
              </TouchableOpacity>
            </Modal>
    );
  }

}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    textAlign: "center"
  }
});

export default ModalDetailed;