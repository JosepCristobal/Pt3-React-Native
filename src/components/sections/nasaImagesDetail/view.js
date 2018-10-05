import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Animated, TouchableHighlight} from 'react-native'
import styles from './styles'


export default class extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            imageExpanded: false,
            imageHeight: new Animated.Value(300)
        }
    }
    _onShowImage(){
        if(this.state.imageExpanded){
            Animated.timing(
                this.state.imageHeight,
                {
                    duration: 500,
                    toValue: 300,
                }
            ).start()
            this.setState({imageExpanded: false})
        }else{
            Animated.timing(
                this.state.imageHeight,
                {
                    duration: 500,
                    toValue: 600,
                }
            ).start()
            this.setState({imageExpanded: true})
        }

    }
    
    render() {
        const { nasaImage } = this.props
        const image = nasaImage.item.links[0].href ? { uri: nasaImage.item.links[0].href } : 
        require('../../../resources/images.jpeg');
       
        const description = nasaImage.item.data[0].description
        const location = nasaImage.item.data[0].location
        const date = nasaImage.item.data[0].date_created
        const center = nasaImage.item.data[0].center
        
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress = {() => this._onShowImage()}>
                    <Animated.Image source={image} resizeMode={'cover'} style={[styles.imageContainer, {height: this.state.imageHeight}]}/>
                </TouchableHighlight>
                <View >
                    <Text style={styles.textTitle}>{'Description: '}</Text>
                </View>
                <ScrollView>
               
                <View style={styles.dataContainer}>
                    <Text style={styles.text}>{description}</Text>
                </View>
                <View >
                    <Text style={styles.textTitle}>{'Location: '}</Text>
                    <Text style={styles.text}>{location}</Text>
                </View>
                <View >
                    <Text style={styles.text}>{'Date creation: '}{date}</Text>
                    <Text style={styles.text}>{'Center: '}{center}</Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}