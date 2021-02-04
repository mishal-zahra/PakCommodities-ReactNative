import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './layouts/header';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import Home from './components/home';
// import Routes from './components/routes';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Navbar/>
        {/* <Routes /> */}
        <ScrollView>
          <Home/>
        </ScrollView>
      </ScrollView>      
    </View>
  );
}
