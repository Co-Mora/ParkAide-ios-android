import React, {Component} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  title: {
      color: "#000"
  },
  text: {
      color: "#000"
  }
  
});

const slides = [
    {
      key: 'somethun',
      title: 'Park Aide',
      titleStyle: styles.title,
      text: 'ParkAide Convenience simplified.',
      textStyle: styles.text,
      image: require('../../../assets/undraw_wallet_aym5.png'),
      imageStyle: styles.image,
      backgroundColor: '#fff',
    },
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../../../assets/parkaide.png'),
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('../../../assets/icon1.png'),
      imageStyle: styles.image,
      backgroundColor: '#22bcb5',
    }
  ];

export default class Onboarding extends Component {

    handleRedirectPage = () => {
        Action.started()
    }

    _renderNextButton = () => {
        return (
        <View style={styles.buttonCircle}>
            <Ionicons
            name="md-arrow-round-forward"
            color="rgba(255, 255, 255, .9)"
            size={24}
            style={{ backgroundColor: 'transparent' }}
            />
        </View>
        );
    }
    _renderDoneButton = () => {
        return (
        <View style={styles.buttonCircle}>
            <TouchableOpacity onPress={() => { Actions.started()}}>
                <Ionicons
                name="md-checkmark"
                color="rgba(255, 255, 255, .9)"
                size={24}
                style={{ backgroundColor: 'transparent' }}
                />
                </TouchableOpacity>
        
        </View>
        );
    }
    render() {
        return (
        <AppIntroSlider
            slides={slides}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
        />
        );
    }
}