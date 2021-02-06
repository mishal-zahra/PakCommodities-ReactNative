import { StyleSheet } from'react-native';

var styles = StyleSheet.create({
  // Navbar Styles
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#10ac84'
  },
  navbarIcon: {
    margin: 5,
    width: '10%'
  },
  navbarText: {
    color: '#ffffff', 
    fontSize: 20, 
    paddingLeft: 30, 
    paddingTop: 7,
    width: '80%'
  }, 
  middleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {
    width: '100%',
  }
});

export default styles;