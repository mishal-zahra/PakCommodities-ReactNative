import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './layouts/header/header';
import Navbar from './layouts/navbar/navbar';
import Footer from './layouts/footer/footer';

export default function App() {
  return (
    <View style={{marginTop: 10, flex: 1}}>
      <ScrollView>
        <Header/>
        <Navbar/>
        <ScrollView>
          {/* Middle content goes here */}
        </ScrollView>
      </ScrollView>      
      <Footer/>
    </View>
  );
}
