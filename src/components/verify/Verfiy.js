import React, {Component} from "react";
import { View, StyleSheet, Alert, AsyncStorage } from "react-native";
import CodePin from 'react-native-pin-code';
import { Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

//import webServices API
import qs from 'qs';
import VerifyServices from '../../services/register/verify/VerifyServices';
import LoginServices from '../../services/register/login/LoginServices'

import Loading from '../loading/Loading'

export default class Verify extends Component {
    constructor() {
        super()
    }
    state = {
        password: null,
        pinCode: null,
        spinner: false,
        data: []
    }
    componentDidMount() {
        AsyncStorage.getItem("UID123").then((value) => {
            this.setState({data: JSON.parse(value)});
        });
    }
    handleLoginUser = async () => {
        const mobile1 = JSON.parse(this.state.data[1])
        const pass = JSON.parse(this.state.password)
        const res = await LoginServices.loginUser('auth2/app/login', qs.stringify({
            mobile: mobile1,
            password: pass
        }));
        if(res.status === 200) {
            AsyncStorage.setItem('token', JSON.stringify(res.data['token']));
            this.setState({spinner:true});
            Actions.home();

        } 
    }
    handleSubmitPinCode = async () => {
        const uuid = JSON.parse(this.state.data[0])
        const mobile1 = JSON.parse(this.state.data[1])
        const res = await VerifyServices.verifyUser(`auth2/app/verify/${uuid}`, qs.stringify({
            mobile: mobile1,
            scode: this.state.data[2]
        }));
        if(res.status === 200) {
            const password = res.data['password']
             var jwt = {
                mobile: mobile1,
                password: password
            }
            AsyncStorage.setItem('jwt', JSON.stringify(jwt));
            this.setState({
                password: JSON.stringify(res.data['password']),
            })
            this.handleLoginUser();

        } 
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.spinner === true ?  <Loading spinner={this.state.spinner}/> : null}
                <View style={styles.imageContainer}>
                <CodePin
                  number={6} // You must pass number prop, it will be used to display 4 (here) inputs
                  checkPinCode={(code, callback) => callback(code === this.state.data[2])}
                  success={() => Alert.alert('Successfully')} // If user fill '2018', success is called
                  text="Pin Code"
                  error="Error Occured"
                  autoFocusFirst={true}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.btnContainer}>
                <Button
                  title="Verify"
                  onPress={this.handleSubmitPinCode}
                  titleStyle={{ fontWeight: "700" }}
                  buttonStyle={styles.btnStyle}
                  containerStyle={{ marginTop: 20 }}
                />
              </View>
            </View>
            
          );
    }
    
  }


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
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
    marginLeft: 30,
    
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



