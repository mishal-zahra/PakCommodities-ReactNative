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

            <View></View>

            // ************************** For Login Form ***********************

            // <View style={{backgroundColor: '#656565', height:500}}>
            //     <TouchableOpacity>
            //         <Text style={{color:"white", fontSize:18, fontWeight: 'bold', margin: 35, marginBottom: 20}}>Please enter your details to Login</Text>
            //     </TouchableOpacity>
            //     <View>
            //         <TextInput 
            //         style={{
            //             width:"80%",
            //             backgroundColor:"#dadbd9",
            //             borderRadius:25,
            //             height:50,
            //             marginBottom:20,
            //             justifyContent:"center",
            //             padding:20,
            //             marginTop: 20,
            //             marginLeft: 35
            //         }} 
            //             placeholder="Email..." 
            //             placeholderTextColor="#10ac84"
            //             // onChangeText={text => this.setState({email:text})}
            //             />
            //             <TextInput 
            //     style={{
            //         width:"80%",
            //         backgroundColor:"#dadbd9",
            //         borderRadius:25,
            //         height:50,
            //         marginBottom:20,
            //         justifyContent:"center",
            //         padding:20,
            //         marginLeft: 35
            //     }} 
            //         placeholder="Password..." 
            //         placeholderTextColor="#10ac84"
            //         // onChangeText={text => this.setState({email:text})}
            //         />
            //     </View>
            //     <TouchableOpacity>
            //         <Text style={{color:"white", fontSize:14, marginLeft: '30%'}}>Forgot Password?</Text>
            //     </TouchableOpacity>

            //     <TouchableOpacity style={{width:"80%",
            //         backgroundColor:"#10ac84",
            //         borderRadius:25,
            //         height:50,
            //         alignItems:"center",
            //         justifyContent:"center",
            //         marginTop:15,
            //         marginBottom:10,
            //         marginLeft: 35}}>
            //         <Text style={{color: 'white'}}>LOGIN</Text>
            //     </TouchableOpacity>

            //     <TouchableOpacity>
            //         <Text style={{color:"white", fontSize:14, fontWeight: 'bold', marginLeft: '43%'}}>SignUp</Text>
            //     </TouchableOpacity>
            // </View>

            // ***************************** For Subscription Packages *********************
            // <View>
            //     <Text style={{fontSize: 16, fontWeight: 'bold', margin:10, marginLeft: 25}}>To get real time updates and details subscribe to our business plan</Text>
            //     <View style={{margin: 20, justifyContent: 'center', borderColor: '#c1c4c0', borderWidth: 1, borderRadius: 12}}>
            //         <View style={{borderColor: '#10ac84', borderBottomWidth: 3, margin: 15, paddingLeft: 15, paddingBottom: 15}}>
            //             <Text style={{fontSize: 16, fontWeight: 'bold'}}>Business Plan (12 Months)</Text>
            //         </View>
            //         <View style={{paddingLeft: 15, paddingBottom: 15}}>
            //             <FlatList
            //                 data={[
            //                     {key: 'Only 512 USD or 79,360 PKR'},
            //                     {key: 'Access to Real-Time Rates and details'},
            //                     {key: 'Access to minute by minute updates'},
            //                     {key: 'Access to Comments of Trading Experts, local traders, indenters, brokers'},
            //                     {key: 'You can call our Trading Experts from 4pm-8pm (pakistani time)'},
            //                     {key: 'Access Time for 12 months'},
            //                 ]}
            //                 renderItem={({item}) => 
            //                 <Text>
            //                     <FontAwesomeIcon style={{paddingTop: 5, paddingBottom: 3, paddingLeft: 5, paddingRight: 15}} icon={faCircle} size={5} color={"black"} />
            //                     {item.key}
            //                 </Text>}
            //             />
            //         </View>
            //         <View style={{backgroundColor: '#dadbd9', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderColor: '#c1c4c0', borderTopWidth: 1, paddingLeft: 15, paddingBottom: 15, flexDirection: 'row'}}>
            //             <Text style={{width: '60%', fontSize: 12, paddingTop: 17, paddingBottom:10}}>Only 326 USD or 50,000 PKR</Text>
            //             <View style={{width: '30%'}} >
            //                 <TouchableOpacity style={{ height: 30, width: 100, marginTop: 10, paddingTop: 5, paddingLeft: 25, backgroundColor: '#10ac84', borderRadius: 5 }}>
            //                     <Text style={{color: '#ffffff'}}>Sign Up</Text>
            //                 </TouchableOpacity>
            //             </View>
                        
            //         </View>
            //     </View>
                
            //     <View style={{margin: 20, marginTop: 10, justifyContent: 'center', borderColor: '#c1c4c0', borderWidth: 1, borderRadius: 12}}>
            //         <View style={{borderColor: '#10ac84', borderBottomWidth: 3, margin: 15, paddingLeft: 15, paddingBottom: 15}}>
            //             <Text style={{fontSize: 16, fontWeight: 'bold'}}>Business Plan (6 Months)</Text>
            //         </View>
            //         <View style={{paddingLeft: 15, paddingBottom: 15}}>
            //             <FlatList
            //                 data={[
            //                     {key: 'Only 326 USD or 50,530 PKR'},
            //                     {key: 'Access to Real-Time Rates and details'},
            //                     {key: 'Access to minute by minute updates'},
            //                     {key: 'Access to Comments of Trading Experts, local traders, indenters, brokers'},
            //                     {key: 'You can call our Trading Experts from 4pm-8pm (pakistani time)'},
            //                     {key: 'Access Time for 6 months'},
            //                 ]}
            //                 renderItem={({item}) => 
            //                 <Text>
            //                     <FontAwesomeIcon style={{paddingTop: 5, paddingBottom: 3, paddingLeft: 5, paddingRight: 15}} icon={faCircle} size={5} color={"black"} />
            //                     {item.key}
            //                 </Text>}
            //             />
            //         </View>
            //         <View style={{backgroundColor: '#dadbd9', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderColor: '#c1c4c0', borderTopWidth: 1, paddingLeft: 15, paddingBottom: 15, flexDirection: 'row'}}>
            //             <Text style={{width: '60%', fontSize: 12, paddingTop: 17, paddingBottom:10}}>Only 200 USD or 30,000 PKR</Text>
            //             <View style={{width: '30%'}} >
            //                 <TouchableOpacity style={{ height: 30, width: 100, marginTop: 10, paddingTop: 5, paddingLeft: 25, backgroundColor: '#10ac84', borderRadius: 5 }}>
            //                     <Text style={{color: '#ffffff'}}>Sign Up</Text>
            //                 </TouchableOpacity>
            //             </View>
                        
            //         </View>
            //     </View>
                
            //     <View style={{margin: 20, marginTop: 10, justifyContent: 'center', borderColor: '#c1c4c0', borderWidth: 1, borderRadius: 12}}>
            //         <View style={{borderColor: '#10ac84', borderBottomWidth: 3, margin: 15, paddingLeft: 15, paddingBottom: 15}}>
            //             <Text style={{fontSize: 16, fontWeight: 'bold'}}>Business Plan (3 Months)</Text>
            //         </View>
            //         <View style={{paddingLeft: 15, paddingBottom: 15}}>
            //             <FlatList
            //                 data={[
            //                     {key: 'Only 163 USD or 25,265 PKR'},
            //                     {key: 'Access to Real-Time Rates and details'},
            //                     {key: 'Access to minute by minute updates'},
            //                     {key: 'Access to Comments of Trading Experts, local traders, indenters, brokers'},
            //                     {key: 'You can call our Trading Experts from 4pm-8pm (pakistani time)'},
            //                     {key: 'Access Time for 3 months'},
            //                 ]}
            //                 renderItem={({item}) => 
            //                 <Text>
            //                     <FontAwesomeIcon style={{paddingTop: 5, paddingBottom: 3, paddingLeft: 5, paddingRight: 15}} icon={faCircle} size={5} color={"black"} />
            //                     {item.key}
            //                 </Text>}
            //             />
            //         </View>
            //         <View style={{backgroundColor: '#dadbd9', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderColor: '#c1c4c0', borderTopWidth: 1, paddingLeft: 15, paddingBottom: 15, flexDirection: 'row'}}>
            //             <Text style={{width: '60%', fontSize: 12, paddingTop: 17, paddingBottom:10}}>Only 110 USD or 16500 PKR</Text>
            //             <View style={{width: '30%'}} >
            //                 <TouchableOpacity style={{ height: 30, width: 100, marginTop: 10, paddingTop: 5, paddingLeft: 25, backgroundColor: '#10ac84', borderRadius: 5 }}>
            //                     <Text style={{color: '#ffffff'}}>Sign Up</Text>
            //                 </TouchableOpacity>
            //             </View>
                        
            //         </View>
            //     </View>
                
            //     <View style={{margin: 20, marginTop: 10, justifyContent: 'center', borderColor: '#c1c4c0', borderWidth: 1, borderRadius: 12}}>
            //         <View style={{borderColor: '#10ac84', borderBottomWidth: 3, margin: 15, paddingLeft: 15, paddingBottom: 15}}>
            //             <Text style={{fontSize: 16, fontWeight: 'bold'}}>Business Plan (1 Month)</Text>
            //         </View>
            //         <View style={{paddingLeft: 15, paddingBottom: 15}}>
            //             <FlatList
            //                 data={[
            //                     {key: 'Access to Real-Time Rates and details'},
            //                     {key: 'Access to minute by minute updates'},
            //                     {key: 'Access to Comments of Trading Experts, local traders, indenters, brokers'},
            //                     {key: 'You can call our Trading Experts from 4pm-8pm (pakistani time)'},
            //                     {key: 'Access Time for 1 month'},
            //                 ]}
            //                 renderItem={({item}) => 
            //                 <Text>
            //                     <FontAwesomeIcon style={{paddingTop: 5, paddingBottom: 3, paddingLeft: 5, paddingRight: 15}} icon={faCircle} size={5} color={"black"} />
            //                     {item.key}
            //                 </Text>}
            //             />
            //         </View>
            //         <View style={{backgroundColor: '#dadbd9', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderColor: '#c1c4c0', borderTopWidth: 1, paddingLeft: 15, paddingBottom: 15, flexDirection: 'row'}}>
            //             <Text style={{width: '60%', fontSize: 12, paddingTop: 17, paddingBottom:10}}>Only 38 USD or 5800 PKR</Text>
            //             <View style={{width: '30%'}} >
            //                 <TouchableOpacity style={{ height: 30, width: 100, marginTop: 10, paddingTop: 5, paddingLeft: 25, backgroundColor: '#10ac84', borderRadius: 5 }}>
            //                     <Text style={{color: '#ffffff'}}>Sign Up</Text>
            //                 </TouchableOpacity>
            //             </View>
                        
            //         </View>
            //     </View>
                
            // </View>


            // **************************** For comodities list *********************************//
            // <View>
            //     {this.state.dataList.map(item => {
            //         return (
            //             <View style={{backgroundColor: '#383636', marginTop: 1, flexDirection: 'row',
            //                             justifyContent: 'flex-end', 
            //                             flexWrap: 'wrap',
            //                             alignContent: 'space-around',
            //                             alignItems: 'flex-start'}}>

            //                 <View style={{width: '20%', backgroundColor: '#656565', paddingTop: '1%', paddingBottom: '2%', paddingLeft: '3%'}}>
            //                     <Text style={{color: '#a6a4a4', fontSize: 10}}>5:30PM</Text>
            //                     <Text style={{color: '#ffffff', fontSize: 14}}>{item.location}</Text>
            //                     <Text style={{color: '#a6a4a4', fontSize: 10}}>28-01-2021</Text>
            //                 </View>
            //                 <View style={{width: '60%', paddingLeft: '3%', paddingTop: '1%', paddingBottom: '2%'}}>
            //                     <Text style={{color: '#ffffff', display: 'flex'}}>
            //                         <Text style={{color: '#ffffff', fontSize: 14}}>{item.item}</Text>
            //                     </Text> 
            //                     <Text style={{color: '#ffffff', fontSize: 10}}>{item.date}</Text>
            //                     <Text style={{color: '#ffffff', fontSize: 10}}>{item.description}</Text>
            //                 </View> 
            //                 <View style={{width: '18%', paddingTop: '3%', paddingBottom: '3%'}} >
            //                     <Text style={{color: '#4fd925', fontSize: 12}}>{item.rate}</Text>
            //                     <Text style={{color: '#4fd925', fontSize: 12}}>{item.percentage}%</Text>
            //                 </View>  
            //                 <View style={{width: '2%', height: '58px', backgroundColor: '#4fd925'}}></View>                         
            //             </View>
            //         );
            //     })}
            // </View>
            

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