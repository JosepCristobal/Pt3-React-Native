import * as types from './types'

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
        dispatch(setFetching(true))
        api
            .fetchData()
            .then( res => {
                dispatch(setFetching(false))
                //console.log("Images response en fetch:", res.data.collection.items[0].data[0])
                dispatch(setList(res.data.collection.items))
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log("fetchNasaList error: ", err)
            })

    }
}