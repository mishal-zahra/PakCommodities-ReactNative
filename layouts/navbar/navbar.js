import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import styles from './navbar.style.js';

class Navbar extends Component {

    render() {
        return(
            <SafeAreaView style={styles.navbar}>
                <View style={styles.navbarSidemenuIcon}>
                    Open Sidebar Icon goes here
                </View>
                <View style={styles.navbarAnchors}>
                    <Text style={styles.navbarAnchorsText} onPress={() => {console.log("Signup is pressed!")}}>
                        Signup
                    </Text>
                    <Text style={styles.navbarAnchorsText} onPress={() => {console.log("Login is pressed!")}}>
                        Login
                    </Text>
                    <Text style={styles.navbarAnchorsText} onPress={() => {console.log("Logout is pressed!")}}>
                        Logout
                    </Text>
                </View>
            </SafeAreaView> 
        )
    }
}

export default Navbar;