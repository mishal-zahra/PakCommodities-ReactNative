import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import {
  Home,
  Login,
  Register,
  AllRates,
  Pulses,
  Grains,
  Fodderseeds,
  Spices,
  Sugar,
  Oilseeds,
  Guar,
  News,
  Research,
  TermsAndServices,
  Logout
} from './components';

import Sidebar from './components/sidebar'

const DrawerNavigator = createDrawerNavigator({
  Home,
  Login,
  Register,
  AllRates,
  Pulses,
  Grains,
  Fodderseeds,
  Spices,
  Sugar,
  Oilseeds,
  Guar,
  News,
  Research,
  TermsAndServices,
  Logout
}, {
  contentComponent: props => <Sidebar {...props} />
})

export default createAppContainer(DrawerNavigator);
