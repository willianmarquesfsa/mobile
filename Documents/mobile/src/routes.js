import React  from 'react';
import logo from './assets/logo.png';
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';

 import {Image,  View} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; 
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';

//import { DrawerNavigation} from '@react-navigation';


import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContentScrollView, DrawerNavigation} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();

//import {HomeScreen, NotificationsScreen } from './pages/Barra';

import Incidents from './pages/Incidents';
import Destaques from './pages/Destaques';
//import Detail from './pages/Detail';  
//import { Title } from 'native-base';
//import Incidents2 from './pages/Incidents';
import { Container, Header, Body, Text, ListItem, Left, Right, Icon} from 'native-base';
//import { Header } from 'react-native/Libraries/NewAppScreen';
import {useFonts} from '@use-expo/font';
import { AppLoading } from 'expo'


import { StatusBar } from 'react-native';
class MenuComponent extends React.Component {
  
  
  constructor(propsss) {
    super(propsss);
    this.state = { item1: false, item2: false, item3: false, item4: false, item5: false, item6: false, item7: false, item8: false, item9: false, item10: false, item11: false };

  }
  
  

  render() {
    
    var icon1 = 'arrow-down';
    var icon2 = 'arrow-down';
    var icon3 = 'arrow-down';
    var icon4 = 'arrow-down';
    var icon5 = 'arrow-down';
    var icon6 = 'arrow-down';
    var icon7 = 'arrow-down';
    var icon8 = 'arrow-down';
    var icon9 = 'arrow-down';
    var icon10 = 'arrow-down';
    var icon11 = 'arrow-down';
    if (this.state.item1 == true) {
      icon1 = 'arrow-up';
    }
    if (this.state.item2 == true) {
      icon2 = 'arrow-up';
    }
    if (this.state.item3 == true) {
      icon3 = 'arrow-up';
    }
    if (this.state.item4 == true) {
      icon4 = 'arrow-up';
    }
    if (this.state.item5 == true) {
      icon5 = 'arrow-up';
    }
    if (this.state.item6 == true) {
      icon6 = 'arrow-up';
    }
    if (this.state.item7 == true) {
      icon7 = 'arrow-up';
    }
    if (this.state.item8 == true) {
      icon8 = 'arrow-up';
    }
    if (this.state.item9 == true) {
      icon9 = 'arrow-up';
    }
    if (this.state.item10 == true) {
      icon10 = 'arrow-up';
    }
    if (this.state.item11 == true) {
      icon11 = 'arrow-up';
    }
    
    
    
    return (
     
      <Container style={{ backgroundColor: '#0A1F30' }}>
      
      <Header style={{height: 170, backgroundColor: '#203242'}}>
      <Body style={{alignItems: 'center'}} >
      <Image
         style={{width: 130, height:130}}
         source={require('../assets/icon.png')}></Image>
        
      </Body>
    </Header>
    <DrawerContentScrollView {...this.props}>
         
    <ListItem  icon onPress={() => this.props.navigation.navigate('Destaques')}>
    
    <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >Pagina principal</Text></Body>
  </ListItem>

  <ListItem  icon onPress={() => this.setState({ item1: !this.state.item1, item2: !this.state.item2, item3: !this.state.item3  })}>
    
    <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >Centros Comerciais</Text></Body>
  </ListItem>

  


        <ListItem icon onPress={() => this.setState({ item1: !this.state.item1 })}>
          <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Feiraguay</Text></Body>
          <Right><Icon name={icon1} style={{color: '#FCAD02'}}/></Right>
        </ListItem>

        {this.state.item1 ? (
             
          <View style={{backgroundColor: '#203242', borderRadius: 15}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Todos')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Todos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Acessorios/Diversos')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>AcessoriosDiversos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Beleza')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>Beleza</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Casa & Jardin')}>
    <Left><MaterialCommunityIcons name="floor-lamp" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>Casa & Jardin</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Eletronicos')}>
    <Left><FontAwesome5 name="microchip" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>Eletronicos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Masculina')}>
    <Left><FontAwesome5 name="male" size={RFPercentage(24/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>Moda Masculina</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Feminina')}>
    <Left><FontAwesome5 name="female" size={RFPercentage(24/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>Moda Feminina</Text></Body>
  </ListItem>
</View>)
             : null}

        <ListItem icon onPress={() => this.setState({ item2: !this.state.item2 })}>
          <Left><FontAwesome5 name="layer-group" color='#FCAD02'/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Feira Portal</Text></Body>
          <Right><Icon name={icon2} style={{color: '#FCAD02'}} /></Right>
          
        </ListItem>

        {this.state.item2 ? ( <View style={{backgroundColor: '#1A2D3C', borderRadius: 15}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Todos2')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Todos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Acessorios/Diversos2')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>AcessoriosDiversos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Beleza2')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Beleza</Text></Body>
  </ListItem>
  
  <ListItem icon onPress={() => this.props.navigation.navigate('Eletronicos2')}>
    <Left><FontAwesome5 name="microchip" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Eletronicos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Masculina2')}>
    <Left><FontAwesome5 name="male" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Moda Masculina</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Feminina2')}>
    <Left><FontAwesome5 name="female" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Moda Feminina</Text></Body>
  </ListItem>
</View>) : null}

        <ListItem icon onPress={() => this.setState({ item3: !this.state.item3 })}>
        <Left><FontAwesome5 name="layer-group" color='#FCAD02'/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Polimodas</Text></Body>
          <Right><Icon name={icon3} style={{color: '#FCAD02'}}/></Right>
          
        </ListItem>

        {this.state.item3 ? (
          <View style={{backgroundColor: '#1A2D3C', borderRadius: 15}}>
  <ListItem icon onPress={() => this.props.navigation.navigate('Todos3')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}} >Todos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Acessorios/Diversos3')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>AcessoriosDiversos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Beleza3')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Beleza</Text></Body>
  </ListItem>
  
  <ListItem icon onPress={() => this.props.navigation.navigate('Eletronicos3')}>
    <Left><FontAwesome5 name="microchip" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Eletronicos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Masculina3')}>
    <Left><FontAwesome5 name="male" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Moda Masculina</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Feminina3')}>
    <Left><FontAwesome5 name="female" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Moda Feminina</Text></Body>
  </ListItem>
</View>
    ) : null}
    <ListItem icon onPress={() => this.setState({ item11: !this.state.item11 })}>
          <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Centro da Cidade</Text></Body>
          <Right><Icon name={icon11} style={{color: '#FCAD02'}}/></Right>
        </ListItem>

        {this.state.item11 ? (
             
          <View style={{backgroundColor: '#203242', borderRadius: 15}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Centro da Cidade')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Todos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Acessorios/Diversos3C')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>AcessoriosDiversos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Beleza3C')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Beleza</Text></Body>
  </ListItem>
  
  <ListItem icon onPress={() => this.props.navigation.navigate('Eletronicos3C')}>
    <Left><FontAwesome5 name="microchip" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Eletronicos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Masculina3C')}>
    <Left><FontAwesome5 name="male" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Moda Masculina</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Moda Feminina3C')}>
    <Left><FontAwesome5 name="female" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2',fontSize: RFPercentage(2),fontFamily: 'Inter-BlackC'}}>Moda Feminina</Text></Body>
  </ListItem>
  
 
  
  
</View>)
             : null}


    <ListItem  icon onPress={() => this.setState({ item4: !this.state.item4  })}>
    
    <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >Serviços</Text></Body>
  </ListItem>

    <ListItem icon onPress={() => this.setState({ item5: !this.state.item5 })}>
          <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Agro e Pets</Text></Body>
          <Right><Icon name={icon5} style={{color: '#FCAD02'}}/></Right>
        </ListItem>

        {this.state.item5 ? (
             
          <View style={{backgroundColor: '#203242', borderRadius: 15}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Agro e PetShps')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Todos</Text></Body>
  </ListItem>
   <ListItem  icon onPress={() => this.props.navigation.navigate('Hospedagem')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Hospedagem</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Nutrição e Estetica animal')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Nutrição e Estetica animal</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Veterinaria')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>Veterinaria</Text></Body>
  </ListItem>

  
  
  
  
</View>)
             : null}


             <ListItem icon onPress={() => this.setState({ item6: !this.state.item6 })}>
          <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Autos</Text></Body>
          <Right><Icon name={icon6} style={{color: '#FCAD02'}}/></Right>
        </ListItem>

        {this.state.item6 ? (
             
          <View style={{backgroundColor: '#203242', borderRadius: 15}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Autos')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Todos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Locação e seguros')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Locação e Seguros</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Chaparia e Pintura')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Chaparia e Pintura</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Mecanica e Eletrica')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Mecanica e Eletrica</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Lavagem')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Lavagem</Text></Body>
  </ListItem>


  
  
  
  
</View>)
             : null}


             <ListItem icon onPress={() => this.setState({ item7: !this.state.item7 })}>
          <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Casa e Construção</Text></Body>
          <Right><Icon name={icon7} style={{color: '#FCAD02'}}/></Right>
        </ListItem>

        {this.state.item7 ? (
             
          <View style={{backgroundColor: '#203242', borderRadius: 15}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Casa e Construção')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Todos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Empreiteiras')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Empreiteiras</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Móveis Portões e Vidros Planejados')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Móveis Portões e Vidros Planejados</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Engenharia e Arquitetura')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Engenharia e Arquitetura</Text></Body>
  </ListItem>
  


  
  
  
  
</View>)
             : null}

             <ListItem icon onPress={() => this.setState({ item8: !this.state.item8 })}>
          <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Educação e Treinamentos</Text></Body>
          <Right><Icon name={icon8} style={{color: '#FCAD02'}}/></Right>
        </ListItem>

        {this.state.item8 ? (
             
          <View style={{backgroundColor: '#203242', borderRadius: 15}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Educação e Treinamentos')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Todos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Ensino Superior')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Ensino Superior</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Cursos Livres e Profissionalizantes')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Cursos Livres e Profissionalizantes</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Ensino fundamental e medio')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Ensino  fundamental e médio</Text></Body>
  </ListItem>
  
</View>)
             : null}


    

    <ListItem icon onPress={() => this.setState({ item4: !this.state.item4 })}>
          <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Manutenção e informática</Text></Body>
          <Right><Icon name={icon4} style={{color: '#FCAD02'}}/></Right>
        </ListItem>

        {this.state.item4 ? (
             
          <View style={{backgroundColor: '#203242', borderRadius: 15}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Todos4')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Todos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Celulares')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>Celulares</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('informaticaeeletronica')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>CPUs e Notebooks</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('EletronicosS')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>Eletronicos</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('redeinternet')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>Internet / Comunicação</Text></Body>
  </ListItem>
  <ListItem icon onPress={() => this.props.navigation.navigate('Refrigeração e Assistencia Técnica')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02'/></Left>
    <Body><Text  style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}}>Refrigeração e Assistencia Técnica</Text></Body>
  </ListItem>
  
  
  
  
</View>)
             : null}


             <ListItem icon onPress={() => this.setState({ item9: !this.state.item9 })}>
          <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Saúde e Beleza</Text></Body>
          <Right><Icon name={icon9} style={{color: '#FCAD02'}}/></Right>
        </ListItem>

        {this.state.item9 ? (
             
          <View style={{backgroundColor: '#203242', borderRadius: 15}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Saúde e Beleza')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Todos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Cabelo e Barba')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Cabelo e Barba</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Clinicas e Estetica')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Clinicas e Estetica</Text></Body>
  </ListItem>
 
  
  
</View>)
             : null}

             <ListItem icon onPress={() => this.setState({ item10: !this.state.item10 })}>
          <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
          <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Serviços Diversos</Text></Body>
          <Right><Icon name={icon10} style={{color: '#FCAD02'}}/></Right>
        </ListItem>

        {this.state.item10 ? (
             
          <View style={{backgroundColor: '#203242', borderRadius: 15}}>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Serviços Diversos')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Todos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Chaveiros e Carimbos')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Chaveiros e Carimbos</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Serviços Funerários')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Serviços Funerários</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Viagens Turismo e Transporte')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Viagens Turismo e Transporte</Text></Body>
  </ListItem>
  <ListItem  icon onPress={() => this.props.navigation.navigate('Comunicação Visual e Fotografia')}>
    <Left><FontAwesome5 name="layer-group" size={RFPercentage(18/10)} color='#FCAD02' /></Left>
    <Body ><Text style={{color: '#F0F0F2', fontSize: RFPercentage(21/10),fontFamily: 'Inter-BlackC'}} >Comunicação Visual e Fotografia</Text></Body>
  </ListItem>
  
 
  
  
</View>)
             : null}

             <ListItem  icon onPress={() => this.props.navigation.navigate('Bares e Restudantes')}>
    
    <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >Bares e Restaurantes</Text></Body>
  </ListItem>

    
        </DrawerContentScrollView>
      </Container>
    )
    
  }
}

const e = 'Eletronicos';
const a = 'CasaeJardin';
const b = 'AcessoriosDiversos';
const x = 'ModaMasculina';
const y = 'ModaFeminina';
const z = 'Beleza';
const celula = 'Celulares'
const redeinternetv = 'Internet e Comunicação'
const cpuenote = 'CPUs e Notebooks';
const eletr = 'EletronicosS';
const reass = 'Refrigeração e Assistencia Técnica';
const segun = 'Feiraguay';
const terc = 'FeiraPortal';
const quart = 'Polimodas';
const quint = 'Manutenção em informática';
const sext = 'Agro e PetShos';
const setm = 'Nutrição e Estetica animal';
const locase = 'Locação e seguros';
const chapin = 'Chaparia e Pintura';
const mecpin = 'Mecanica e Eletrica';
const lava = 'Lavagem';
const empre = 'Empreiteiras'
const movpla = 'Móveis Portões e Vidros Planejados';
const enge = 'Engenharia e Arquitetura';
const enssu = 'Ensino Superior';
const culipro = 'Cursos Livres e Profissionalizantes';
const enfume = 'Ensino fundamental e médio';
const cabebar = 'Cabelo e Barba';
const cliees = 'Clinicas e Estetica';
const chacar = 'Chaveiros e Carimbos';
const serfu = 'Serviços Funerários';
const vitrtu = 'Viagens Turismo e Transporte';
const covifo = 'Comunicação Visual e Fotografia';
const derc4 = 'Bares e Restudantes';
const derc3 = 'Centro da Cidade';
const derc2 = 'Serviços Diversos'
const derc1 = 'Saúde e Beleza';
const nona = 'Casa e Construção';
const derc = 'Educação e Treinamentos';
const oit = 'Autos';
const hosp = 'Hospedagem';
const veter = 'Veterinaria'
const grupoall = 'Todos';
const grupoall2 = 'Todoss';


const  BareseRestudantes = props => (
  Incidents(grupoall, derc4)
);
const  ModaFeminina3C = props => (
  Incidents(y, derc3)
);
const  ModaMasculina3C = props => (
  Incidents(x, derc3)
);
const Eletronicos3C = props => (
  Incidents(e, derc3)
);
const CasaeJardin3C = props => (
  Incidents(a, derc3)
);
const Beleza3C = props => (
  Incidents(z, derc3)
);
const AcessoriosDiversos3C = props => (
  Incidents(b, derc3)
);
const CentrodaCidade = props => (
  Incidents(grupoall, derc3)
);
const RefrigeraçãoeAssistenciaTécnica = props => (
  Incidents(reass, quint)
);
const EletronicosS = props => (
  Incidents(eletr, quint)
);
const ComunicaçãoVisualeFotografia = props => (
  Incidents(covifo, derc2)
);
const ViagensTurismoeTransporte = props => (
  Incidents(vitrtu, derc2)
);
const ServiçosFunerários = props => (
  Incidents(serfu, derc2)
);
const ChaveiroseCarimbos = props => (
  Incidents(chacar, derc2)
);
const ServiçosDiversos = props => (
  Incidents(grupoall, derc2)
);
const ClinicaseEstetica = props => (
  Incidents(cliees, derc1)
);
const CabeloeBarba = props => (
  Incidents(cabebar, derc1)
);
const SaúdeeBeleza = props => (
  Incidents(grupoall, derc1)
);
const Ensinofundamentalemedio = props => (
  Incidents(enfume, derc)
);
const CursosLivreseProfissionalizantes = props => (
  Incidents(culipro, derc)
);
const EnsinoSuperior = props => (
  Incidents(enssu, derc)
);
const EducaçãoeTreinamentos = props => (
  Incidents(grupoall, derc)
);
const EngenhariaeArquitetura = props => (
  Incidents(enge, nona)
);

const MóveisPortõeseVidrosPlanejados = props => (
  Incidents(movpla, nona)
);
const Empreiteiras = props => (
  Incidents(empre, nona)
);

const CasaeConstrução = props => (
  Incidents(grupoall, nona)
);

const Lavagem = props => (
  Incidents(lava, oit)
);
const MecanicaeEletrica = props => (
  Incidents(mecpin, oit)
);

const ChapariaePintura = props => (
  Incidents(chapin, oit)
);
const Locaçãoeseguros = props => (
  Incidents(locase, oit)
);


const Autos = props => (
  Incidents(grupoall, oit)
);


const Veterinaria = props => (
  Incidents(veter, sext)
)

const Hospedagem = props => (
  Incidents(hosp, sext)
)




const NutriçãoeEsteticaanimal = props => (
  Incidents(setm, sext)
)


const AgroePetShps = props => (
  Incidents(grupoall, sext)
);



const CPUsnotebooks = props => (
  Incidents(cpuenote, quint)
);


const redeinternet = props => (
  Incidents(redeinternetv, quint)
);

const Celulares = props => (
  Incidents(celula, quint)
);
Celulares


const Serviços = props => (
  Incidents(grupoall, quint)
);




const Eletronicos3 = props => (
  Incidents(e, quart)
);

const CasaeJardin3 = props => (
  Incidents(a, quart)
);

const AcessoriosDiversos3= props => (
  Incidents(b, quart)
);


const Beleza3 = props => (
  Incidents(z, quart)
);

const ModaMasculina3 = props => (
  Incidents(x,quart)
);

const ModaFeminina3 = props => (
  Incidents(y, quart)
);

const Polimodas = props => (
  Incidents(grupoall, quart)
);







const Eletronicos2 = props => (
  Incidents(e, terc)
);

const CasaeJardin2 = props => (
  Incidents(a, terc)
);

const AcessoriosDiversos2= props => (
  Incidents(b, terc)
);


const Beleza2 = props => (
  Incidents(z, terc)
);

const ModaMasculina2 = props => (
  Incidents(x, terc)
);

const ModaFeminina2 = props => (
  Incidents(y, terc)
);

const FeiraPortal = props => (
  Incidents(grupoall, terc)
);

const Eletronicos = props => (
  Incidents(e, segun)
);

const CasaeJardin = props => (
  Incidents(a, segun)
);

const AcessoriosDiversos = props => (
  Incidents(b, segun)
);


const Beleza = props => (
  Incidents(z, segun)
);

const ModaMasculina = props => (
  Incidents(x, segun)
);

const ModaFeminina = props => (
  Incidents(y, segun)
);

const FeiraGuay = props => (
  Incidents(grupoall, segun)
);


const Destaquess = props => (
  Destaques(grupoall2, segun)
);


function MyDrawer() {

  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/BellotaText-Bold.ttf'),
    'Inter-BlackC': require('./assets/fonts/BellotaText-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {


  return (
    
  <Drawer.Navigator
  initialRouteName={Destaques}
  drawerContent={props => <MenuComponent {...props}  />}
  drawerType={'slide'} 
  drawerStyle={{width: '60%'}}>
     
     <Drawer.Screen name="Destaques" component={Destaquess}/>  

<Drawer.Screen name="Todos" component={FeiraGuay}/>
<Drawer.Screen name="Acessorios/Diversos" component={AcessoriosDiversos}/>
<Drawer.Screen name="Beleza" component={Beleza}/>
<Drawer.Screen name="Casa & Jardin" component={CasaeJardin}/>
<Drawer.Screen name="Eletronicos" component={Eletronicos}/>
<Drawer.Screen name="Moda Masculina" component={ModaMasculina}/>
<Drawer.Screen name="Moda Feminina" component={ModaFeminina}/>

<Drawer.Screen name="Todos2" component={FeiraPortal}/>
<Drawer.Screen name="Acessorios/Diversos2" component={AcessoriosDiversos2}/>
<Drawer.Screen name="Beleza2" component={Beleza2}/>
<Drawer.Screen name="Casa & Jardin2" component={CasaeJardin2}/>
<Drawer.Screen name="Eletronicos2" component={Eletronicos2}/>
<Drawer.Screen name="Moda Masculina2" component={ModaMasculina2}/>
<Drawer.Screen name="Moda Feminina2" component={ModaFeminina2}/>

<Drawer.Screen name="Todos3" component={Polimodas}/>
<Drawer.Screen name="Acessorios/Diversos3" component={AcessoriosDiversos3}/>
<Drawer.Screen name="Beleza3" component={Beleza3}/>
<Drawer.Screen name="Casa & Jardin3" component={CasaeJardin3}/>
<Drawer.Screen name="Eletronicos3" component={Eletronicos3}/>
<Drawer.Screen name="Moda Masculina3" component={ModaMasculina3}/>
<Drawer.Screen name="Moda Feminina3" component={ModaFeminina3}/>

<Drawer.Screen name="Centro da Cidade" component={CentrodaCidade}/>
<Drawer.Screen name="Acessorios/Diversos3C" component={AcessoriosDiversos3C}/>
<Drawer.Screen name="Beleza3C" component={Beleza3C}/>
<Drawer.Screen name="Casa & Jardin3C" component={CasaeJardin3C}/>
<Drawer.Screen name="Eletronicos3C" component={Eletronicos3C}/>
<Drawer.Screen name="Moda Masculina3C" component={ModaMasculina3C}/>
<Drawer.Screen name="Moda Feminina3C" component={ModaFeminina3C}/>

<Drawer.Screen name="Todos4" component={Serviços}/>
<Drawer.Screen name="informaticaeeletronica" component={CPUsnotebooks}/>
<Drawer.Screen name="redeinternet" component={redeinternet}/>
<Drawer.Screen name="Celulares" component={Celulares}/>
<Drawer.Screen name="EletronicosS" component={EletronicosS}/>
<Drawer.Screen name="Refrigeração e Assistencia Técnica" component={RefrigeraçãoeAssistenciaTécnica}/>


<Drawer.Screen name="Agro e PetShps" component={AgroePetShps}/>
<Drawer.Screen name="Nutrição e Estetica animal" component={NutriçãoeEsteticaanimal}/>
<Drawer.Screen name="Hospedagem" component={Hospedagem}/>
<Drawer.Screen name="Veterinaria" component={Veterinaria}/>

<Drawer.Screen name="Autos" component={Autos}/>
<Drawer.Screen name="Locação e seguros" component={Locaçãoeseguros}/>
<Drawer.Screen name="Chaparia e Pintura" component={ChapariaePintura}/>
<Drawer.Screen name="Mecanica e Eletrica" component={MecanicaeEletrica}/>
<Drawer.Screen name="Lavagem" component={Lavagem}/>

<Drawer.Screen name="Casa e Construção" component={CasaeConstrução}/>
<Drawer.Screen name="Empreiteiras" component={Empreiteiras}/>
<Drawer.Screen name="Móveis Portões e Vidros Planejados" component={MóveisPortõeseVidrosPlanejados}/>
<Drawer.Screen name="Engenharia e Arquitetura" component={EngenhariaeArquitetura}/>

<Drawer.Screen name="Educação e Treinamentos" component={EducaçãoeTreinamentos}/>
<Drawer.Screen name="Ensino Superior" component={EnsinoSuperior}/>
<Drawer.Screen name="Cursos Livres e Profissionalizantes" component={CursosLivreseProfissionalizantes}/>
<Drawer.Screen name="Ensino fundamental e medio" component={Ensinofundamentalemedio}/>

<Drawer.Screen name="Saúde e Beleza" component={SaúdeeBeleza}/>
<Drawer.Screen name="Cabelo e Barba" component={CabeloeBarba}/>
<Drawer.Screen name="Clinicas e Estetica" component={ClinicaseEstetica}/>

<Drawer.Screen name="Serviços Diversos" component={ServiçosDiversos}/>
<Drawer.Screen name="Chaveiros e Carimbos" component={ChaveiroseCarimbos}/>
<Drawer.Screen name="Serviços Funerários" component={ServiçosFunerários}/>
<Drawer.Screen name="Viagens Turismo e Transporte" component={ViagensTurismoeTransporte}/>
<Drawer.Screen name="Comunicação Visual e Fotografia" component={ComunicaçãoVisualeFotografia}/>

<Drawer.Screen name="Bares e Restudantes" component={BareseRestudantes}/>




 
</Drawer.Navigator>
  )
  }
}






export default function Routes() {

  return (
    
    
        <NavigationContainer >
           <View>
<StatusBar backgroundColor="#0A1F30" barStyle="light-content" ></StatusBar>
</View>
  
      <MyDrawer />
        </NavigationContainer>
        
    );
}

