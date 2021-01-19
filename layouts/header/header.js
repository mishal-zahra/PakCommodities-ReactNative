import React, { Component } from 'react';
import { View, Image, Text, SafeAreaView, ToastAndroid, Platform } from 'react-native';
import styles from './header.style.js';

class Header extends Component {

    componentDidMount = () => {
        console.log("Header Initialized!")
    }

    showToast = (msg) => {
        if(Platform.OS == 'ios') {
            AlertIOS.alert(msg)
        } else {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        }
    }

    render() {
        return(
            <SafeAreaView style={styles.header}>
                <Image style={styles.headerImg} source={require('../../assets/logo.png')} />
                <View style={styles.headerText}>
                    <Text style={styles.headerTextTop}>PAK COMMODITIES</Text>
                    <Text style={styles.headerTextBottom}>Fastest News Updates of Commodities in Pakistan</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Header;