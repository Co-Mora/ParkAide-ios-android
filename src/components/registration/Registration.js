import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Router from '../../Router';
import qs from 'qs'
import LoginServices from '../../services/register/login/LoginServices'

export default class Registration extends Component {
    constructor() {
        super()
    }
    state = {
        mobile: null,
        pass: null
    }

    async hanndleLoginAuth() {

        const res = await LoginServices.loginUser('auth2/app/login', qs.stringify({
            mobile: this.state.mobile,
            password: this.state.pass
        }));
        if(res.status === 200) {
            AsyncStorage.setItem('token', JSON.stringify(res.data['token']));
            Actions.reset('home');
        } 
    }
    componentDidMount() {
      
        AsyncStorage.getItem("jwt").then((value) => {
            if(!value) {
                Actions.reset('slidePage')
            }
            const res = JSON.parse(value)
            this.setState({mobile: res.mobile, pass: res.password});
            this.hanndleLoginAuth();

        });
      
    }
    render() {
    return (
        <Router />
    );
  }
}
