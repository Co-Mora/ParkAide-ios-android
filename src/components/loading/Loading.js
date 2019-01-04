import React from 'react';
import {View, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Loading = (props) => {
    
    return (
      <View style={styles.container}>
        <Spinner
          visible={props.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
     
    );
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

export default Loading;