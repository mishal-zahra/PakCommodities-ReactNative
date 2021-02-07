import React, { Component } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
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

    clearNotifications = () => {
        console.log("Clearing all notifications")
        this.setState({
            dataList: []
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.clearNotifications} onPress={this.clearNotifications}> 
                    <Text style={{color: 'red'}}> Clear all Notifications
                        <FontAwesomeIcon style={{marginLeft: 7}} icon={faTrash} size={15} color={"red"} />
                    </Text>
                </TouchableOpacity>
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