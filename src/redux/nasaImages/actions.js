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
            .fetchNasa()
            .then( res => {
                dispatch(setFetching(false))
                dispatch(setList(res.data.records))
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log("fetchNasaList error: ", err)
            })

    }
}