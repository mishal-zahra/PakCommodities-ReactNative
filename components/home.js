import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import styles from '../styles/home.styles';
import { Tabs, TabScreen, useTabIndex, useTabNavigation } from 'react-native-paper-tabs';
import { getAllCategories, getAllCategoryRates } from '../services/app.service'

class Home extends Component {

    state = {
        allCategories: [],
        dataList: [],
    }

    componentDidMount = async () => {        
        //to fetch data from api
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'},
        }

        try {
            const response = await getAllCategories(requestOptions);
            const allCategoriesList = await response.json();
            this.setState({
                allCategories: allCategoriesList
            })
            // console.log("response from getAllCategories :: ", allCategoriesList)  
        } catch(err) {
            console.log("Error fetching data from getAllCategories :: ", err);
        }
        this.tabPressed(0);
        // this.getRates()
    }

    tabPressed = async(item) => {
        const tabItems = this.state.allCategories;
        const currentItem = tabItems[item];
        // if(item) {    
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: {'Content-Type' : 'application/json'},
        //         body: {
        //             category: currentItem._id
        //         }
        //     }        
        //     try {
        //         const response = await getAllCategoryRates(requestOptions);
        //         const allCategoriesList = await response.json();
        //         // this.setState({
        //         //     allCategories: allCategoriesList
        //         // })
        //         console.log("response from getAllCategories :: ", allCategoriesList)  
        //     } catch(err) {
        //         console.log("Error fetching data from getAllCategories :: ", err);
        //     }
        // }
    }

    render() {
        return (
            <Tabs style={styles.tabBg} mode="scrollable" onChangeIndex={(newIndex) => {this.tabPressed(newIndex)}}>
                {this.state.allCategories.map((item) =>
                    <TabScreen label={item.categoryNameEng}>
                        <ExploreWitHookExamples data={this.state.dataList}/>
                    </TabScreen>
                )}
            </Tabs>        
        )
    }
}

export default Home;

function ExploreWitHookExamples(props) {
    const data = props.data;
    const goTo = useTabNavigation();
    const index = useTabIndex();
    return (
      <SafeAreaView style={styles.container}>
        {data.map(item => {
            return (
                <View style={styles.listItem}>
                    <View style={styles.leftView}>
                        <Text style={styles.smallGreyText}>5:30PM</Text>
                        <Text style={styles.mediumWhiteText}>{item.location}</Text>
                        <Text style={styles.smallGreyText}>28-01-2021</Text>
                    </View>
                    <View style={styles.middleView}>
                        <Text style={styles.itemText}>
                            <Text style={styles.mediumWhiteText}>{item.item}</Text>
                        </Text> 
                        <Text style={styles.smallerWhiteText}>{item.date}</Text>
                        {item.increase ? 
                            <Text style={styles.smallerGreenText}>{item.description}</Text> 
                            : 
                            <Text style={styles.smallerRedText}>{item.description}</Text>
                        }
                        
                    </View> 
                    <View style={styles.rightView} >
                        {item.increase ? 
                            <View>
                                <Text style={styles.greenText}>{item.rate}</Text>
                                <Text style={styles.greenText}>{item.percentage}%</Text>
                            </View> 
                            : 
                            <View>
                                <Text style={styles.redText}>{item.rate}</Text>
                                <Text style={styles.redText}>{item.percentage}%</Text>
                            </View>
                        }
                        
                    </View>  
                        {item.increase? <View style={styles.greenDiv}></View> : <View style={styles.redDiv}></View> }                        
                </View>
            );
        })}
    </SafeAreaView>
    );
}

// ***** FOR SCREENSHOT CAPTURE *****
//
// import * as ScreenCapture from 'expo-screen-capture';
// import * as Permissions from 'expo-permissions';
// import React from 'react';
// import { Button, View, Platform } from 'react-native';

// export default class ScreenCaptureExample extends React.Component {
//   async componentDidMount() {
//     // This permission is only required on Android
//     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//     if (status === 'granted') {
//       ScreenCapture.addScreenshotListener(() => {
//         alert('Thanks for screenshotting my beautiful app 😊');
//       });
//     }
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
//         <Button title="Activate" onPress={this._activate} />
//         <Button title="Deactivate" onPress={this._deactivate} />
//       </View>
//     );
//   }

//   _activate = async () => {
//     await ScreenCapture.preventScreenCaptureAsync();
//   };

//   _deactivate = async () => {
//     await ScreenCapture.allowScreenCaptureAsync();
//   };
// }