import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import styles from '../styles/register.styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const screen = Dimensions.get("window"); //to set background height same as the screen

class Register extends Component {

    state = {
        dimensions: screen,
    };

    render() {
        return (
            // ************************** For Login Form ***********************

            <SafeAreaView style={{ backgroundColor: '#656565', height: '100%' }}>
                <TouchableOpacity>
                    <Text style={styles.headText}>Sign Up for our Premium Services</Text>
                </TouchableOpacity>
                <View>
                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Username" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Email" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* First Name" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Last Name" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Phone" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Password" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Confirm Password" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="City" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="Country" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />                    
                    
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={{color: 'white'}}>REGISTER</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Register;