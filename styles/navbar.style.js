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
  navbarSidemenuIcon: {
    margin: 5,
    color: '#ffffff',
  },
  middleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbarText: {
    color: '#ffffff', 
    fontSize: 20, 
    paddingLeft: 30, 
    paddingTop: 7
  },  
  scrollView: {
    width: '100%',
  }
});

export default styles;