
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import {NasaImages, NasaImagesDetail} from './sections';
import Api, {fetchData, configureAxios} from '../api';


export default class App extends Component {
  
  componentWillMount(){
    configureAxios()
  }
  
  render() {
    //configureAxios();
   // lista = fetchData();
    return (
      <Router>
        <Stack key="root">
          <Scene key= "nasaImages" component ={NasaImages} title = "Images NASA" initial ={true}/>
          <Scene key= "nasa" component = {NasaImagesDetail} title = "Images NASA Detail"/>
        </Stack>
      </Router>  
    );
  }
}


