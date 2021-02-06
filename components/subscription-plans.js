import React, { Component } from 'react';
import { View, Text} from 'react-native';

class SubscriptionPlans extends Component {

    render() {
        return (
            // ***************************** For Subscription Packages *********************
            
            <View>
                <Text style={{fontSize: 16, fontWeight: 'bold', margin:10, marginLeft: 25}}>To get real time updates and details subscribe to our business plan</Text>
                <View style={{margin: 20, justifyContent: 'center', borderColor: '#c1c4c0', borderWidth: 1, borderRadius: 12}}>
                    <View style={{borderColor: '#10ac84', borderBottomWidth: 3, margin: 15, paddingLeft: 15, paddingBottom: 15}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Business Plan (12 Months)</Text>
                    </View>
                    <View style={{paddingLeft: 15, paddingBottom: 15}}>
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
                                <FontAwesomeIcon style={{paddingTop: 5, paddingBottom: 3, paddingLeft: 5, paddingRight: 15}} icon={faCircle} size={5} color={"black"} />
                                {item.key}
                            </Text>}
                        />
                    </View>
                    <View style={{backgroundColor: '#dadbd9', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderColor: '#c1c4c0', borderTopWidth: 1, paddingLeft: 15, paddingBottom: 15, flexDirection: 'row'}}>
                        <Text style={{width: '60%', fontSize: 12, paddingTop: 17, paddingBottom:10}}>Only 326 USD or 50,000 PKR</Text>
                        <View style={{width: '30%'}} >
                            <TouchableOpacity style={{ height: 30, width: 100, marginTop: 10, paddingTop: 5, paddingLeft: 25, backgroundColor: '#10ac84', borderRadius: 5 }}>
                                <Text style={{color: '#ffffff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                
                <View style={{margin: 20, marginTop: 10, justifyContent: 'center', borderColor: '#c1c4c0', borderWidth: 1, borderRadius: 12}}>
                    <View style={{borderColor: '#10ac84', borderBottomWidth: 3, margin: 15, paddingLeft: 15, paddingBottom: 15}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Business Plan (6 Months)</Text>
                    </View>
                    <View style={{paddingLeft: 15, paddingBottom: 15}}>
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
                                <FontAwesomeIcon style={{paddingTop: 5, paddingBottom: 3, paddingLeft: 5, paddingRight: 15}} icon={faCircle} size={5} color={"black"} />
                                {item.key}
                            </Text>}
                        />
                    </View>
                    <View style={{backgroundColor: '#dadbd9', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderColor: '#c1c4c0', borderTopWidth: 1, paddingLeft: 15, paddingBottom: 15, flexDirection: 'row'}}>
                        <Text style={{width: '60%', fontSize: 12, paddingTop: 17, paddingBottom:10}}>Only 200 USD or 30,000 PKR</Text>
                        <View style={{width: '30%'}} >
                            <TouchableOpacity style={{ height: 30, width: 100, marginTop: 10, paddingTop: 5, paddingLeft: 25, backgroundColor: '#10ac84', borderRadius: 5 }}>
                                <Text style={{color: '#ffffff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                
                <View style={{margin: 20, marginTop: 10, justifyContent: 'center', borderColor: '#c1c4c0', borderWidth: 1, borderRadius: 12}}>
                    <View style={{borderColor: '#10ac84', borderBottomWidth: 3, margin: 15, paddingLeft: 15, paddingBottom: 15}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Business Plan (3 Months)</Text>
                    </View>
                    <View style={{paddingLeft: 15, paddingBottom: 15}}>
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
                                <FontAwesomeIcon style={{paddingTop: 5, paddingBottom: 3, paddingLeft: 5, paddingRight: 15}} icon={faCircle} size={5} color={"black"} />
                                {item.key}
                            </Text>}
                        />
                    </View>
                    <View style={{backgroundColor: '#dadbd9', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderColor: '#c1c4c0', borderTopWidth: 1, paddingLeft: 15, paddingBottom: 15, flexDirection: 'row'}}>
                        <Text style={{width: '60%', fontSize: 12, paddingTop: 17, paddingBottom:10}}>Only 110 USD or 16500 PKR</Text>
                        <View style={{width: '30%'}} >
                            <TouchableOpacity style={{ height: 30, width: 100, marginTop: 10, paddingTop: 5, paddingLeft: 25, backgroundColor: '#10ac84', borderRadius: 5 }}>
                                <Text style={{color: '#ffffff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                
                <View style={{margin: 20, marginTop: 10, justifyContent: 'center', borderColor: '#c1c4c0', borderWidth: 1, borderRadius: 12}}>
                    <View style={{borderColor: '#10ac84', borderBottomWidth: 3, margin: 15, paddingLeft: 15, paddingBottom: 15}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Business Plan (1 Month)</Text>
                    </View>
                    <View style={{paddingLeft: 15, paddingBottom: 15}}>
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
                                <FontAwesomeIcon style={{paddingTop: 5, paddingBottom: 3, paddingLeft: 5, paddingRight: 15}} icon={faCircle} size={5} color={"black"} />
                                {item.key}
                            </Text>}
                        />
                    </View>
                    <View style={{backgroundColor: '#dadbd9', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderColor: '#c1c4c0', borderTopWidth: 1, paddingLeft: 15, paddingBottom: 15, flexDirection: 'row'}}>
                        <Text style={{width: '60%', fontSize: 12, paddingTop: 17, paddingBottom:10}}>Only 38 USD or 5800 PKR</Text>
                        <View style={{width: '30%'}} >
                            <TouchableOpacity style={{ height: 30, width: 100, marginTop: 10, paddingTop: 5, paddingLeft: 25, backgroundColor: '#10ac84', borderRadius: 5 }}>
                                <Text style={{color: '#ffffff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                
            </View>
        )
    }
}

export default SubscriptionPlans;