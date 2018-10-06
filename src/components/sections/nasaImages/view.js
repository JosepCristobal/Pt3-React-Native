import React, { Component } from 'react'
import { View, Text,TouchableOpacity ,FlatList, ActivityIndicator} from 'react-native'
import styles from './styles'
import { NasaImagesCell } from '../../../widgets'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import * as NasaActions from '../../../redux/nasaImages/actions'

class NasaImages extends Component{


    componentDidMount(){
        this.props.fetchNasaList()
    }

    _onNasaTapped(nasaImage) {
        this.props.onNasaTapped(nasaImage)
    }

    _renderItem(value){  
        return (
           < NasaImagesCell
                nasaImage={value} 
                onNasaImagePress={ v => this._onNasaTapped(v) }
            />
        )
    }
    _renderActivityIndicator() {
        if(!this.props.isFetching) {
            return null
        }
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
                <ActivityIndicator size={'large'} color={'black'} animating={true} />
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>
               <Text style= {{color:'green', textAlign:'center'}} >N A S A</Text>
                <FlatList
                    data = {this.props.list}
                    renderItem= { value => this._renderItem(value)}
                    keyExtractor={(item, i) => 'cell' + item.id}
                    extraData={this.props}
                    numColumns={2}
                    style={{paddingTop: 10}}
                />
                { this._renderActivityIndicator() }

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.nasaImages.isFetching,
        list: state.nasaImages.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        fetchNasaList: () => {
            dispatch(NasaActions.fetchNasaList())
        },
            onNasaTapped: (nasaImage) => {
            Actions.nasa({nasaImage: nasaImage});   
        }
     }
}


export default connect(mapStateToProps, mapDispatchToProps)(NasaImages)
