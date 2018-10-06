import * as types from './types'
import { AsyncStorage } from 'react-native'


function setFetching(value) {
    return {
        type: types.NASA_SET_FETCHING,
        value: value,
    }
}

export function setList(value){
    return{
        type: types.NASA_UPDATE_LIST,
        value,
    }
}

export function setItem(value){
    return{
        type: types.NASA_SET_ITEM,
        value
    }
}

export function fetchNasaList(){
    return (dispatch, getState, api) =>{
        AsyncStorage.getItem('nasaList', (error,result) => {
            if(result && !error){
                const nasaList = JSON.parse(result)
                dispatch(setList(nasaList))
            }else{
                dispatch(setFetching(true))
            }
        //console.log('AsyncStorage.getItem error ', error, 'result: ', result)
        })
        
        dispatch(setFetching(true))
        api
            .fetchData()
            .then( res => {
                dispatch(setFetching(false))
                //console.log("Images response en fetch:", res.data.collection.items[0].data[0])
                dispatch(setList(res.data.collection.items))
                AsyncStorage.setItem('nasaList', JSON.stringify(res.data.collection.items))
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log("fetchNasaList error: ", err)
            })

    }
}