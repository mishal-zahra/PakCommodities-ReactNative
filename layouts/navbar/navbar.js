import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './navbar_css.js';

class Navbar extends Component {

    render() {
        return(
            <View style={styles.navbarBg}>
                Hi there! I am in navbar
            </View>
        )
    }
}

export default Navbar;