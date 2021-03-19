import * as React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import ParametersRedux from './redux/ParametersRedux';
import {connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import LottieView from 'lottie-react-native';
import ApiFood from './ApiFood'
import {Spinner} from 'native-base';

const api = ApiFood.create()


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
  },
  caption: {
    fontSize: 20,
    opacity: 0.5,
  },
  image: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
  },
  image2: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      monTitre: this.props.monTitre,
      foods: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('modify state')
    if (props.monTitre !== state.monTitre) {
      return {
        monTitre: props.monTitre
      };
    }
    return null;
  }

  componentDidUpdate(prevProps){
    console.log('call action')
    if ( prevProps.monTitre !== this.props.monTitre) {

    }
  }

  async componentDidMount(){
    SplashScreen.hide();
    this.props.updateIsFirstTime(false);
    this.props.askForFoods('dessert')
    /*const foods = await api.getFoods();
    this.setState({
      foods
    })*/
  }

  render() {
    // Wrap the component that you want to transition in <SharedElement>
    return (
      <ScrollView style={styles.container}>
          <TouchableOpacity
          onPress={this.onPress}>
            <SharedElement id="image">
              <Image style={styles.image} source={require('./theboys.jpg')} />
            </SharedElement>
            <SharedElement id="text">
              <Text style={styles.text}>{this.state.monTitre}</Text>
            </SharedElement>
            <LottieView source={require('./hero.json')} autoPlay loop />
            <Text style={styles.caption}>tap me</Text>
          </TouchableOpacity>
          {this.state.foods.length>0 ? <Text>{this.state.foods[0].titre}</Text> : <Spinner color='green'/>}
          <Image style={styles.image2} source={require('./theboys.jpg')} />
          <Image style={styles.image2} source={require('./theboys.jpg')} />
          <Image style={styles.image2} source={require('./theboys.jpg')} />
          <Image style={styles.image2} source={require('./theboys.jpg')} />

      </ScrollView>
    );
  }

  onPress = () => {
    //Alert.alert('test')
    this.props.navigation.navigate('Detail');
  };
}


const mapStateToProps = state => {
  return {
      monTitre: state.ParametersStore.monTitre,
      isFirstTime: state.ParametersStore.isFirstTime
  }
}
const mapDispatchToProps = dispatch => {
  return {
      updateIsFirstTime: isFirstTime => dispatch(ParametersRedux.updateIsFirstTime(isFirstTime)),
      updateMonTitre: monTitre => dispatch(ParametersRedux.updateMonTitre(monTitre)),
      askForFoods: categorie => dispatch(ParametersRedux.askForFoods(categorie))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)