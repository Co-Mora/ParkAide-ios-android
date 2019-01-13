import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import historyServices from '../../services/history/historyServices'
import TableViewGrid from '../tableView/TableView';
export default class UserHistory extends Component {
    constructor() {
      super();
      this.state = {
        dataSource: null,
        token: null
      };
    }

    handleUserHistory = async () => {
        const res = await historyServices.fetchAllData(this.state.token, `history`)
        this.setState({dataSource: JSON.stringify(res.data)})
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
        <View>
           <TableViewGrid data={this.state.dataSource}/> 
        </View>
       
      );
    }
  }

