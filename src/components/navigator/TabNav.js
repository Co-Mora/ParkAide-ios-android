import React, {Component} from 'react'
import Tabbar from 'react-native-tabbar-bottom'
import {View, StyleSheet, Text } from 'react-native';
import HomeScreen from '../homeScreen/HomeScreen'
import UserHHistory from '../history/UserHistory'

import Scanner from '../qrCodeScanner/ScanScreen'

export default class TavNav extends Component {
  constructor() {
    super()
    this.state = {
      page: "HomeScreen",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {
          // if you are using react-navigation just pass the navigation object in your components like this:
          // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
        }
        {this.state.page === "HomeScreen" && <HomeScreen/>}
        {this.state.page === "ZoneScreen" && <Text>Screen2</Text>}
        {this.state.page === "CameraScreen" && <Scanner />}
        {this.state.page === "HistoryScreen" && <UserHHistory />}
        {this.state.page === "ProfileScreen" && <Text>ProfileScreen</Text>}


        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "HomeScreen",
              icon: "car",
            },
            {
              page: "ZoneScreen",
              icon: "lock",
              // badgeNumber: 11,
            },
            {
              page: "CameraScreen",
              icon: "camera",
            },
            {
              page: "HistoryScreen",
              icon: "wallet",
            },
            {
              page: "ProfileScreen",
              icon: "person",
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});