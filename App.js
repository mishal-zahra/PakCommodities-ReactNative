import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './layouts/header/header';
import Navbar from './layouts/navbar/navbar';
import Footer from './layouts/footer/footer';

export default function App() {
  return (
    <View>
      <Header></Header>
      <Navbar></Navbar>
      <Footer></Footer>
    </View>
  );
}
