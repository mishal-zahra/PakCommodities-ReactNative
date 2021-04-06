import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/subscription-plan.style';
import { getAllPlans } from '../services/app.service';

class SubscriptionPlans extends Component {

    state = {
        allPlans: [],
    }

    componentDidMount = async () => {
        try {
            const response = await getAllPlans();
            const allPlansList = await response.json();
            this.setState({
                allPlans: allPlansList
            })
            console.log("response from getallPlans :: ", allPlansList)  
        } catch(err) {
            console.log("Error fetching data from getallPlans :: ", err);
        }
    }

    onSubscribe = async (plan) => {
        console.log("Hello, I wanna subscribe to this plan : ", plan)
    }

    render() {
        return (
            // ***************************** For Subscription Packages *********************
            
            <View>
                <Text style={styles.textHead}>To get real time updates and details subscribe to our business plan</Text>
                {this.state.allPlans.map((item) =>
                    <View style={styles.container}>
                        <View style={styles.planHeadingView}>
                            <Text style={styles.planHeading}>{item.planName} ({item.planDuration} {item.planDuration > 1 ? 'Months' : 'Month' })</Text>
                        </View>
                        <View style={styles.flatListView}>
                            {item.planDescription.split("↵").map((i,key) => {
                                return <Text key={key}>
                                        {i}
                                    </Text>
                            })}
                        </View>
                        <View style={styles.planFooterView}>
                            <Text style={styles.planFooterText}></Text>
                            <View style={{width: '30%'}} >
                                <TouchableOpacity style={styles.signUpButton} onPress={()=>this.onSubscribe(item._id)}>
                                    <Text style={{color: '#ffffff'}}>Subscribe</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>
                )}
            </View>
        )
    }
}

export default SubscriptionPlans;