import React from 'react';
import {  View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native';


const Nav = (props) => {

  const profileHandler = () => {
    props.navigation.navigate('Profile', {
      isLogged:  props.isLogged ?? true,
      email: props.email ?? '',
      pwd: props.pwd ?? ''
    });
  }

  const photoHandler = () => {
    props.navigation.navigate('Photo', {
      isLogged:  props.isLogged ?? true
    });
  }

  const historyHandler = () => {
    props.navigation.navigate('History', {
      isLogged:  props.isLogged ?? true,
      email: props.email ?? '',
      pwd: props.pwd ?? '',
      json: props.json ?? []
    });
  }

  return(
    <View style={styles.box}>
      <TouchableWithoutFeedback onPress={profileHandler}>
        <View style={styles.tab} >
          <Image style={styles.icon} source={require('../images/user.png')}/>
          <Text style={styles.icontext}>Profile</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={photoHandler}>
        <View style={styles.tab}>
          <Image style={styles.icon} source={require('../images/camera.png')}/>
          <Text style={styles.icontext}>Photo</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={historyHandler}>
        <View style={styles.tab}>
          <Image style={styles.icon} source={require('../images/history.png')}/>
          <Text style={styles.icontext}>History</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
    box:{
      backgroundColor: '#1E1E1E',
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      flex: 1
    },
    icon: {
      height: 25,
      width: 25,
      resizeMode:'contain',
      marginBottom: 5
    },
    icontext: {
      color: '#838383'
    },
    tab:{
      padding: 20,
      flex: 1/3,
      alignItems: 'center'
    }
  });

export default Nav;