import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Api, {fetchData} from '../../../api'
import styles from './styles'


export default class extends Component{

    render() {
        //lista = Api.fetchData()

        //console.log({lista});
        return (
            <View style={styles.container}>
                <Text style= {{color:'green'}}>N A S A</Text>
            </View>
        )
    }
}

