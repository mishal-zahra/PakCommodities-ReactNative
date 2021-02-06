import React from 'react';
import Navbar from './navbar';

export const HomeScreen = ({navigation}) => <Navbar navigation={navigation} name ="Home" />
export const LoginScreen = ({navigation}) => <Navbar navigation={navigation} name ="Login" />
export const RegisterScreen = ({navigation}) => <Navbar navigation={navigation} name ="Subscribe" />
export const AllRatesScreen = ({navigation}) => <Navbar navigation={navigation} name ="All Rates" />
export const PulsesScreen = ({navigation}) => <Navbar navigation={navigation} name ="Pulses" />
export const GrainsScreen = ({navigation}) => <Navbar navigation={navigation} name ="Grains" />
export const FodderseedsScreen = ({navigation}) => <Navbar navigation={navigation} name ="Fodder Seeds" />
export const SpicesScreen = ({navigation}) => <Navbar navigation={navigation} name ="Spices" />
export const SugarScreen = ({navigation}) => <Navbar navigation={navigation} name ="Sugar/Gur" />
export const OilseedsScreen = ({navigation}) => <Navbar navigation={navigation} name ="Oil Seeds" />
export const GuarScreen = ({navigation}) => <Navbar navigation={navigation} name ="Guar" />
export const NewsScreen = ({navigation}) => <Navbar navigation={navigation} name ="News" />
export const ResearchScreen = ({navigation}) => <Navbar navigation={navigation} name ="Research" />
export const TermsAndServicesScreen = ({navigation}) => <Navbar navigation={navigation} name ="Terms And Services" />
export const LogoutScreen = ({navigation}) => <Navbar navigation={navigation} name ="Logout" />