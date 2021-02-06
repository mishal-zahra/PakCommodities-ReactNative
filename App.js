import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { ScrollView } from 'react-native';

import {
  Home,
  Login,
  Register,
  Subscribe,
  Pulses,
  Grains,
  FodderSeeds,
  Spices,
  Sugar,
  OilSeeds,
  Guar,
  News,
  Research,
  TermsOfServices,
  Logout
} from './components';

import Sidebar from './components/sidebar'

const DrawerNavigator = createDrawerNavigator({
  Home,
  Login,
  Register,
  Subscribe,
  Pulses,
  Grains,
  FodderSeeds,
  Spices,
  Sugar,
  OilSeeds,
  Guar,
  News,
  Research,
  TermsOfServices,
  Logout
}, {
  contentComponent: props => 
  <ScrollView>
    <Sidebar {...props} />
  </ScrollView>
})

export default createAppContainer(DrawerNavigator);
