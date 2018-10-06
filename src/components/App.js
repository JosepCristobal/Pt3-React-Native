
import React, {Component} from 'react';
import {StatusBar, Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import {NasaImages, NasaImagesDetail, NasaImagesAdd} from './sections';
import * as api from '../api';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from '../redux/'

const reducer = combineReducers(reducers)
const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api))
)

const sceneDefaultStyles = {
  navigationBarStyle: { backgroundColor: 'rgb(24,24,24)'},
  backButtonTintColor: 'white',
  backButtonTextStyle: { color: 'white' },
  titleStyle: { color: 'white' },
}

const RightButton = props => (
  <TouchableOpacity style={{padding: 10}} onPress={ () => Actions.nasaAdd() }>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{'Add'}</Text>
  </TouchableOpacity>
)

export default class App extends Component {
  
  componentWillMount(){
    api.configureAxios()
    StatusBar.setBarStyle('light-content')
    
  }
  
  render() {
    return (
      <Provider store= {store}>
        <Router>
          <Stack key="root">
            <Scene key= "nasaImages" 
            component ={NasaImages} 
            title = "Images NASA" 
            renderRightButton={RightButton}
            {...sceneDefaultStyles}
            
            />

            <Scene key= "nasa" 
            component = {NasaImagesDetail} 
            title = "Images NASA Detail"
            {...sceneDefaultStyles}
            />

            <Scene key= "nasaAdd" 
            component = {NasaImagesAdd} 
            title = "Images NASA Add"
            {...sceneDefaultStyles}
            initial ={true}
            />

          </Stack>
        </Router>  
      </Provider>
    );
  }
}


