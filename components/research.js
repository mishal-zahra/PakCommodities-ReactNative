import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/research.styles';

class Research extends Component {

    render() {
        return (
            // ***************************** For Subscription Packages *********************
            
            <View>
                <Text style={styles.textHead}>To get real time updates and details subscribe to our business plan</Text>
                <View style={styles.container}>
                    <View style={styles.planHeadingView}>
                        <Text style={styles.planHeading}>Business Plan (12 Months)</Text>
                    </View>
                    <View style={styles.flatListView}>
                        <FlatList
                            data={[
                                {key: 'Only 512 USD or 79,360 PKR'},
                                {key: 'Access to Real-Time Rates and details'},
                                {key: 'Access to minute by minute updates'},
                                {key: 'Access to Comments of Trading Experts, local traders, indenters, brokers'},
                                {key: 'You can call our Trading Experts from 4pm-8pm (pakistani time)'},
                                {key: 'Access Time for 12 months'},
                            ]}
                            renderItem={({item}) => 
                            <Text>
                                <FontAwesomeIcon style={styles.bullet} icon={faCircle} size={5} color={"black"} />
                                {item.key}
                            </Text>}
                        />
                    </View>
                    <View style={styles.planFooterView}>
                        <Text style={styles.planFooterText}>Only 326 USD or 50,000 PKR</Text>
                        <View style={{width: '30%'}} >
                            <TouchableOpacity style={styles.signUpButton}>
                                <Text style={{color: '#ffffff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                
                <View style={styles.container}>
                    <View style={styles.planHeadingView}>
                        <Text style={styles.planHeading}>Business Plan (6 Months)</Text>
                    </View>
                    <View style={styles.flatListView}>
                        <FlatList
                            data={[
                                {key: 'Only 326 USD or 50,530 PKR'},
                                {key: 'Access to Real-Time Rates and details'},
                                {key: 'Access to minute by minute updates'},
                                {key: 'Access to Comments of Trading Experts, local traders, indenters, brokers'},
                                {key: 'You can call our Trading Experts from 4pm-8pm (pakistani time)'},
                                {key: 'Access Time for 6 months'},
                            ]}
                            renderItem={({item}) => 
                            <Text>
                                <FontAwesomeIcon style={styles.bullet} icon={faCircle} size={5} color={"black"} />
                                {item.key}
                            </Text>}
                        />
                    </View>
                    <View style={styles.planFooterView}>
                        <Text style={styles.planFooterText}>Only 200 USD or 30,000 PKR</Text>
                        <View style={{width: '30%'}} >
                            <TouchableOpacity style={styles.signUpButton}>
                                <Text style={{color: '#ffffff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                
                <View style={styles.container}>
                    <View style={styles.planHeadingView}>
                        <Text style={styles.planHeading}>Business Plan (3 Months)</Text>
                    </View>
                    <View style={styles.flatListView}>
                        <FlatList
                            data={[
                                {key: 'Only 163 USD or 25,265 PKR'},
                                {key: 'Access to Real-Time Rates and details'},
                                {key: 'Access to minute by minute updates'},
                                {key: 'Access to Comments of Trading Experts, local traders, indenters, brokers'},
                                {key: 'You can call our Trading Experts from 4pm-8pm (pakistani time)'},
                                {key: 'Access Time for 3 months'},
                            ]}
                            renderItem={({item}) => 
                            <Text>
                                <FontAwesomeIcon style={styles.bullet} icon={faCircle} size={5} color={"black"} />
                                {item.key}
                            </Text>}
                        />
                    </View>
                    <View style={styles.planFooterView}>
                        <Text style={styles.planFooterText}>Only 110 USD or 16500 PKR</Text>
                        <View style={{width: '30%'}} >
                            <TouchableOpacity style={styles.signUpButton}>
                                <Text style={{color: '#ffffff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                
                <View style={styles.container}>
                    <View style={styles.planHeadingView}>
                        <Text style={styles.planHeading}>Business Plan (1 Month)</Text>
                    </View>
                    <View style={styles.flatListView}>
                        <FlatList
                            data={[
                                {key: 'Access to Real-Time Rates and details'},
                                {key: 'Access to minute by minute updates'},
                                {key: 'Access to Comments of Trading Experts, local traders, indenters, brokers'},
                                {key: 'You can call our Trading Experts from 4pm-8pm (pakistani time)'},
                                {key: 'Access Time for 1 month'},
                            ]}
                            renderItem={({item}) => 
                            <Text>
                                <FontAwesomeIcon style={styles.bullet} icon={faCircle} size={5} color={"black"} />
                                {item.key}
                            </Text>}
                        />
                    </View>
                    <View style={styles.planFooterView}>
                        <Text style={styles.planFooterText}>Only 38 USD or 5800 PKR</Text>
                        <View style={{width: '30%'}} >
                            <TouchableOpacity style={styles.signUpButton}>
                                <Text style={{color: '#ffffff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                
            </View>
        )
    }
}

export default Research;