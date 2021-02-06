import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/termsAndConditions.styles';

class TermsAndConditions extends Component {
SafeAreaView
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.heading}>Terms And Conditions</Text>
                <FlatList
                    data={[
                        {key: 'The service is provided “as is ” without warranty of any kind.'},
                        {key: 'We may change our terms and conditions at any time. please re visit terms and condition page time to time to stay abreast of any changes that we may introduce.'},
                        {key: 'Your continued use of pakcommodities.com means that you accept any new or modified terms and conditions that we come up with.'},
                        {key: 'If you are a first time subscriber once you have registered to our website your payment can not be refunded after 3 days.'},
                        {key: 'All the information at the time of registering should be accurate.'},
                        {key: 'pakcommodities.com have rights to cancel any registration.'},
                        {key: 'pakcommodities.com is news updates website and has no link with anyones profit or loss.'},
                    ]}
                    renderItem={({item}) => 
                    <Text style={styles.text}>
                        <FontAwesomeIcon style={styles.bullet} icon={faCircle} size={5} color={"black"} />
                        {item.key}
                    </Text>}
                        />      
            </SafeAreaView>
        )
    }
}

export default TermsAndConditions;