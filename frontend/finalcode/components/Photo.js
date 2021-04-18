import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import Nav from './bottomNav'

const Photo = ({route, navigation}) => {

  const [isLogged, setIsLogged] = useState(true);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const cameraHandler = () => {
    navigation.navigate('Camera', {email: route.params.email, pwd: route.params.pwd, isLoggedIn: route.params.isLoggedIn});
  }

  useEffect(() => {
    setIsLogged(route?.params?.isLoggedIn ?? true);
    setEmail(route?.params?.email ?? '');
    setPwd(route?.params?.pwd ?? '');

    console.log(route);
  }, [])

  return(
    <View style={styles.background}>
        <Image style={styles.logo} source={require('../images/idea.png')}/>
        <TouchableWithoutFeedback onPress={cameraHandler}>
            <View style={styles.button}>
                <Text style={styles.btext}>Take a Video</Text>
            </View>
        </TouchableWithoutFeedback>
        <Nav navigation={navigation} isLogged = {isLogged} email = {email} pwd = {pwd}  />
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#121212'
    },
    logo: {
      width: 50,
      height: 75,
      resizeMode:'contain',
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    button: {
        width: 350,
        paddingTop: 15,
        paddingBottom: 15,
        borderWidth: 2,
        borderColor: '#8740DD',
        borderStyle: 'solid',
        backgroundColor: '#121212',
        borderRadius: 100/8, 
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto'
    },
    btext: {
        color: '#EFEFEF',
        fontSize: 20
    },
  });
  

export default Photo;