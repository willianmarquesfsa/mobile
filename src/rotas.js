
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage, Alert } from 'react-native';
import { StackActions, NavigationActions, useNavigation, } from 'react-navigation';



import {FontAwesome5} from '@expo/vector-icons';
import { Container, Header, Body, Text, ListItem, Left, Right, Icon} from 'native-base';
import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContentScrollView, DrawerNavigation} from '@react-navigation/drawer';
import {Image,  View, Linking} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; 
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import { Value } from 'react-native-reanimated';



export class Rotas extends Component {


    constructor(props) {
        super(props);}

    render() {
        return (

<View style={{backgroundColor: '#1A2D3C', borderRadius: RFPercentage(18/10)}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Todos2')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Todos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Acessorios/Diversos2')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>AcessoriosDiversos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Beleza2')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Beleza</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Casa & Jardin2')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Casa & Jardin</Text></Body>
  </ListItem>
  
  <ListItem icon onPress={() => this.props.navigation.navigate('Eletronicos2')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Eletronicos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Masculina2')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Moda Masculina</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Feminina2')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Moda Feminina</Text></Body>
  </ListItem>
</View>

);
  }
}

export class Feiraguay extends Component {
   
    constructor(props) {
        super(props);}

    render() {
        return (

<View style={{backgroundColor: '#203242', borderRadius: RFPercentage(18/10)}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Todos')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Todos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Acessorios/Diversos')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>AcessoriosDiversos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Beleza')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Beleza</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Casa & Jardin')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Casa & Jardin</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Eletronicos')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Eletronicos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Masculina')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Moda Masculina</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Feminina')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Moda Feminina</Text></Body>
  </ListItem>
</View>

);
  }
}

export class Polimodass extends Component {

  constructor(props){
  super(props);
  }
render() {

  return (
    <View style={{backgroundColor: '#1A2D3C', borderRadius: RFPercentage(18/10)}}>
  <ListItem icon onPress={() => this.props.navigation.navigate('Todos3')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Todos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Acessorios/Diversos3')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>AcessoriosDiversos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Beleza3')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Beleza</Text></Body>
  </ListItem>
  
  <ListItem icon onPress={() => this.props.navigation.navigate('Eletronicos3')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Eletronicos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Masculina3')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Moda Masculina</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Feminina3')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Moda Feminina</Text></Body>
  </ListItem>
</View>
  )
}



}


export class Centrodacidade extends Component {

  constructor(props){
  super(props);
  }
render() {

  return (


<View style={{backgroundColor: '#203242', borderRadius: RFPercentage(18/10)}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Centro da Cidade')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Todos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Acessorios/Diversos3C')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>AcessoriosDiversos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Beleza3C')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Beleza</Text></Body>
  </ListItem>
  
  <ListItem icon onPress={() => this.props.navigation.navigate('Eletronicos3C')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Eletronicos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Masculina3C')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Moda Masculina</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Feminina3C')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Moda Feminina</Text></Body>
  </ListItem>
  
 
  
  
</View>
)
}
}


export class AgroePetShops extends Component {

  constructor(props){
  super(props);
  }
render() {

  return (

<View style={{backgroundColor: '#203242', borderRadius: RFPercentage(18/10)}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Agro e PetShps')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Todos</Text></Body>
  </ListItem>
   <ListItem  icon onPress={() => this.props.navigation.navigate('Hospedagem')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Hospedagem</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Nutrição e Estetica animal')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Nutrição e Estetica animal</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Veterinaria')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Veterinaria</Text></Body>
  </ListItem>
  </View>
  )
  }
  }


  export class Autoss extends Component {

    constructor(props){
    super(props);
    }
  render() {
  
    return (

  <View style={{backgroundColor: '#203242', borderRadius: RFPercentage(18/10)}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Autos')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Todos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Locação e seguros')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Locação e Seguros</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Chaparia e Pintura')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Chaparia e Pintura</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Mecanica e Eletrica')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Mecanica e Eletrica</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Lavagem')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Lavagem</Text></Body>
  </ListItem>
  </View>

  )
  }
  }


  export class CasaeConstruçãos extends Component {

    constructor(props){
    super(props);
    }
  render() {
  
    return (

  <View style={{backgroundColor: '#203242', borderRadius: RFPercentage(18/10)}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Casa e Construção')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Todos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Empreiteiras')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Empreiteiras</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Móveis Portões e Vidros Planejados')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Móveis Portões e Vidros Planejados</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Engenharia e Arquitetura')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Engenharia e Arquitetura</Text></Body>
  </ListItem>
  


  
  
  
  
</View>

    )}}


    export class EducaçãoeTreinamentoss extends Component {

      constructor(props){
      super(props);
      }
    render() {
    
      return (


    <View style={{backgroundColor: '#203242', borderRadius: RFPercentage(18/10)}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Educação e Treinamentos')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Todos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Ensino Superior')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Ensino Superior</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Cursos Livres e Profissionalizantes')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Cursos Livres e Profissionalizantes</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Ensino fundamental e medio')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Ensino  fundamental e médio</Text></Body>
  </ListItem>
  
</View>

      )}}

      export class Manutençãoeinformáticas extends Component {

        constructor(props){
        super(props);
        }
      render() {
      
        return (

      <View style={{backgroundColor: '#203242', borderRadius: RFPercentage(18/10)}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Todos4')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Todos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Celulares')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Celulares</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('informaticaeeletronica')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>CPUs e Notebooks</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('EletronicosS')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Eletronicos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('redeinternet')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Internet / Comunicação</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Refrigeração e Assistencia Técnica')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}}>Refrigeração e Assistencia Técnica</Text></Body>
  </ListItem>
  
  
  
  
</View>
        )}}



        export class SaúdeeBelezas extends Component {

          constructor(props){
          super(props);
          }
        render() {
        
          return (


        <View style={{backgroundColor: '#203242', borderRadius: RFPercentage(18/10)}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Saúde e Beleza')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Todos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Cabelo e Barba')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Cabelo e Barba</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Clinicas e Estetica')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Clinicas e Estetica</Text></Body>
  </ListItem>
 
  
  
</View>
          )}}


          export class ServiçosDiversoss extends Component {

            constructor(props){
            super(props);
            }
          render() {
          
            return (



          <View style={{backgroundColor: '#203242', borderRadius: RFPercentage(18/10)}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Serviços Diversos')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Todos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Chaveiros e Carimbos')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Chaveiros e Carimbos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Serviços Funerários')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Serviços Funerários</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Viagens Turismo e Transporte')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Viagens Turismo e Transporte</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Comunicação Visual e Fotografia')}>
    <Left><FontAwesome5 name="eye" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(23/10),fontFamily: 'Inter-Black'}} >Comunicação Visual e Fotografia</Text></Body>
  </ListItem>
  
 
  
  
</View>

            )
          }}


          export class Gggg extends Component {

            constructor(props){
            super(props);
            }
          render() {
          
            return (



              <View >
              <ListItem  icon onPress={() => this.props.navigation.navigate('Profile')}>
            
            <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >ss22CADASTRAR NEGÓCIO</Text></Body>
          </ListItem>
        
              <ListItem   icon onPress={() => this.props.navigation.navigate('Logon')}>
            
            <Body  style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >ENTRAR</Text></Body>
          </ListItem>
          </View>

            )
          }}



          