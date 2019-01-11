import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import {Actions} from 'react-native-router-flux'

const PaymentMethod = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.carBoxContainer} onPress={() => {Actions.credit({key: "credit"})}}>
                <Image
                    style={styles.menuIconStyle}
                    source={
                        require('../../../assets/visa.png')}
                        
                />
               <Text>Visa / Master Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.carBoxContainer}>
                <Image
                    style={styles.menuIconStyle}
                    source={
                    require('../../../assets/boost.png')}
                />
                <Text>Boost</Text>
            </TouchableOpacity>
        </View>
       
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    carBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        padding: 20,
        backgroundColor: "#ffff",
        borderBottomColor: "#f5f6fa",
        borderBottomWidth: 1,
    },
    touchableBtn: {
        width: "100%",
    },
    menuIconStyle: {
        width: 25,
        height: 25,
        marginRight: 10,
    }
    
});

export default PaymentMethod;