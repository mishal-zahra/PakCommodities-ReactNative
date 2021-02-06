import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import styles from '../styles/login.styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const screen = Dimensions.get("screen"); //to set background height same as the screen

class Login extends Component {

    state = {
        dimensions: screen,
        showPassword: false
    };

    togglePasswordVisibility = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    render() {
        return (
            // ************************** For Login Form ***********************

            <SafeAreaView style={{ backgroundColor: '#656565', height: this.state.dimensions.height }}>
                <TouchableOpacity>
                    <Text style={styles.headText}>Please enter your details to Login</Text>
                </TouchableOpacity>
                <View>
                    <TextInput 
                        style={styles.textField} 
                        placeholder="Email / Username" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="Password" 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                    />
                    <TouchableOpacity onPress={this.togglePasswordVisibility}>
                        {this.state.showPassword ? <FontAwesomeIcon icon={faEye} size={20} color={"black"} /> : <FontAwesomeIcon icon={faEyeSlash} size={20} color={"grey"} />}
                    </TouchableOpacity>
                    
                    
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={{color: 'white'}}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.signupButton}>SignUp</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Login;