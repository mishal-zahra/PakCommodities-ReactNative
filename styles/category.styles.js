import { StyleSheet } from'react-native';

var styles = StyleSheet.create({
    blogList: {
        margin: 10, 
        marginTop: 5,
        justifyContent: 'center', 
        borderColor: '#c1c4c0', 
        borderBottomWidth: 1,
        padding: 15
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderColor: '#10ac84', 
        textAlign: 'center'
    },
    rowView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    category: {
        width: '75%',
        fontSize: 14,
        fontWeight: 'bold'
    },
    date: {
        width: '25%',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default styles;