import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View, Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {AsyncStorage} from 'react-native'

//Import CarPark Services
import CarParkServices from '../../services/carParkServices/carPark/carParkServices'

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
    componentDidMount() {
        AsyncStorage.getItem("token").then((value) => {
            this.setState({token: JSON.parse(value)})
            this.handleCarParkData();
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ paddingVertical: 5 }} />
                <Text>Select A Car Park</Text>
                <Picker style={styles.PickerStyleClass}
                        selectedValue={this.state.selectedCar}
                        onValueChange={(modeValue, modeIndex) => this.setState({selectedCar: modeValue})}>
                        {this.state.data.map((item, key)=>(
                            <Picker.Item label={item.name} value={item.name} key={key} />)
                        )}
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    PickerStyleClass: {
        padding: 0,
        marginTop: 0
    }
});
