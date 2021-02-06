import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

class Login extends Component {

    render() {
        return (
            // ************************** For Login Form ***********************

            <View style={{backgroundColor: '#656565', height:500}}>
                <TouchableOpacity>
                    <Text style={{color:"white", fontSize:18, fontWeight: 'bold', margin: 35, marginBottom: 20}}>Please enter your details to Login</Text>
                </TouchableOpacity>
                <View>
                    <TextInput 
                    style={{
                        width:"80%",
                        backgroundColor:"#dadbd9",
                        borderRadius:25,
                        height:50,
                        marginBottom:20,
                        justifyContent:"center",
                        padding:20,
                        marginTop: 20,
                        marginLeft: 35
                    }} 
                        placeholder="Email..." 
                        placeholderTextColor="#10ac84"
                        // onChangeText={text => this.setState({email:text})}
                        />
                        <TextInput 
                style={{
                    width:"80%",
                    backgroundColor:"#dadbd9",
                    borderRadius:25,
                    height:50,
                    marginBottom:20,
                    justifyContent:"center",
                    padding:20,
                    marginLeft: 35
                }} 
                    placeholder="Password..." 
                    placeholderTextColor="#10ac84"
                    // onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={{color:"white", fontSize:14, marginLeft: '30%'}}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:"80%",
                    backgroundColor:"#10ac84",
                    borderRadius:25,
                    height:50,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:15,
                    marginBottom:10,
                    marginLeft: 35}}>
                    <Text style={{color: 'white'}}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{color:"white", fontSize:14, fontWeight: 'bold', marginLeft: '43%'}}>SignUp</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Login;