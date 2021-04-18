import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Nav from './bottomNav';

const Info = ({ route, navigation }) => {

    const [isLogged, setIsLogged] = useState(true);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [json, setJson] = useState([]);

    useEffect(async () => {
        setIsLogged(route?.params?.isLoggedIn ?? true);
        setEmail(route?.params?.email ?? '');
        setPwd(route?.params?.pwd ?? '');

        let response = await fetch('http://aef21259f8e3.ngrok.io', {
            method: 'GET'
        });

        let json = await response.json();

        console.log(json);

        setJson(json.message ?? []);
      }, [])

    return (
        <View style={styles.background}>
            <ScrollView>
                <Image style={styles.logo} source={require('../images/idea.png')} />
                <View style={styles.section}>
                    <Text style={styles.heading}>Flicker Level</Text>
                    <Text style={styles.bigbody}>{json.length > 0 ? json[0] : ''}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.heading}>In-depth Analysis</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.body}>1. Confidence Level</Text>
                        <Text style={styles.bodyright}>{json.length > 1 ? json[1].toFixed(4) * 100 : 0} %</Text>
                    </View>
                </View>
            </ScrollView>
            <Nav navigation={navigation} isLogged = {isLogged} email = {email} pwd = {pwd} json={json} />
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
        resizeMode: 'contain',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    section: {
        marginBottom: 40,
        backgroundColor: '#1E1E1E',
        width: 350,
        paddingTop: 10,
        paddingBottom: 10,
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
    heading: {
        color: '#838383',
        fontSize: 22,
        marginBottom: 15,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    bigbody: {
        color: '#EFEFEF',
        fontSize: 35,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});


export default Info;