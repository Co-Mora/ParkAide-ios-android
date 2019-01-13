import Carousel from 'react-native-snap-carousel';
import React, {Component} from 'react';
import {View, Text} from 'react-native'
export default class CarouselMy extends Component {

    constructor() {
        super();
    }
    
    state = {
        data: []
    }
   
    _renderItem ({item, index}) {
        return (
            <View>
                <Text>{ item.id }</Text>
            </View>
        );
    }

    componentDidMount() {
        alert(this.props.data)
    }


    render () {
        return (
            <View>
                {/* <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.data}
              renderItem={this._renderItem}
              sliderWidth={200}
              itemWidth={200}
            /> */}
            </View>

        );
    }
}