import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

import Icon from 'react-native-vector-icons/EvilIcons'
import {OffCanvas3D} from 'react-native-off-canvas-menu'

import { Button } from 'react-native-elements';
import {Actions} from 'react-native-router-flux'
export default class SideMenu extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.touchContainer}>
                    <TouchableOpacity onPress={() => {
                        Actions.payMethod();
                    }}>
                        <Text style={styles.textStyle}>Top Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textStyle}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textStyle}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <Button
                        title="Back"
                        onPress={() => {Actions.replace('home')}}
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    btnContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    touchContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    textStyle: {
        fontWeight: "700",
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    btnStyle: {
        backgroundColor: "#3498db",
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 50,
        marginBottom: 30
    }

});
