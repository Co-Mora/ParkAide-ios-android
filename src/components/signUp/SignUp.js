import React, { Component } from 'react';
import {View, StyleSheet, Alert, Image } from 'react-native';
import { Button, FormLabel, FormInput, Text } from 'react-native-elements';
//import API Services
import qs from 'qs';
import SignUpServices from '../../services/register/signUp/SignUpServices';


export default class SignUp extends Component {
    constructor() {
        super()
    }
    state = {
        verifyID: null,
        mobile: ''
    }
    handleSubmitUser = () => {
        const res = SignUpServices.createUser('auth2/app/register', qs.stringify({
            mobile: this.state.mobile
        }));
        alert(res)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={require('../../../assets/icon1.png')}/>
                    <Text style={styles.textStyle}>Park Aide</Text>
                </View>
                <View style={styles.inputContainer}>
                    <FormLabel>Phone Number</FormLabel>
                    <FormInput 
                        placeholder="6011611778761"
                        onChangeText={(mobile) => this.setState({mobile})}
                    />
                </View>
                
                <View style={styles.btnContainer}>
                    <Button
                        title="Sign Up"
                        onPress={() => {this.handleSubmitUser()}}
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={styles.btnStyle}
                        containerStyle={{ marginTop: 20 }}
                    />
                </View>
            </View>
        )
    }
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textStyle: {
        color: '#000',
        fontWeight: "400"
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        marginLeft: 30,
        
    },
    inputForm: {
        marginLeft: 30,
        borderWidth: 1,
        borderColor: '#000'
    },
    imageStyle: {
        width: 100,
        height: 100,
       
    },
    btnStyle: {
        backgroundColor: "#e74c3c",
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        marginBottom: 30
    }
});

