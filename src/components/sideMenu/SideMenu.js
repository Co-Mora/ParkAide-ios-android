import React, {Component} from 'react';
import {StyleSheet, Image} from "react-native";
import {
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon
  } from "native-base";

import { Button } from 'react-native-elements';
const routes = [
    "Home",
    "payMethod",
    "My Token",
    "My Special",
    "My Vechicle",
    "My Booking",
    "My Season Pass",
    "Terms and Condition",
    "About"
];

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <Container>
                <Content>
                <Image
                    source={{
                    uri:
                        "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
                    }}
                    style={{
                    height: 120,
                    width: "100%",
                    alignSelf: "stretch",
                    position: "absolute"
                    }}
                />
                <List
                    dataArray={routes}
                    contentContainerStyle={{ marginTop: 120 }}
                    renderRow={data => {
                    return (
                        <ListItem
                        button
                        onPress={() => this.props.navigation.navigate(data)}
                        >
                        <Text>{data}</Text>
                        </ListItem>
                    );
                    }}
                />
                </Content>
            </Container>
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
