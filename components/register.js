import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Dimensions, ToastAndroid } from 'react-native';
import styles from '../styles/register.styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { register } from '../services/app.service'

const screen = Dimensions.get("window"); //to set background height same as the screen

class Register extends Component {

    state = {
        dimensions: screen,
        email:'',
        fullName:'',
        phone:'',
        password:'',
        canRegister: false
    };    

    setField = (field, value) => {
        if(field === 'email') {
            this.setState({email : value})
        } else if(field === 'fullName') {
            this.setState({fullName : value})
        } else if(field === 'phone') {
            this.setState({phone : value})
        } else if(field === 'password') {
            this.setState({password : value})
        }
        
        if(this.state.email != '' && this.state.fullName != '' && this.state.password != '') {
            this.setState({canRegister : true})
        } else {
            this.setState({canRegister : false})
        }
    }

    onRegister = async() => {
        if(this.state.canRegister) {
            var registerObject = {
                email: this.state.email, 
                name: this.state.fullName, 
                phoneNumber: this.state.phone, 
                status: 'inactive', 
                password: this.state.password,
                subscribedPlan: null,
            }
            //call login api and send registerObject
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: registerObject
            }
    
            try {
                const response = await register(requestOptions);
                const res = await response.json();
                console.log("response from register :: ", res)  
            } catch(err) {
                console.log("Error fetching data from register :: ", err);
            }
            console.log("Called register api :: ", registerObject)
        } else {
            ToastAndroid.show("Fill out all the required fields to register!", ToastAndroid.SHORT);
        }
    }

    render() {
        return (

            <SafeAreaView style={{ backgroundColor: '#656565', height: this.state.dimensions.height }}>
                <TouchableOpacity>
                    <Text style={styles.headText}>Sign Up for our Premium Services</Text>
                </TouchableOpacity>
                <View>

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Full Name" 
                        placeholderTextColor="#10ac84"
                        onChangeText={text => this.setField('fullName', text)}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Email" 
                        placeholderTextColor="#10ac84"
                        onChangeText={text => this.setField('email', text)}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="Phone" 
                        placeholderTextColor="#10ac84"
                        onChangeText={text => this.setField('phone', text)}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Password" 
                        placeholderTextColor="#10ac84"
                        onChangeText={text => this.setField('password', text)}
                    />
                    
                                    
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={this.onRegister}>
                    <Text style={{color: 'white'}}>REGISTER</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Register;