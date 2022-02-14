import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import db from '../config'

export default class AddOrder extends Component {

  constructor() {
    super();
    this.state = {
      address: '',
      fooditems: '',

    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} >
        <ScrollView style={{ flex: 1 }}>
          <SafeAreaView style={styles.droidSafeArea} />

          <ImageBackground
            source={require('../assets/PIZZA.jpg')}
            style={styles.bgImage}
          >

            <View style={styles.upperContainer}>
              <Text style={styles.buttonText}>Add your Order!!</Text>
            </View>

            <View style={styles.lowerContainer}>

              <Text style={styles.buttonText}>Your Adress</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={(text) => {
                  this.setState({
                    address: text
                  })
                }}
              />
              <TouchableOpacity
                style={[styles.button, { marginTop: 20 }]}
                onPress={() => {
                  db.ref("/").update({
                    address: this.state.address
                  })
                }}
              >
                <Text style={styles.buttonText} >
                  Add
                </Text>
              </TouchableOpacity>


              <Text style={styles.buttonText}>Add Food Items</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={(text) => {
                  this.setState({
                    fooditems: text
                  })
                }}
              />
               <TouchableOpacity
                style={[styles.button, { marginTop: 20 }]}
                onPress={() => {
                  db.ref("/").update({
                    fooditems: this.state.fooditems
                  })
                }}
              >
                <Text style={styles.buttonText} >
                  Add
                </Text>
              </TouchableOpacity>

            </View>

          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : 35,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  upperContainer: {
    marginTop: 40,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: 'center',
    marginTop: 30,
  },
  textinput: {
    width: '75%',
    height: 55,
    padding: 10,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: '#5653D4',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
  },
});
