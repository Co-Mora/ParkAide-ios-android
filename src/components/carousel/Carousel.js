import Carousel from 'react-native-snap-carousel';
import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native'

import Loading from '../loading/Loading'

export default class CarouselMy extends Component {

    constructor(props) {
        super(props);
        this.spinner = true
    }
    
    state = {
        data: null,
        spinner: true,
        selected: null,
        showData: false
    }

    _keyExtractor = (item, index) => item.id.toString();
    
    _onPressItem = (id) => {
        this.setState((state) => {
          const selected = new Map(state.selected);
          selected.set(id, !selected.get(id)); // toggle
          return {selected};
        });
      };

    handleTime() {

        var date;
        var day;
        var month;
        var year;
        var hours;
        var minutes;
        var seconds;
        var formattedTime;
        this.state.data.forEach((el) => {
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
   
    handleData() {
        var dataa = JSON.parse(this.props.data);
        var parsed = JSON.stringify(dataa)
        var lastData = JSON.parse(parsed)
        // if(lastData[0] === undefined) {
        //     this.setState({showData: true});
        // }
        this.setState({data: lastData})
        this.handleTime()
    }

   
    componentDidMount() {
        setTimeout(() => {
           this.handleData()
        }, 200)

    }
    
    render () {
        return (
            <View style={styles.cont}>
                {this.state.showData === true ? <Text style={styles.carBoxContainer}>No Data Avaliable</Text> : null}
                <View style={styles.container}>
                    {this.state.spinner === true ?  <Loading spinner={this.state.spinner}/> : null}
                    <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) => <View style={styles.viewStyle}><Text style={styles.carBoxContainer}>{item.name  + '\n' + item.createDate}</Text></View>}
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