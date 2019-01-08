import React, { Component } from 'react';
import {View, StyleSheet, Alert, Image } from 'react-native';

//import API Services
import qs from 'qs';
import LoginServices from '../../services/register/login/LoginServices';

export default class Login extends Component {
    constructor() {
        super()
    }
    state = {
        token: null,
        password: null
    };
    handleSubmitUser = async () => {
        const res = await LoginServices.loginUser('auth2/app/login', qs.stringify({
            mobile: this.props.mobile,
            password: this.props.password
        }))
        
    };
    render() {
        return (
            <View style={styles.container}>
                {this.state.showVerify == true ? <Verify mobile={this.state.mobile} pinCode={this.state.pinCode} verifyID={this.state.verifyID}/> : null}
            </View>
        )
    }
};
