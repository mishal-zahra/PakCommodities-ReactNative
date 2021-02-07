import React, { Component } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/navbar.style.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAlignJustify, faBell } from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/fontawesome-svg-core'
// import {} from '@fortawesome/react-native-fontawesome'
// import {} from '@fortawesome/free-brands-svg-icons'
// import {} from '@fortawesome/free-regular-svg-icons'
import Notifications from './notifications';
import Home from './home';
import Login from './login';
import Register from './register';
import Research from './research';
import SubscriptionPlans from './subscription-plans';
import TermsAndConditions from './termsAndConditions';
import Category from './category';
import News from './news';
import Logout from './logout'

class Navbar extends Component {

    state = {
        showNotifications: false
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.navbar}>
                    {/* Navigation Drawer Icon */}
                    <TouchableOpacity style={styles.navbarIcon} onPress={this.props.navigation.openDrawer}>
                        <FontAwesomeIcon icon={faAlignJustify} size={25} color={"white"} />
                    </TouchableOpacity>

                    {/* Component Name Text */}
                    <Text style={styles.navbarText}>{this.props.name}</Text>

                    {/* Notifications Icon */}
                    <TouchableOpacity style={styles.navbarIcon}
                        onPress={() => {
                            this.setState({showNotifications: !this.state.showNotifications})
                        }}>
                        <FontAwesomeIcon icon={faBell} size={25} color={"white"} />
                    </TouchableOpacity>
                </View>
                <View style={styles.middleView}>
                    {this.state.showNotifications ? <Notifications /> : 
                        <ScrollView style={styles.scrollView}>
                            {this.props.name == 'Home' ? <Home/> : 
                                <View> 
                                    {this.props.name == 'Login' ? <Login/> : 
                                        <View>
                                            {this.props.name == 'Register' ? <Register/> : 
                                                <View>
                                                    {this.props.name == 'Subscribe' ? <SubscriptionPlans/> : 
                                                        <View>
                                                            {(this.props.name == 'Pulses' || this.props.name == 'Grains' || this.props.name == 'Fodder Seeds' || this.props.name == 'Spices' || this.props.name == 'Sugar' || this.props.name == 'Oil Seeds' || this.props.name == 'Guar' ) ? <Category category={this.props.name}/> :
                                                                <View>
                                                                    {this.props.name == 'News' ? <News/> :
                                                                        <View>
                                                                            {this.props.name == 'Research' ? <Research/> :
                                                                                <View>
                                                                                    {this.props.name == 'Terms of Services' ? <TermsAndConditions/> :
                                                                                        <View>
                                                                                            {this.props.name == 'Logout' ? <Logout/> : <Home/>}
                                                                                        </View>
                                                                                    }
                                                                                </View>
                                                                            }
                                                                        </View>
                                                                    }
                                                                </View>
                                                            }
                                                        </View>
                                                    }
                                                </View>
                                            }
                                        </View>
                                    }
                                </View>
                            }
                        </ScrollView>
                    }
                </View>
            </SafeAreaView>
        )
    }
}

export default Navbar;