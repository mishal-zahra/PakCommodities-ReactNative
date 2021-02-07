import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import styles from '../styles/register.styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const screen = Dimensions.get("window"); //to set background height same as the screen

class Register extends Component {

    state = {
        dimensions: screen,
        userName: '',
        email:'',
        fullName:'',
        phone:'',
        password:'',
        subscriptionPlan:'',
        canRegister: false
    };    

    setField = (field, value) => {
        if(field === 'username') {
            this.setState({username : value})
        } else if(field === 'email') {
            this.setState({email : value})
        } else if(field === 'fullName') {
            this.setState({fullName : value})
        } else if(field === 'phone') {
            this.setState({phone : value})
        } else if(field === 'password') {
            this.setState({password : value})
        }
        
        if(this.state.username != '' && this.state.email != '' && this.state.fullName != '' && this.state.phone != '' && this.state.password != '') {
            this.setState({canRegister : true})
        } else {
            this.setState({canRegister : false})
        }
    }

    onRegister = () => {
        if(this.state.canRegister) {
            var registerObject = {username: this.state.username, email: this.state.email, fullName: this.state.fullName, phone: this.state.phone, status: 'inactive', password: this.state.password}
            //call login api and send registerObject
            console.log("Call register api :: ", registerObject)
        } else {
            console.log("Cannot register")
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
                        placeholder="* Username" 
                        placeholderTextColor="#10ac84"
                        onChangeText={text => this.setField('username', text)}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Email" 
                        placeholderTextColor="#10ac84"
                        onChangeText={text => this.setField('email', text)}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Full Name" 
                        placeholderTextColor="#10ac84"
                        onChangeText={text => this.setField('fullName', text)}
                    />

                    <TextInput 
                        style={styles.textField} 
                        placeholder="* Phone" 
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