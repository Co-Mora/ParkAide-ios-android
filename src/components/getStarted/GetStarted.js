import React from 'react';

import {View, Image, StyleSheet, Alert, Text } from 'react-native';

import { Button } from 'react-native-elements';
import Loading from '../loading/Loading';



const GetStarted = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Loading spinner={props.loading === true ? true : false}/>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={require('../../../assets/icon1.png')}/>
                <Text style={styles.textStyle}>Park Aide</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button
                    title="GET STARTED"
                    onPress={() => {
                        Alert.alert('Coming Soon.....')
                    }}
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={styles.btnStyle}
                    containerStyle={{ marginTop: 20 }}
                />
            </View>
        </View>
       
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textStyle: {
        color: '#000',
        fontWeight: "400"
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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

export default GetStarted;