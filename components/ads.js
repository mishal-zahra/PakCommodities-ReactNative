import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';

class Ads extends Component {

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#656565', height: this.state.dimensions.height }}>
                <AdMobBanner
                style={{marginTop: 100}}
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                    onDidFailToReceiveAdWithError={this.bannerError} 
                />
            </SafeAreaView>
        )
    }
}

export default Ads;