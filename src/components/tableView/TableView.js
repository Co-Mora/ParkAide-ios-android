import React, {Component} from 'react';
import {Text, FlatList, ScrollView, StyleSheet, View} from 'react-native';


export default class TableViewGrid extends Component {
    constructor() {
      super();
  
    }

    state = {
      dataSource: null
    }

    componentDidMount() {
      var response = JSON.stringify(this.props.data)
      alert(this.props.data)
      
    }
   
    render() {
      return (
          <View>
            <View>
                <Text>{this.props.data[0]}</Text>
            </View>
        <View style={styles.container}>
               <ScrollView>
                  {this.props.data.map((item, key)=>(
                                <Text key={key}>{item.title}</Text>)
                            )}
                 
               </ScrollView>
          
            
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