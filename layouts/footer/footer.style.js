import { StyleSheet } from'react-native';

var styles = StyleSheet.create({
  footer: {
    backgroundColor: '#757575',
    flex: 1,
    flexDirection: 'row',
  },
  otherLinks: {
    margin: 10,
  },
  contact: {
    margin: 10,
    position: 'absolute',
    right: 10
  },
  footerHeadings: {
    fontSize: 14,
    color: '#fab040',
    textDecorationLine: 'underline'
  },
  footerTextColor: {
    color: '#ffffff'
  }
});

export default styles;