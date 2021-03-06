import { StyleSheet } from'react-native';

var styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    listItem: {
        backgroundColor: '#383636', 
        flexDirection: 'row',
        marginTop: 1,
        justifyContent: 'flex-end', 
        flexWrap: 'wrap',
        alignContent: 'space-around',
        alignItems: 'flex-start'
    },
    leftView: {
        width: '20%', 
        height: '100%',
        backgroundColor: '#656565', 
        paddingTop: '1%', 
        paddingBottom: '2%', 
        paddingLeft: '3%'
    },
    smallGreyText: {
        color: '#a6a4a4', 
        fontSize: 10
    },
    mediumWhiteText: {
        color: '#ffffff', 
        fontSize: 14
    },
    middleView: {
        width: '60%', 
        paddingLeft: '3%', 
        paddingTop: '1%', 
        paddingBottom: '2%'
    },
    itemText: {
        color: '#ffffff', 
        display: 'flex'
    },
    smallerWhiteText: {
        color: '#ffffff', 
        fontSize: 10
    },
    smallerGreenText: {
        color: '#4fd925', 
        fontSize: 10
    },
    smallerRedText: {
        color: 'red', 
        fontSize: 10
    },
    rightView: {
        width: '18%', 
        paddingTop: '3%', 
        paddingBottom: '3%'
    },
    greenText: {
        color: '#4fd925', 
        fontSize: 12
    },
    greenDiv: {
        width: '2%', 
        height: '100%', 
        backgroundColor: '#4fd925'
    },
    redText: {
        color: 'red', 
        fontSize: 12
    },
    redDiv: {
        width: '2%', 
        height: '100%', 
        backgroundColor: 'red'
    },
    tabBg: {
        backgroundColor: '#10ac84',
    }
});

export default styles;