import React from 'react';
import { SafeAreaView , View, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../styles/category.styles';

const screen = Dimensions.get("window"); //to set background height same as the screen

class News extends React.Component {

    state = {
        dimensions: screen,
        blogsList: []
    }
    
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        const cat = this.props.name;
        var item = {
            name:'Blog1',
            category: cat,
            content: 'This is the blog content aka description. This is the blog content aka description. This is the blog content aka description. This is the blog content aka description. This is the blog content aka description. This is the blog content aka description. This is the blog content aka description. This is the blog content aka description. This is the blog content aka description. This is the blog content aka description. This is the blog content aka description.',
            date: '07-02-2021'
        }
        var list = [];
        for(let i=0; i<15; i++) {
            list.push(item);
        }

        this.setState({
            blogsList: list
        })
    }

    render() {
        return (
            <SafeAreaView style={{height: this.state.dimensions.height, width: this.state.dimensions.width}}>
                <ScrollView>
                    {this.state.blogsList.map(item => {
                        return (
                            <View style={styles.blogList}>
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.rowView}>
                                    <Text style={styles.category}>{item.category}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>                                
                                <Text>{item.content}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default News;