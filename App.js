import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, {Component} from 'react';
import {Routes,Routes2, Routes3} from './src/routes';
//import {AuthLoading} from './fonts';
import { StatusBar, View, Image, Dimensions, AsyncStorage} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

function counter(state, action) {
  
  if (typeof state === 'undefined') {
    return 0 ;
  }
  switch (action.type) {
    case 'INCREMENT':
      return state=1;
    case 'DECREMENT':
      return state=0;
    default:
      return state ;
  }
}

function counter2(state, action) {
  
  if (typeof state === 'undefined') {
    return 0 ;expo
  }
  switch (action.type) {
    case 'INCREMENT2':
      return state=1;
    case 'DECREMENT2':
      return state=0;
    default:
      return state ;
  }
}

async function counter3(state, action) {
  
       const value = await AsyncStorage.getItem('ongId');
        const value2 = await AsyncStorage.getItem('FotoInsta');
        const value3 = await AsyncStorage.getItem('Titulo');
        const reto = [value,value2,value3]

        const value4 =({link: String(value2), titu: String(value3)})
  
  if (typeof state === 'undefined') {
    //console.log({link: String(value2), titu: String(value3)})
    return value4 ;
  }
  switch (action.type) {
    
    case 'FOTO':      
      return state=value4;
    case 'FOTO2':
      return state=value2;
    default:
      return value4;
  }

}

// A very simple store
let store = createStore(combineReducers({ count: counter, count2: counter2, count3: counter3 }))

const CounterContainer2 = connect(state => ({ count: state.count, count2: state.count2, count3: state.count3 }))(Routes);
const CounterContainer3 = connect(state => ({ count: state.count }))(Routes3);
  
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };
       }
render() {
  return (
    <Provider store={store}>
    <CounterContainer2>
    <View>
<StatusBar backgroundColor="#0A1F30" barStyle="light-content" ></StatusBar>
</View>
  </CounterContainer2>
  </Provider>
  )}
  
  
  };







