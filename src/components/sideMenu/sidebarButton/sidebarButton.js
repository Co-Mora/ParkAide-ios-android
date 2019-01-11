import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux"
const sidebarButton = () => {
    return (
      <TouchableOpacity
        onPress={() => { Actions.drawer({key: "drawer", open: true}) }} underlayColor="black"
      >
          <Image
          style={styles.menuIconStyle}
          source={
            require('../../../../assets/menu.png')}
          />
       </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    menuIconStyle: {
        marginLeft: 10,
        width: 25,
        height: 25
    }
})

export default sidebarButton