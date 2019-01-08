import React, {Component} from 'react';
import {View, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Loading extends Component {

    state = {

      spinner: true

    }

    loadingPage =() => {

      setTimeout(() => {
          this.setState({ spinner: !this.props.spinner });
      }, 1000);

    }
    componentDidMount() {
      this.loadingPage();
    }

    render() {
      return (
        <View style={styles.container}>
          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
        </View>
       
      );
    }
    
  }

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
 
});
