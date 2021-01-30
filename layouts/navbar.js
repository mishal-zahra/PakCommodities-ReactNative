import React, { Component } from 'react';
import { View, SafeAreaView, Text, Header, Button, Left, Right, Body, Title, Content } from 'react-native';
import styles from '../styles/navbar.style.js';

class Navbar extends Component {

    render() {
        return(
            <SafeAreaView style={styles.navbar}>

                <Left>
                     <Button
                     transparent
                     onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                     <Icon name="menu" />
                     </Button>
                 </Left>
                {/* <View style={styles.navbarSidemenuIcon}>
                    Open Sidebar Icon goes here
                </View>
                <View style={styles.navbarAnchors}>
                    <Text style={styles.navbarAnchorsText} onPress={() => {console.log("Signup is pressed!")}}>
                        Signup
                    </Text>
                    <Text style={styles.navbarAnchorsText} onPress={() => {console.log("Login is pressed!")}}>
                        Login
                    </Text>
                    <Text style={styles.navbarAnchorsText} onPress={() => {console.log("Logout is pressed!")}}>
                        Logout
                    </Text>
                </View> */}
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