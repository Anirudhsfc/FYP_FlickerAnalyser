import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';



class Camera extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            recording: false,
            processing: false
        };
    }
    
    async startRecording() {
        this.setState({ recording: true });
        const { uri, codec = "mp4" } = await this.camera.recordAsync();

        console.log(this.props);

        this.props.navigation.navigate('Timer', {
            email: this.props.route.params.email, 
            pwd: this.props.route.params.pwd, 
            isLoggedIn: this.props.route.params.isLoggedIn
        });

        this.setState({ recording: false, processing: true });
    }
    
    stopRecording() {
        this.camera.stopRecording();
        this.setState({ recording: false });
    }

    render() {
        let button = (
            <TouchableOpacity
            onPress={this.startRecording.bind(this)}
            style={styles.capture}
            >
            <Text style={{ fontSize: 14 }}> RECORD </Text>
            </TouchableOpacity>
        );
    
        if (this.state.recording) {
            button = (
            <TouchableOpacity
                onPress={this.stopRecording.bind(this)}
                style={styles.capture}
            >
                <Text style={{ fontSize: 14 }}> STOP </Text>
            </TouchableOpacity>
            );
        }
    
        if (this.state.processing) {
            button = (
            <View style={styles.capture}>
                <ActivityIndicator animating size={18} />
            </View>
            );
        }
    
        return (
            <View style={styles.container}>
            <RNCamera 
                style={styles.preview} 
                ref={ref => {
                    this.camera = ref;
                }}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            />
                <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>
                    {button}
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
  

export default function(props) {
    const navigation = useNavigation();

    return <Camera {...props} navigation={navigation}/>;
}
