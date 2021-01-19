import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './header_css.js';

class Header extends Component {

    render() {
        return(
            <View style={styles.navbarBg}>
                Hi there! I am in header
            </View>
        )
    }
}

export default Header;