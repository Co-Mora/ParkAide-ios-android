import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Router from '../../Router';
export default class Registration extends Component {
    constructor() {
        super()
    }
    state = {
        token: null
    }
    componentDidMount() {
       
        AsyncStorage.getItem("token").then((value) => {
            this.setState({token: JSON.parse(value)});
            if(this.state.token) {
                Actions.home();
            }

        });
      
    }
    render() {
    return (
        <Router />
    );
  }
}
