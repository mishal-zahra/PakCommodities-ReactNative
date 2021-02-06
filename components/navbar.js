import React, { Component } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/navbar.style.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAlignJustify, faUser } from '@fortawesome/free-solid-svg-icons'
import Home from './home';
import SubscriptionPlans from './subscription-plans';
import { ScrollView } from 'react-native-gesture-handler';
// import {} from '@fortawesome/fontawesome-svg-core'
// import {} from '@fortawesome/react-native-fontawesome'
// import {} from '@fortawesome/free-brands-svg-icons'
// import {} from '@fortawesome/free-regular-svg-icons'

class Navbar extends Component {

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.navbar}>
                    <TouchableOpacity style={styles.navbarSidemenuIcon} onPress={this.props.navigation.openDrawer}>
                        <FontAwesomeIcon icon={faAlignJustify} size={30} color={"white"} />
                    </TouchableOpacity>
                    {/* <Text style={styles.navbarText}>Pak Commodities</Text> */}
                    <Text style={styles.navbarText}>{this.props.name}</Text>
                </View>
                <View style={styles.middleView}>
                    <ScrollView style={styles.scrollView}>
                    {this.props.name == 'Subscribe' ? <SubscriptionPlans/> : <Home/>}
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default Navbar;