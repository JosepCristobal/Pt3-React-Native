import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from './styles'


export default class extends React.Component {
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
                <Image source={image} resizeMode={'cover'} style={styles.imageContainer}/>
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