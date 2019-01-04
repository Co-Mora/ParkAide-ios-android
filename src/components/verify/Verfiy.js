import React, {Component} from "react";
import { View, StyleSheet, Alert } from "react-native";
import CodePin from 'react-native-pin-code';
import { Button} from 'react-native-elements';


export default class Verify extends Component {
    constructor() {
        super()
    }
    state = {
        
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                <CodePin
                  number={6} // You must pass number prop, it will be used to display 4 (here) inputs
                  checkPinCode={(code, callback) => callback(code === '123456')}
                  success={() => Alert.alert('Successfully')} // If user fill '2018', success is called
                  text="Pin Code" // My title
                  error="Error Occured" // If user fail (fill '2017' for instance)
                  autoFocusFirst={true} // disabling auto-focus
                />
              </View>
              <View style={styles.btnContainer}>
                <Button
                  title="Verify"
                  onPress={() => {
                   
                  }}
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

  },
  imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  btnContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  textStyle: {
      color: '#000',
      fontWeight: "400"
  },
  inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'baseline',
      marginLeft: 30,
      
  },
  inputForm: {
      marginLeft: 30,
      borderWidth: 1,
      borderColor: '#000'
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



export default Verify;