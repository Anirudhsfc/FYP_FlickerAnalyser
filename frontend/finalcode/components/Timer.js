import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';

const Timer = ({route, navigation}) => {

  useEffect(() => {
    console.log(route)
    setTimeout(() => {
        navigation.navigate('Info', {
          email: route.params.email, pwd: route.params.pwd, isLoggedIn: route.params.isLoggedIn
        })
    }, 5000);
  }, [])

  return(
    <View style={styles.background}>
      <View style={styles.section}>
        <Text style={styles.bigtext}>Please wait</Text>
        <Text style={styles.smtext}>Your video is being processed...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#121212'
    },
    bigtext: {
      color: '#EFEFEF',
      fontSize: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 20
    },
    smtext: {
      color: '#EFEFEF',
      fontSize: 12,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    section: {
      marginBottom: 'auto',
      marginTop: 'auto'
    }
  });
  

export default Timer;