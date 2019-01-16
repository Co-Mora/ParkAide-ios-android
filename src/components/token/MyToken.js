import React from 'react';
import {StyleSheet, View, Picker, Text } from 'react-native';
import {AsyncStorage} from 'react-native'

//Import CarPark Services
import CarParkServices from '../../services/carParkServices/carPark/carParkServices'
import { Actions } from 'react-native-router-flux';
import {Button} from 'react-native-elements'
export default class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            data: [],
            dataSource: null
        };
    }

    componentDidMount() {
        this.handleToken();
       
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Picker
                            selectedValue={this.state.selectedCity}
                            onValueChange={(modeValue, modeIndex) => this.setState({selectedCity: modeValue})}>
                            <Picker.Item label={"Select City"}/>
                            {this.state.data.map((item, key)=>(
                                <Picker.Item label={item.name} value={item.id} key={key} />)
                            )}
                    </Picker>
                </View>   
                <View style={styles.btnContainer}>
                    <Button
                            title="Find"
                            onPress={() => {
                                this.handleCarParkData();
                                setTimeout(() => {
                                    Actions.car({data: this.state.dataSource});

                                }, 200)
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
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    PickerStyleClass: {
        padding: 0,
        marginTop: 0
    },
    btnContainer: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center'
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
