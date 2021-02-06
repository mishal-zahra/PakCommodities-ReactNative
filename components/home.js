import React, { Component } from 'react';
import { View, SafeAreaView, Text, FlatList, Button, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDotCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/home.styles';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

class Home extends Component {

    state = {
        dataList: []
    }
    componentDidMount = () => {
        var item = {
            item:'Chickpea',
            location:'Canada',
            description:'Description',
            date:'22-01-2020',
            rate:'10',
            percentage:'2',
        }
        var list = [];
        for(let i=0; i<15; i++) {
            list.push(item);
        }

        this.setState({
            dataList: list
        })
    }


// HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// Tab = createMaterialTopTabNavigator();

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.state.dataList.map(item => {
                    return (
                        <View style={styles.listItem}>
                            <View style={styles.leftView}>
                                <Text style={styles.smallGreyText}>5:30PM</Text>
                                <Text style={styles.mediumWhiteText}>{item.location}</Text>
                                <Text style={styles.smallGreyText}>28-01-2021</Text>
                            </View>
                            <View style={styles.middleView}>
                                <Text style={styles.itemText}>
                                    <Text style={styles.mediumWhiteText}>{item.item}</Text>
                                </Text> 
                                <Text style={styles.smallerWhiteText}>{item.date}</Text>
                                <Text style={styles.smallerWhiteText}>{item.description}</Text>
                            </View> 
                            <View style={styles.rightView} >
                                <Text style={styles.greenText}>{item.rate}</Text>
                                <Text style={styles.greenText}>{item.percentage}%</Text>
                            </View>  
                            <View style={styles.greenDiv}></View>                         
                        </View>
                    );
                })}
            </SafeAreaView>
        )
    }
}

export default Home;