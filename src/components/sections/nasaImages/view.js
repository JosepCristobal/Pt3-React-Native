import React, { Component } from 'react'
import { View, Text,TouchableOpacity ,FlatList} from 'react-native'
import styles from './styles'
import {NasaImagesCell} from '../../../widgets'
import * as api from '../../../api'


export default class extends Component{

    constructor(props) {
        super(props)
        this.state = {
            nasaList: [],
            pruebas:['a','b','c'],
        }

    }


componentDidMount(){
    this.goToImagesNasa()
}

goToImagesNasa(){
    api.fetchData().then(response  => {
        console.log("response:", response)
        console.log("Images response:", response.data.collection.items[0].data[0].description)
        console.log("Images response: ", response.data.collection.items[0].links[0].href)
        this.setState({nasaList: response.data.collection.items})
    }).catch (error => {
        this.setState({nasaList: []})
        console.log(error)
    })
}
    _renderItem(value, index){
        console.log('En el render item: ', value.item.data[0].center)
        return (
           < NasaImagesCell
             nasaImage={value} 
            //onNasaImagePress={ v => this._onHouseTapped(v) }
            />
        )
    }

    render() {
       // console.log('En el render: ', this.state.nasaList)
       // console.log('Pruebas:', this.state.pruebas)
        return (
            <View style={styles.container}>
               <Text style= {{color:'green', textAlign:'center'}} >N A S A</Text>
                <FlatList
                    data = {this.state.nasaList}
                    renderItem= { value => this._renderItem(value)}
                    keyExtractor={(item,i) => 'cell' + item.id}
                    extraData={this.state}
                    numColumns={2}
                    style={{paddingTop: 40}}
                />
            </View>
        )
    }
}

