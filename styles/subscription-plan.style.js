import { StyleSheet } from'react-native';

var styles = StyleSheet.create({
    textHead: {
        fontSize: 16, 
        fontWeight: 'bold', 
        margin:10, 
        marginLeft: 25
    },
    container: {
        margin: 20, 
        justifyContent: 'center', 
        borderColor: '#c1c4c0', 
        borderWidth: 1, 
        borderRadius: 12
    },
    planHeadingView: {
        borderColor: '#10ac84', 
        borderBottomWidth: 3, 
        margin: 15, 
        paddingLeft: 15, 
        paddingBottom: 15
    },
    planHeading: {
        fontSize: 16, 
        fontWeight: 'bold'
    },
    flatListView: {
        paddingLeft: 15, 
        paddingBottom: 15
    },
    bullet: {
        paddingTop: 5, 
        paddingBottom: 3, 
        paddingLeft: 5, 
        paddingRight: 15
    },
    planFooterView: {
        backgroundColor: '#dadbd9', 
        borderBottomLeftRadius: 12, 
        borderBottomRightRadius: 12, 
        borderColor: '#c1c4c0', 
        borderTopWidth: 1, 
        paddingLeft: 15, 
        paddingBottom: 15, 
        flexDirection: 'row'
    },
    planFooterText: {
        width: '60%', 
        fontSize: 12, 
        paddingTop: 17, 
        paddingBottom:10
    },
    signUpButton: { 
        height: 30, 
        width: 100, 
        marginTop: 10, 
        paddingTop: 5, 
        paddingLeft: 25, 
        backgroundColor: '#10ac84', 
        borderRadius: 5 
    },
});

export default styles;