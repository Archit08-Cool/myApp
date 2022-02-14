import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableOpacity,

} from 'react-native';

import db from "../config"

export default class DisplayOrder extends Component{

    constructor(){
        super()
        this.state = {
            address : '',
            fooditems : ''
        }
    }

    compononentDidMount(){
        db.ref("/").on("value" , (data)=>{
            var info = data.val()

            this.setState({
                address : info.address,
                fooditems : info.fooditems
            })

        })    
    }
    
    render(){
        return(
            <View style={styles.container} >
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/PIZZA.jpg')}
                    style={styles.bgImage}>

                    <View style={{ justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={{ width: 50, height: 50, marginTop: 40 }}
                        />

                        <Text style={styles.buttonText}>Your Time Table</Text>
                    </View>

                    <View style={styles.lowerContainer}>

                        <Text style={styles.buttonText} >{"Your Address is " + this.state.address }</Text>
                        
                        <Text style={styles.buttonText} >{"Your Order is " + this.state.fooditems }</Text>

                    </View>

                </ImageBackground>
            </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    lowerContainer: {
        flex: 0.5,
        alignItems: "center",
        marginTop: 30
    },
    textinput: {
        width: "75%",
        height: 55,
        padding: 10,
        borderColor: "#FFFFFF",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 18,
        color: "#FFFFFF",
        fontFamily: "Rajdhani_600SemiBold",
        backgroundColor: "#5653D4"
    },
    button: {
        width: "43%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F48D20",
        borderRadius: 15
    },
    buttonText: {
        marginTop: 20,
        fontSize: 24,
        color: "black",
        fontFamily: "Rajdhani_600SemiBold"
    }
});

