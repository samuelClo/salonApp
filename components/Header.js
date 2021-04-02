import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaView, TextInput , StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'native-base';
export default class Header extends React.Component {
    constructor() {
        super();
        this.states={
            research:"salut"
        }
        this.onChangResearch = this.onChangResearch.bind(this)
    }
    async componentDidMount() {
        SplashScreen.hide()
    }
    onChangResearch = () =>{
        this.setState({
            research: this.state.research
        })
    }
    render() {
        return <SafeAreaView style={styles.safeAre}>
            <TextInput
                style={styles.searchBar}
                onChangeText={this.onChangResearch}
                placeholder="Recherche"
                keyboardType="default"
            />
            <TouchableOpacity style={styles.btn}>
                <Icon style={{color: "white"}} name="list-outline" />
            </TouchableOpacity>
        </SafeAreaView>
    }
}
const styles = StyleSheet.create({
    safeAre:{
        position: "absolute",
        top: 0,
        zIndex: 5,
        marginHorizontal:10,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    searchBar: {
        height: 40,
        width:300,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius:10,
        marginRight: 20,
    },
    btn:{
        backgroundColor:"#5dc7d4",
        paddingHorizontal:10,
        justifyContent: "center",
        height: 40,
        borderRadius: 100
    }
});