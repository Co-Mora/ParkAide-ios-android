import React, {Component} from 'react';
import {View, StyleSheet, Alert, Text } from 'react-native';
import SignUpServices from '../../services/register/signUp/SignUpServices';
import GetStarted from '../getStarted/GetStarted'


export default class Registration extends Component {
    constructor() {
        super()
    }
    state = {

    }
    componentDidMount() {
        SignUpServices.fetchAllData('carpark')
        .then((response) => response.json())
        .then((responseJson) => {
          alert(responseJson);
        })
        .catch((error) => {
            alert(error);
        });
    }
    render() {
    return (
        <GetStarted />

    );
  }
}
