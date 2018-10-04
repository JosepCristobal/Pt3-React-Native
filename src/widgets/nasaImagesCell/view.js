import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        nasaImage: null,
        onNasaImagePress: () => {},
    }
    
    render() {
        const { nasaImage } = this.props
        const image = nasaImage.item.links[0].href ? { uri: nasaImage.item.links[0].href } : 
        require('../../resources/images.jpeg');
       
        
        return (
            <TouchableOpacity 
                onPress={ () => this.props.onNasaImagePress(nasaImage) } 
                style={styles.cellContainer}
            >
               <Image
                    source={image}
                    style={{ width: '100%', height: '100%'}}
                    resizeMode={'center'}
                />
            </TouchableOpacity>
        )
    }
     
}
{/* <TouchableOpacity>
     <Text style = {{color:'red', textAlign:'center'}}>{value.item.data[0].description}</Text>
     </TouchableOpacity>*/}