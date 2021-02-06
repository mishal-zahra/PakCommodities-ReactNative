import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../styles/notifications.styles';

class Home extends Component {

    state = {
        dataList: []
    }

    componentDidMount = () => {
        var item = 'Short Notification ';
        var list = [];
        for(let i=0; i<18; i++) {
            list.push(item + (i+1));
        }

        this.setState({
            dataList: list
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {this.state.dataList.map(item => {
                        return (
                            <View style={styles.listItem}>
                                <Text>{item}</Text>                         
                            </View>
                        );
                    })}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home;