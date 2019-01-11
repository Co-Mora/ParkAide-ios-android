import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default class CreditPay extends Component {

    _onChange = (form) => {
        console.log(form);
    }


    render() {
        return (
            <View style={styles.container}>
                <CreditCardInput onChange={this._onChange} />
                {/* <LiteCreditCardInput onChange={this._onChange} /> */}
            </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
});
