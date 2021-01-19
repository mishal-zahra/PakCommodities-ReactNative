import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import styles from './footer.style.js';

class Footer extends Component {

    render() {
        return(
            <SafeAreaView>
                <View style={styles.footer}>
                    <View style={styles.otherLinks}>
                        <Text style={styles.footerTextColor}>Terms and Services</Text>
                        <Text style={styles.footerTextColor}>Research</Text>
                        <Text style={styles.footerTextColor}>News</Text>
                    </View>
                    <View style={styles.contact}>
                        <View>
                            <Text style={styles.footerHeadings}>FOLLOW US</Text>
                        </View>
                        <View>
                            <Text style={styles.footerHeadings}>CONTACT US</Text>
                            <Text style={styles.footerTextColor}>TELEPHONE: +92 301 5247927</Text>
                            <Text style={styles.footerTextColor}>EMAIL: pakommodities92@mail.com</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Footer;