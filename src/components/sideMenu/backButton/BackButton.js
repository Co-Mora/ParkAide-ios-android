import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux"
const BackButton = () => {
    return (
      <TouchableOpacity
        onPress={() => { Actions.home() }} underlayColor="black"
      >
          <Image
          style={styles.menuIconStyle}
          source={
            require('../../../../assets/arrow-back.png')}
          />
       </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    menuIconStyle: {
        marginLeft: 10,
        width: 30,
        height: 30
    }
})

export default BackButton