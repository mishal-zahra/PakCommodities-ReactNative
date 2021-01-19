import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './footer_css.js';

class Footer extends Component {

    render() {
        return(
            <View style={styles.navbarBg}>
                Hi there! I am in footer
            </View>
        )
    }
}

export default Footer;