import { StyleSheet } from'react-native';

var styles = StyleSheet.create({
    headText: {
        color:"white", 
        fontSize:18, 
        fontWeight: 'bold', 
        margin: 35, 
        marginBottom: 40
    },
    textField: {
        width:"80%",
        backgroundColor:"#dadbd9",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        marginLeft: 35
    },
    forgotPassword: {
        color:"white", 
        fontSize:14, 
        marginLeft: '30%'
    },
    loginButton: {
        width:"80%",
        backgroundColor:"#10ac84",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        marginBottom:10,
        marginLeft: 35
    },
    signupButton: {
        color:"white", 
        fontSize:14, 
        fontWeight: 'bold', 
        marginLeft: '43%'
    }
});

export default styles;