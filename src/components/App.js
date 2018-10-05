
import React, {Component} from 'react';
import {StatusBar, Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import {NasaImages, NasaImagesDetail} from './sections';
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
  <TouchableOpacity style={{padding: 10}} onPress={ () => alert("Hola Actions") }>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{'Añadir'}</Text>
  </TouchableOpacity>
)

export default class App extends Component {
  
  componentWillMount(){
    api.configureAxios()
    StatusBar.setBarStyle('light-content')
    
  }
  
  render() {
    //configureAxios();
   // lista = fetchData();
    return (
      <Provider store= {store}>
        <Router>
          <Stack key="root">
            <Scene key= "nasaImages" 
            component ={NasaImages} 
            title = "Images NASA" 
            {...sceneDefaultStyles}
            initial ={true}
            />

            <Scene key= "nasa" 
            component = {NasaImagesDetail} 
            title = "Images NASA Detail"
            renderRightButton={RightButton}
            {...sceneDefaultStyles}
            />

          </Stack>
        </Router>  
      </Provider>
    );
  }
}


