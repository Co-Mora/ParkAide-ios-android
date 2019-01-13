import React, {Component} from 'react';
import {Text, FlatList, ScrollView, StyleSheet, View} from 'react-native';


export default class TableViewGrid extends Component {
    constructor() {
      super();
  
    }
   
    render() {
      return (
          <View>
            <View>
                <Text>{this.props.data}</Text>
            </View>
        <View style={styles.container}>
                <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.data}
                renderItem={({item}) =>
                <View style={styles.flatview} key={item.createDat}>
                  <Text key={item.createDat} style={styles.name}>{item.name}</Text>
                  <Text key={item.createDat} style={styles.email}>{item.email}</Text>
                </View>
                }
                keyExtractor={item => item.createDate}

            />
            
        </View>      
          </View>
       
      );
    }
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 36,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 2,
    },
    name: {
      fontFamily: 'Verdana',
      fontSize: 18
    },
    email: {
      color: 'red'
    }
    
  });