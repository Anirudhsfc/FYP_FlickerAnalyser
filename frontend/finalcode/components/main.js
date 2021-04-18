import React from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';

const Main = ({navigation}) => {

  const loginHandler = () => {
    navigation.navigate("Login");
  }

  const SignUpHandler = () => {
    navigation.navigate("Signup");
  }

  const nologHandler = () => {
    navigation.navigate("Photo", {
      isLoggedIn: false
    });
  }

  return(
    <View style={styles.background}>
      <Image style={styles.logo} source={require('../images/idea.png')}/>
      <TouchableWithoutFeedback onPress={loginHandler}>
        <View style={styles.pbutton}>
          <Text style={styles.btext}>Login</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={SignUpHandler}>
        <View style={styles.button}>
          <Text style={styles.btext}>Sign Up</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.text}>Or</Text>
      <Text style={styles.text} onPress={nologHandler}>Continue without logging in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 200,
    resizeMode:'contain',
    marginBottom: 20
  },
  button: {
    width: 250,
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderColor: '#8740DD',
    borderStyle: 'solid',
    backgroundColor: '#121212',
    borderRadius: 100/8, 
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  pbutton: {
    width: 250,
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderColor: '#8740DD',
    borderStyle: 'solid',
    backgroundColor: '#8740DD',
    borderRadius: 100/8,
    alignItems: 'center'
  },
  btext: {
    color: '#EFEFEF',
    fontSize: 20
  },
  text: {
    color: '#EFEFEF',
    fontSize: 20,
    marginBottom: 15
  }
});

export default Main;