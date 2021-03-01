import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerNavigatorItems } from 'react-navigation-drawer'; 

class Sidebar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView>
                <Image 
                    source={require('../assets/logo_updated2.png')} 
                    style={{width: null, height: null, padding: 50, paddingTop: 90}}
                />
                <ScrollView>
                    <DrawerNavigatorItems {...this.props} />
                </ScrollView>
            </SafeAreaView>
        );
    }    
}

export default Sidebar;