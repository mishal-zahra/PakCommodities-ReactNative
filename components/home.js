import React, { Component } from 'react';
import { View, SafeAreaView, Text, FlatList, Button, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDotCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
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
            <SafeAreaView>
                <View>
                    {this.state.dataList.map(item => {
                        return (
                            <View style={{backgroundColor: '#383636', marginTop: 1, flexDirection: 'row',
                                            justifyContent: 'flex-end', 
                                            flexWrap: 'wrap',
                                            alignContent: 'space-around',
                                            alignItems: 'flex-start'}}>

                                <View style={{width: '20%', backgroundColor: '#656565', paddingTop: '1%', paddingBottom: '2%', paddingLeft: '3%'}}>
                                    <Text style={{color: '#a6a4a4', fontSize: 10}}>5:30PM</Text>
                                    <Text style={{color: '#ffffff', fontSize: 14}}>{item.location}</Text>
                                    <Text style={{color: '#a6a4a4', fontSize: 10}}>28-01-2021</Text>
                                </View>
                                <View style={{width: '60%', paddingLeft: '3%', paddingTop: '1%', paddingBottom: '2%'}}>
                                    <Text style={{color: '#ffffff', display: 'flex'}}>
                                        <Text style={{color: '#ffffff', fontSize: 14}}>{item.item}</Text>
                                    </Text> 
                                    <Text style={{color: '#ffffff', fontSize: 10}}>{item.date}</Text>
                                    <Text style={{color: '#ffffff', fontSize: 10}}>{item.description}</Text>
                                </View> 
                                <View style={{width: '18%', paddingTop: '3%', paddingBottom: '3%'}} >
                                    <Text style={{color: '#4fd925', fontSize: 12}}>{item.rate}</Text>
                                    <Text style={{color: '#4fd925', fontSize: 12}}>{item.percentage}%</Text>
                                </View>  
                                <View style={{width: '2%', height: '58px', backgroundColor: '#4fd925'}}></View>                         
                            </View>
                        );
                    })}
                </View>            
            </SafeAreaView>
            // TEST
            // <NavigationContainer>
            // <Tab.Navigator>
            //     <Tab.Screen name="Home" component={HomeScreen} />
            //     <Tab.Screen name="Settings" component={SettingsScreen} />
            // </Tab.Navigator>
            // </NavigationContainer>
        )
    }
}

export default Home;