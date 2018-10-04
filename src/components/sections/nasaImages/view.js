import React, { Component } from 'react'
import { View, Text,TouchableOpacity ,FlatList} from 'react-native'
import styles from './styles'
import {NasaImagesCell} from '../../../widgets'
import * as api from '../../../api'
import { Actions } from 'react-native-router-flux'

export default class extends Component{

    constructor(props) {
        super(props)
        this.state = {
            nasaList: [],
            onNasaTapped: () => {},
        }

    }


    componentDidMount(){
        this.goToImagesNasa()
    }

    goToImagesNasa(){
        api.fetchData().then(response  => {
        //console.log("response:", response)
       console.log("Images response:", response.data.collection.items[0].data[0])
       // console.log("Images response: ", response.data.collection.items[0].links[0].href)
        this.setState({nasaList: response.data.collection.items})
    }).catch (error => {
        this.setState({nasaList: []})
        console.log(error)
    })
    }

    _onNasaTapped(nasaImage) {
        //this.props.onNasaTapped(nasaImage)
     //this.props.onNasaTapped(nasaImage)
     //Actions.nasaImagesDetail({title: "Detalle Nasa" })
     Actions.nasa({nasaImage: nasaImage});

    }
onNasaTapped(nasaImage){
    console.log("Hola")
    
}
    _renderItem(value, index){
        //console.log('En el render item: ', value.item.data[0].center)
        return (
           < NasaImagesCell
            nasaImage={value} 
            onNasaImagePress={ v => this._onNasaTapped(v) }
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
               <Text style= {{color:'green', textAlign:'center'}} >N A S A</Text>
                <FlatList
                    data = {this.state.nasaList}
                    renderItem= { value => this._renderItem(value)}
                    keyExtractor={(item,i) => 'cell' + item.id}
                    extraData={this.state}
                    numColumns={2}
                    style={{paddingTop: 10}}
                />
            </View>
        )
    }
}

