import { StyleSheet } from'react-native';

var styles = StyleSheet.create({
  // Header Styles
  header: {
    flex: 1, 
    flexDirection: 'row',
  },
  headerImg: {
    width: 150,
    height: 70,
    left: 20
  },
  headerText: {
    flex: 1, 
    flexDirection: 'column',
    textAlign: 'center',
  },
  headerTextTop: {
    color: '#1d5625',
    marginTop: 5,
    fontSize: 20
  },
  headerTextBottom: {
    color: '#56985f',
    fontSize: 12,
  },
});

export default styles;