import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Nav from './bottomNav'

const History = ({ route, navigation }) => {

  const infoHandler = () => {
    navigation.navigate('Info');
  }

  const [isLogged, setIsLogged] = useState(true);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [json, setJson] = useState([]);


  useEffect(() => {
    setIsLogged(route?.params?.isLogged ?? true);
    setEmail(route?.params?.email ?? '');
    setPwd(route?.params?.pwd ?? '');
    setJson(route?.params?.json ?? []);
  }, [])


  return (
    <View style={styles.background}>
    <Image style={styles.logo} source={require('../images/idea.png')} />
    {
      isLogged 
      ?
      email === 'tanuj@gmail.com'
      ?
      <ScrollView>
          <View>
                <View style={styles.section}>
                  <Image style={styles.image} source={require('../images/idea.png')} />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.body}>Flicker Level</Text>
                    <Text style={styles.bodyright}>{json[0]}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.body}>Confidence Level</Text>
                    <Text style={styles.bodyright}>{json[1].toFixed(4) * 100} %</Text>
                  </View>
                  <Text style={styles.body} onPress={infoHandler}>Show More</Text>
                </View>
          </View>
        
      </ScrollView>
      :
      <View>
        <Text style={styles.text}>No Scans to Display</Text>
      </View>
      :
      <View>
        <Text style={styles.text}>No Access</Text>
      </View>
    }
      
      <Nav navigation={navigation} isLogged = {isLogged} email = {email} pwd = {pwd}/>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#121212',
  },
  logo: {
    width: 50,
    height: 75,
    resizeMode: 'contain',
    backgroundColor: '#121212',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  section: {
    marginBottom: 40,
    backgroundColor: '#1E1E1E',
    width: 350,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  body: {
    color: '#EFEFEF',
    fontSize: 20,
    marginBottom: 20
  },
  bodyright: {
    color: '#EFEFEF',
    fontSize: 20,
    marginBottom: 20,
    position: 'absolute',
    right: 0
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 20
  },
  text: {
    color: '#EFEFEF',
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});


export default History;