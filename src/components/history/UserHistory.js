import React, {Component} from 'react';
import {View, Text, AsyncStorage, StyleSheet, ScrollView, FlatList} from 'react-native';
import historyServices from '../../services/history/historyServices'
import TableViewGrid from '../tableView/TableView';
export default class UserHistory extends Component {
    constructor() {
      super();
      this.state = {
        dataSource: [],
        token: null
      };
    }
    _keyExtractor = (item, index) => item.historyID.toString();

    handleTime() {
        var date;
        var day;
        var month;
        var year;
        var hours;
        var minutes;
        var seconds;
        var formattedTime;
        this.state.dataSource.forEach((el) => {
          date = new Date(el.createDate * 1000);
          day = date.getDay();
          month = date.getMonth();
          year = date.getFullYear();
          hours = date.getHours();
          minutes = "0" + date.getMinutes();
          seconds = "0" + date.getSeconds();
          formattedTime = year + '-' + month + '-' + day + '  ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
          el.createDate = formattedTime
        })
    }
    handleUserHistory = async () => {
        const res = await historyServices.fetchAllData(this.state.token, `history`)
        this.setState({dataSource: res.data})
        this.handleTime();
    }

    handleToken() {
        AsyncStorage.getItem("token").then((value) => {
            this.setState({token: JSON.parse(value)})
            this.handleUserHistory();
        });
    }
    componentDidMount() {
        this.handleToken();
    }
  
    render() {
      return (
        <View style={styles.cont}>
           <View style={styles.container}>
                <FlatList
                  data={this.state.dataSource}
                  keyExtractor={this._keyExtractor}
                  renderItem={({item}) => <View style={styles.viewStyle}><Text style={styles.carBoxContainer}>{item.title  + '\n' + item.createDate}</Text></View>}
                  />
              </View>
        </View>
       
      );
    }
  }


  const styles = StyleSheet.create({
    cont: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    container: {
      flex: 1,
    },
    carBoxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: "100%",
      padding: 20,
      marginBottom: 2,
      backgroundColor: "#ffff",
      borderBottomColor: "#f5f6fa",
      borderBottomWidth: 1,
    },
    viewStyle: {
      width: "100%",
  },
  });