import * as React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import ParametersRedux from './redux/ParametersRedux';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 20,
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
  },
});

class Detail extends React.Component {
  static sharedElements = (navigation, otherNavigation, showing) => {
    const id = navigation.getParam('sentId', '0');
    //const id = route.params['id'];
    return [
      {id: 'image', animation: 'fade',
      resize: 'stretch'},
      {id: 'text', animation: 'fade'},
    ];
  };

  onClickImage = () => {
    this.props.updateMonTitre('Mon premier titre')
  }

  render() {
    return (
        <TouchableOpacity style={styles.container} onPress={this.onClickImage}>
          <SharedElement id="image">
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require('./theboys.jpg')}
            />
          </SharedElement>
          <SharedElement id="text">
            <Text style={styles.text}>{this.props.monTitre}</Text>
          </SharedElement>
        </TouchableOpacity>
    )
  }
}


const mapStateToProps = state => {
  return {
      monTitre: state.ParametersStore.monTitre,
      isFirstTime: state.ParametersStore.isFirstTime
  }
}
const mapDispatchToProps = dispatch => {
  return {
      updateMonTitre: monTitre => dispatch(ParametersRedux.updateMonTitre(monTitre))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)