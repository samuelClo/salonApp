import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaView, TextInput , StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'native-base';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state={
            research:null
        }
        this.onChangResearch = this.onChangResearch.bind(this)
    }

    async componentDidMount() {
        SplashScreen.hide()
    }

    onChangResearch = (research) =>{
        this.setState({
            research: research
        })
    }
    render() {
        console.log(this.state.research)
        return <SafeAreaView style={styles.safeAre}>
            <TextInput
                style={styles.searchBar}
                onChangeText={this.onChangResearch}
                onSubmitEditing={e => this.onChangResearch(e.nativeEvent.text)}
                placeholder="Recherche"
                value={this.state.research}
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
        width: "100%",
        paddingHorizontal:15,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },

    searchBar: {
        height: 40,
        width:300,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius:10,
        marginRight: 15,
    },
    btn:{
        backgroundColor:"#01ACF5",
        paddingHorizontal:8,
        justifyContent: "center",
        height: 40,
        borderRadius: 100
    }
});
