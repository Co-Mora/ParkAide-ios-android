import React, {Component} from 'react'
import Tabbar from 'react-native-tabbar-bottom'
import {View, StyleSheet, Text } from 'react-native';
import HomeScreen from '../homeScreen/HomeScreen'

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
        {this.state.page === "HomeScreen" && <HomeScreen />}
        {this.state.page === "NotificationScreen" && <Text>Screen2</Text>}
        {this.state.page === "ProfileScreen" && <Text>Screen3</Text>}
        {this.state.page === "ChatScreen" && <Text>Screen4</Text>}
        {this.state.page === "SearchScreen" && <Text>Screen5</Text>}

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
              page: "NotificationScreen",
              icon: "lock",
              // badgeNumber: 11,
            },
            {
              page: "ProfileScreen",
              icon: "person",
            },
            {
              page: "ChatScreen",
              icon: "chatbubbles",
              badgeNumber: 7,
            },
            {
              page: "SearchScreen",
              icon: "search",
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