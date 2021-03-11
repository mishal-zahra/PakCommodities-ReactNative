import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Dimensions, ToastAndroid } from 'react-native';
import styles from '../styles/login.styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { login } from '../services/app.service'

const screen = Dimensions.get("window"); //to set background height same as the screen

class Login extends Component {

    state = {
        dimensions: screen,
        showPassword: false,
        canLogin:false,
        username:'',
        password:''
    };

    togglePasswordVisibility = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    onLogin = async() => {
        if(this.state.canLogin) {
            var loginObject = {username: this.state.username, password: this.state.password}
            //call login api and send loginObject
            //to fetch data from api
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: loginObject
            }

            try {
                const response = await login(requestOptions);
                const loginResponse = await response.json();
                console.log("response from login :: ", loginResponse)  
            } catch(err) {
                console.log("Error in response of login :: ", err);
            }
            // console.log("Call login api :: ", loginObject)
        } else {
            ToastAndroid.show("Fill out all the required fields to login!", ToastAndroid.SHORT);
        }
    }

    setField = (field, value) => {
        if(field === 'username') {
            this.setState({username : value})
        } else if(field === 'password') {
            this.setState({password : value})
        }
        
        if(this.state.username != '' && this.state.password != '') {
            this.setState({canLogin : true})
        } else {
            this.setState({canLogin : false})
        }
    }

    bannerError = (e) => {
        alert(e);
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
                        placeholder="* Username / Email" 
                        placeholderTextColor="#10ac84"
                        onChangeText={text => this.setField('username', text)}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Password" 
                        placeholderTextColor="#10ac84"
                        onChangeText={text => this.setField('password', text)}
                    />
                    <TouchableOpacity onPress={this.togglePasswordVisibility}>
                        {this.state.showPassword ? <FontAwesomeIcon icon={faEye} size={20} color={"black"} /> : <FontAwesomeIcon icon={faEyeSlash} size={20} color={"grey"} />}
                    </TouchableOpacity>               
                </View>
            
                <TouchableOpacity style={styles.loginButton} onPress={this.onLogin}>
                    <Text style={{color: 'white'}}>LOGIN</Text>
                </TouchableOpacity>      

            </SafeAreaView>
        )
    }
}

export default Login;