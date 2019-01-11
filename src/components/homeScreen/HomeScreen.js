import React from 'react';
import {StyleSheet, View, Picker, Text } from 'react-native';
import {AsyncStorage} from 'react-native'

//Import CarPark Services
import CarParkServices from '../../services/carParkServices/carPark/carParkServices'
import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            selectedCar: undefined,
            token: null,
            data: [],
        };
    }

    handleCarParkData = async () => {
        const res = await CarParkServices.fetchAllData(this.state.token, `carpark`)
        this.setState({data: res.data})
    }
    handleToken() {
        AsyncStorage.getItem("token").then((value) => {
            this.setState({token: JSON.parse(value)})
            this.handleCarParkData();
        });
    }
    componentDidMount() {
        this.handleToken();
       
    }
    render() {
        return (
            <View style={styles.container}>
               
                <View />
                <Picker
                        selectedValue={this.state.selectedCar}
                        onValueChange={(modeValue, modeIndex) => this.setState({selectedCar: modeValue})}>
                        <Picker.Item label={"Select Car Park"}/>
                        {this.state.data.map((item, key)=>(
                            <Picker.Item label={item.name} value={item.id} key={key} />)
                        )}
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    PickerStyleClass: {
        padding: 0,
        marginTop: 0
    }
});
