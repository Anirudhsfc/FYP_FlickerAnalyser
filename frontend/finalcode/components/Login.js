import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback, TextInput} from 'react-native';

const Login = ({navigation}) => {
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');

  const [user,setUser] = useState({
    email: 'tanuj@gmail.com',
    password: 'mypass'
  })

  const loginHandler = () => {
    {(emailInput == user.email)&&(passInput == user.password) ? navigation.navigate('Photo', {email: emailInput, pwd: passInput, isLoggedIn: true}) : alert("wrong credentials")}
  }

  return(
    <View style={styles.background}>
        <Image style={styles.logo} source={require('../images/idea.png')}/>
        <View style={styles.inputsection}>
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.inputbox} onChangeText={emailInput => setEmailInput(emailInput)}></TextInput>
        </View>
        <View style={styles.inputsection}>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.inputbox} onChangeText={passInput => setPassInput(passInput)}></TextInput>
        </View>
        <TouchableWithoutFeedback onPress={loginHandler}>
            <View style={styles.pbutton}>
                <Text style={styles.btext}>Login</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#121212',
      justifyContent: 'center'
    },
    logo: {
      width: 150,
      height: 200,
      resizeMode:'contain',
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    pbutton: {
        width: 350,
        paddingTop: 15,
        paddingBottom: 15,
        borderWidth: 2,
        borderColor: '#8740DD',
        borderStyle: 'solid',
        backgroundColor: '#8740DD',
        borderRadius: 100/8,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
      },
      btext: {
        color: '#EFEFEF',
        fontSize: 20
      },
      text: {
        color: '#EFEFEF',
        fontSize: 20,
        marginBottom: 10
      },
      inputsection: {
        width: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
      },
      inputbox:{
          backgroundColor: '#1E1E1E',
          borderRadius: 10,
          color: '#EFEFEF',
          fontSize: 18
      }
  });
  

export default Login;