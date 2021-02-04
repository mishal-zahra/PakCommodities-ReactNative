import React, { Component } from 'react';
import { View, SafeAreaView, Text, Header, Button, Left, Right, Body, Title, Content } from 'react-native';
import styles from '../styles/navbar.style.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAlignJustify, faUser } from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/fontawesome-svg-core'
// import {} from '@fortawesome/react-native-fontawesome'
// import {} from '@fortawesome/free-brands-svg-icons'
// import {} from '@fortawesome/free-regular-svg-icons'

class Navbar extends Component {

    render() {
        return(
            <SafeAreaView style={styles.navbar}>

                {/* <Left>
                     <Button
                     transparent
                     onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                     <Icon name="menu" />
                     </Button>
                 </Left> */}
                <View style={styles.navbarSidemenuIcon}>
                    <FontAwesomeIcon icon={faAlignJustify} size={30} color={"white"} />
                </View>
                <Text style={{color: '#ffffff', fontSize: 20, paddingLeft: 30, paddingTop: 7}}>Pak Commodities</Text>
                <View style={styles.navbarAnchors}>
                    <FontAwesomeIcon style={{padding: 10}} icon={faUser} size={25} color={"white"} />

                    {/* <Text style={styles.navbarAnchorsText} onPress={() => {console.log("Signup is pressed!")}}>
                        Signup
                    </Text>
                    <Text style={styles.navbarAnchorsText} onPress={() => {console.log("Login is pressed!")}}>
                        Login
                    </Text>
                    <Text style={styles.navbarAnchorsText} onPress={() => {console.log("Logout is pressed!")}}>
                        Logout
                    </Text> */}
                </View>
            </SafeAreaView> 
            // <Container>
            //     <Header>
            //     <Left>
            //         <Button
            //         transparent
            //         onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            //         <Icon name="menu" />
            //         </Button>
            //     </Left>
            //     <Body>
            //         <Title>HomeScreen</Title>
            //     </Body>
            //     <Right />
            //     </Header>
            //     <Content padder>
            //     <Card>
            //         <CardItem>
            //         <Body>
            //             <Text>Chat App to talk some awesome people!</Text>
            //         </Body>
            //         </CardItem>
            //     </Card>
            //     <Button full rounded dark
            //         style={{ marginTop: 10 }}
            //         onPress={() => this.props.navigation.navigate("Chat")}>
            //         <Text>Chat With People</Text>
            //     </Button>
            //     <Button full rounded primary
            //         style={{ marginTop: 10 }}
            //         onPress={() => this.props.navigation.navigate("Profile")}>
            //         <Text>Goto Profiles</Text>
            //     </Button>
            //     </Content>
            // </Container>
        )
    }
}

export default Navbar;