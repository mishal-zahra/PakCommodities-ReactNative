import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import styles from '../styles/home.styles';
import { Tabs, TabScreen, useTabIndex, useTabNavigation } from 'react-native-paper-tabs';
import { getAllRates } from '../services/app.service'

class Home extends Component {

    state = {
        dataList: [],
    }

    componentDidMount = async () => {
        var item = {
            item:'Imports',
            location:'Canada',
            description:'Description',
            date:'22-01-2020',
            rate:'10',
            percentage:'2',
            increase: true
        }
        var list = [];
        for(let i=0; i<15; i++) {
            list.push(item);
        }

        this.setState({
            dataList: list
        })
        
        //to fetch data from api
        // const requestOptions = {
        //     mehtod: 'GET',
        //     headers: {'Content-Type' : 'application/json'},
        // }
        // const response = await getAllRates(requestOptions);
        // const allRatesList = await response.json();
        // console.log("response from getAllRates :: ", response)        
    }

    tabPressed = (item) => {
        const tabValues = ['Imports', 'Sugar', 'Pulses', 'Grains', 'Fodder Seeds', 'Oil Seeds', 'Spices', 'Guar']

        var item = {
            item:tabValues[item],
            location:'Canada',
            description:'Description',
            date:'22-01-2020',
            rate:'10',
            percentage:'2',
            increase: true
        }
        var list = [];
        for(let i=0; i<15; i++) {
            list.push(item);
        }

        this.setState({
            dataList: list
        })
    }

    render() {
        return (
            <Tabs style={styles.tabBg} mode="scrollable" onChangeIndex={(newIndex) => {this.tabPressed(newIndex)}}>
                <TabScreen label="Imports">
                    <ExploreWitHookExamples data={this.state.dataList}/>
                </TabScreen>

                <TabScreen label="Sugar">
                    <ExploreWitHookExamples data={this.state.dataList} />
                </TabScreen>

                <TabScreen label="Pulses">
                    <ExploreWitHookExamples data={this.state.dataList} />
                </TabScreen>

                <TabScreen label="Grains">
                    <ExploreWitHookExamples data={this.state.dataList} />
                </TabScreen>

                <TabScreen label="Fodder Seeds">
                    <ExploreWitHookExamples data={this.state.dataList} />
                </TabScreen>

                <TabScreen label="Oil Seeds">
                    <ExploreWitHookExamples data={this.state.dataList} />
                </TabScreen>

                <TabScreen label="Spices">
                    <ExploreWitHookExamples data={this.state.dataList} />
                </TabScreen>

                <TabScreen label="Guar">
                    <ExploreWitHookExamples data={this.state.dataList} />
                </TabScreen>
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

