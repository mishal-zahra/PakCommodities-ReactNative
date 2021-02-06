import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  AllRatesScreen,
  PulsesScreen,
  GrainsScreen,
  FodderseedsScreen,
  SpicesScreen,
  SugarScreen,
  OilseedsScreen,
  GuarScreen,
  NewsScreen,
  ResearchScreen,
  TermsAndServicesScreen,
  LogoutScreen
} from './components';

const DrawerNavigator = createDrawerNavigator({
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  AllRatesScreen,
  PulsesScreen,
  GrainsScreen,
  FodderseedsScreen,
  SpicesScreen,
  SugarScreen,
  OilseedsScreen,
  GuarScreen,
  NewsScreen,
  ResearchScreen,
  TermsAndServicesScreen,
  LogoutScreen
})

export default createAppContainer(DrawerNavigator);
