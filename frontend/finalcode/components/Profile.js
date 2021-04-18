import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import Nav from './bottomNav'

const Profile = ({route, navigation}) => {

  const logoutHandler = () => {
    navigation.navigate("Main");
  }

  const [isLogged, setIsLogged] = useState(true);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');


  useEffect(async () => {
    setIsLogged(route?.params?.isLogged ?? true);
    setEmail(route?.params?.email ?? '');
    setPwd(route?.params?.pwd ?? '');
  }, [])

  return(
    <View style={styles.background}>
    {
      isLogged
      ?
        <View>
          <Image style={styles.logo} source={require('../images/idea.png')}/>
          <View style={styles.textsection}>
              <Text style={styles.textsmall}>Email</Text>
              <Text style={styles.textbig}>{email}</Text>
          </View>
          <View style={styles.textsection}>
              <Text style={styles.textsmall}>Password</Text>
              <Text style={styles.textbig}>{pwd}</Text>
          </View>
          <View style={styles.textsection}>
              <Text style={styles.textsmall}>Total Scans</Text>
              <Text style={styles.textbig}>{email === 'tanuj@gmail.com' ? 1 : 0}</Text>
          </View>
          
      </View>
      :
      <View>
        <Image style={styles.logo} source={require('../images/idea.png')}/>
        <Text style={styles.text}>No Access</Text>
      </View>
    }
      <TouchableWithoutFeedback onPress={logoutHandler}>
        <View style={styles.button}>
          <Text style={styles.btext}>Logout</Text>
        </View>
      </TouchableWithoutFeedback>
      <Nav navigation={navigation} isLogged = {isLogged} />
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
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    textsection: {
        marginLeft: 20,
        marginBottom: 40
    },
    textsmall: {
        color: '#838383',
        fontSize: 15,
        marginBottom: 10
    },
    textbig: {
        color: '#EFEFEF',
        fontSize: 20
    },
    button: {
      width: 150,
      paddingTop: 15,
      paddingBottom: 15,
      borderWidth: 2,
      borderColor: '#8740DD',
      borderStyle: 'solid',
      backgroundColor: '#121212',
      borderRadius: 100/8, 
      marginTop: 20,
      marginBottom: 20,
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    btext: {
      color: '#EFEFEF',
      fontSize: 20
    },
    text: {
      color: '#EFEFEF',
      fontSize: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  });
  

export default Profile;