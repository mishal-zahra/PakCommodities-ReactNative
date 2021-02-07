import React from 'react';
import { View } from 'react-native';

class Category extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View> Hello there! {this.props.category} here. </View>
        )
    }
}

export default Category;