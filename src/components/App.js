
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import {NasaImages} from './sections';
import Api, {fetchData, configureAxios} from '../api';


export default class App extends Component {
  render() {
    //configureAxios();
   // lista = fetchData();
    return (
      <Router>
        <Stack key="root">
          <Scene key= "nasaImages" component ={NasaImages} title = "Images NASA"/>

        </Stack>
      </Router>  
    );
  }
}


