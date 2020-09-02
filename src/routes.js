import React, { Component }   from 'react';
import {View, Button, Linking} from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator} from '@react-navigation/drawer';
import Incidents from './pages/Incidents';
import Destaques from './pages/Destaques';
import Profile from './pages/Profile';
import Logon from './pages/Logon';
import Postagem from './pages/Postagem';
import Newpost from './pages/Newpost';
import { AppLoading } from 'expo'
import { StatusBar, AsyncStorage } from 'react-native';
import MenuComponent from './MenuComponent'
import MenuComponentcopy from './MenuComponentcopy'
import * as Font from 'expo-font';
//import { Container, Header, Body, Text, ListItem, Left, Right, Icon} from 'native-base';
import { Provider, connect } from 'react-redux';
//import { createStore, combineReducers } from 'redux';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { RFPercentage } from "react-native-responsive-fontsize";
//import { useNavigation, DrawerActions, useRoute } from '@react-navigation/native';


let customFonts = {
  'Inter-Black': require('./assets/fonts/BellotaText-Bold.ttf'),
    'Inter-BlackC': require('./assets/fonts/BellotaText-Regular.ttf'),
};

function sendWhatsapp() {
  Linking.openURL(`http://acheifsa.com.umbler.net`);
};

const Drawer = createDrawerNavigator();


const InciRedux = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Feiraguay' }))(Incidents);
const BareseRestudantes = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Bares e Restudantes' }))(Incidents);

const ModaFeminina3C = connect(state => ({ count: state.count, 
                                      x:'ModaFeminina', 
                                      segun: 'Centro da Cidade' }))(Incidents);
const ModaMasculina3C = connect(state => ({ count: state.count, 
                                      x:'ModaMasculina', 
                                      segun: 'Centro da Cidade' }))(Incidents);


const Eletronicos3C = connect(state => ({ count: state.count, 
                                      x:'Eletronicos', 
                                      segun: 'Centro da Cidade' }))(Incidents);

const CasaeJardin3C = connect(state => ({ count: state.count, 
                                      x:'CasaeJardin', 
                                      segun: 'Centro da Cidade' }))(Incidents);

const Beleza3C = connect(state => ({ count: state.count, 
                                      x:'Beleza', 
                                      segun: 'Centro da Cidade' }))(Incidents);
const AcessoriosDiversos3C = connect(state => ({ count: state.count, 
                                      x:'AcessoriosDiversos', 
                                      segun: 'Centro da Cidade' }))(Incidents);
const CentrodaCidade = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Centro da Cidade' }))(Incidents);

const RefrigeraçãoeAssistenciaTécnica = connect(state => ({ count: state.count, 
                                      x:'Refrigeração e Assistencia Técnica', 
                                      segun: 'Manutenção em informática' }))(Incidents);
const EletronicosS = connect(state => ({ count: state.count, 
                                      x:'EletronicosS', 
                                      segun: 'Manutenção em informática' }))(Incidents);
const ComunicaçãoVisualeFotografia = connect(state => ({ count: state.count, 
                                      x:'Comunicação Visual e Fotografia', 
                                      segun: 'Serviços Diversos' }))(Incidents);
const ViagensTurismoeTransporte = connect(state => ({ count: state.count, 
                                      x:'Viagens Turismo e Transporte', 
                                      segun: 'Serviços Diversos' }))(Incidents);
const ServiçosFunerários = connect(state => ({ count: state.count, 
                                      x:'Serviços Funerários', 
                                      segun: 'Serviços Diversos' }))(Incidents);
const ChaveiroseCarimbos = connect(state => ({ count: state.count, 
                                      x:'Chaveiros e Carimbos', 
                                      segun: 'Serviços Diversos' }))(Incidents);
const ServiçosDiversos = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Serviços Diversos' }))(Incidents);
  

const ClinicaseEstetica = connect(state => ({ count: state.count, 
                                      x:'Clinicas e Estetica', 
                                      segun: 'Saúde e Beleza'}))(Incidents);
    
const CabeloeBarba = connect(state => ({ count: state.count, 
                                      x:'Cabelo e Barba', 
                                      segun: 'Saúde e Beleza'}))(Incidents);
const SaúdeeBeleza = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Saúde e Beleza'}))(Incidents);

const Ensinofundamentalemedio = connect(state => ({ count: state.count, 
                                      x:'Ensino fundamental e médio', 
                                      segun: 'Educação e Treinamentos'}))(Incidents);
const CursosLivreseProfissionalizantes = connect(state => ({ count: state.count, 
                                      x:'Cursos Livres e Profissionalizantes', 
                                      segun: 'Educação e Treinamentos'}))(Incidents);
  
const EnsinoSuperior = connect(state => ({ count: state.count, 
                                      x:'Ensino Superior', 
                                      segun: 'Educação e Treinamentos'}))(Incidents);
    
const EducaçãoeTreinamentos = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Educação e Treinamentos'}))(Incidents);
      
const EngenhariaeArquitetura = connect(state => ({ count: state.count, 
                                      x:'Engenharia e Arquitetura', 
                                      segun: 'Casa e Construção'}))(Incidents);
const MóveisPortõeseVidrosPlanejados = connect(state => ({ count: state.count, 
                                      x:'Móveis Portões e Vidros Planejados', 
                                      segun: 'Casa e Construção'}))(Incidents);
const Empreiteiras = connect(state => ({ count: state.count, 
                                      x:'Empreiteiras', 
                                      segun: 'Casa e Construção'}))(Incidents);
const CasaeConstrução = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Casa e Construção'}))(Incidents);
const Lavagem = connect(state => ({ count: state.count, 
                                      x:'Lavagem', 
                                      segun: 'Autos'}))(Incidents);
const MecanicaeEletrica = connect(state => ({ count: state.count, 
                                      x:'Mecanica e Eletrica', 
                                      segun: 'Autos'}))(Incidents);
const ChapariaePintura = connect(state => ({ count: state.count, 
                                      x:'Chaparia e Pintura', 
                                      segun: 'Autos'}))(Incidents);
const Locaçãoeseguros = connect(state => ({ count: state.count, 
                                      x:'Locação e seguros', 
                                      segun: 'Autos'}))(Incidents);     

const Autos = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Autos'}))(Incidents);
const Veterinaria = connect(state => ({ count: state.count, 
                                     x:'Veterinaria', 
                                     segun: 'Agro e PetShos'}))(Incidents);      

const Hospedagem = connect(state => ({ count: state.count, 
                                      x:'Hospedagem', 
                                      segun: 'Agro e PetShos'}))(Incidents);
const NutriçãoeEsteticaanimal = connect(state => ({ count: state.count, 
                                      x:'Nutrição e Estetica animal', 
                                      segun: 'Agro e PetShos'}))(Incidents);
const AgroePetShps = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Agro e PetShos'}))(Incidents);
const CPUsnotebooks = connect(state => ({ count: state.count, 
                                      x:'CPUs e Notebooks', 
                                      segun: 'Manutenção em informática'}))(Incidents);
const redeinternet = connect(state => ({ count: state.count, 
                                      x:'Internet e Comunicação', 
                                      segun: 'Manutenção em informática'}))(Incidents);
const Celulares = connect(state => ({ count: state.count, 
                                      x:'Celulares', 
                                      segun: 'Manutenção em informática'}))(Incidents);


const Serviços = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Manutenção em informática'}))(Incidents);

const Eletronicos3 = connect(state => ({ count: state.count, 
                                      x:'Eletronicos', 
                                      segun: 'Polimodas'}))(Incidents);
const CasaeJardin3 = connect(state => ({ count: state.count, 
                                      x:'CasaeJardin', 
                                      segun: 'Polimodas'}))(Incidents);
const AcessoriosDiversos3 = connect(state => ({ count: state.count, 
                                      x:'AcessoriosDiversos', 
                                      segun: 'Polimodas'}))(Incidents); 

 const Beleza3 = connect(state => ({ count: state.count, 
                                      x:'Beleza', 
                                      segun: 'Polimodas'}))(Incidents);

const ModaMasculina3 = connect(state => ({ count: state.count, 
                                      x:'ModaMasculina', 
                                      segun: 'Polimodas'}))(Incidents);

const ModaFeminina3 = connect(state => ({ count: state.count, 
                                      x:'ModaMasculina', 
                                      segun: 'Polimodas'}))(Incidents);
const Polimodas = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Polimodas'}))(Incidents);

const Eletronicos2 = connect(state => ({ count: state.count, 
                                      x:'Eletronicos', 
                                      segun: 'FeiraPortal'}))(Incidents);
const CasaeJardin2 = connect(state => ({ count: state.count, 
                                      x:'CasaeJardin', 
                                      segun: 'FeiraPortal'}))(Incidents);

const AcessoriosDiversos2 = connect(state => ({ count: state.count, 
                                      x:'AcessoriosDiversos', 
                                      segun: 'FeiraPortal'}))(Incidents);
const Beleza2 = connect(state => ({ count: state.count, 
                                      x:'Beleza', 
                                      segun: 'FeiraPortal'}))(Incidents);
const ModaMasculina2 = connect(state => ({ count: state.count, 
                                      x:'ModaMasculina', 
                                      segun: 'FeiraPortal'}))(Incidents);
const ModaFeminina2 = connect(state => ({ count: state.count, 
                                      x:'ModaFeminina', 
                                      segun: 'FeiraPortal'}))(Incidents);
const FeiraPortal = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'FeiraPortal'}))(Incidents);
const Eletronicos = connect(state => ({ count: state.count, 
                                      x:'Eletronicos', 
                                     segun: 'Feiraguay'}))(Incidents); 

const CasaeJardin = connect(state => ({ count: state.count, 
                                      x:'CasaeJardin', 
                                      segun: 'Feiraguay'}))(Incidents); 

const AcessoriosDiversos = connect(state => ({ count: state.count, 
                                      x:'AcessoriosDiversos', 
                                      segun: 'Feiraguay'}))(Incidents);

const Beleza = connect(state => ({ count: state.count, 
                                      x:'Beleza', 
                                      segun: 'Feiraguay'}))(Incidents);
const ModaMasculina = connect(state => ({ count: state.count, 
                                      x:'ModaMasculina', 
                                      segun: 'Feiraguay'}))(Incidents); 

const ModaFeminina = connect(state => ({ count: state.count, 
                                       x:'ModaFeminina', 
                                     segun: 'Feiraguay'}))(Incidents);
const FeiraGuay = connect(state => ({ count: state.count, 
                                      x:'Todos', 
                                      segun: 'Feiraguay'}))(Incidents);


const Desta = connect(state => ({ count: state.count, 
                                        x:'Todos', 
                                        segun: 'Feiraguay'}))(Destaques);


export class Routesff2 extends Component {

  constructor(props) {
    super(props);
    
     
    this.state = {
      
      fontsLoaded: false
    }
       
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    //console.log(this.InputChange()+'qqq')
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render()
  {
   
    if (this.state.fontsLoaded) {
 
  return (
    
  <Drawer.Navigator
  initialRouteName={Desta}
  drawerContent={props => <MenuComponentcopy   {...props}  />}
  drawerType={'slide'} 
  drawerStyle={{width: '75%'}}>
     
     <Drawer.Screen name="Destaques" component={Desta}/>  

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

<Drawer.Screen name="Logon" component={CounterContainer3d3}  />

<Drawer.Screen name="Profile" component={Profile} />
<Drawer.Screen name="Postagem" component={Postagem}/>
<Drawer.Screen name="Newpost" component={Newpost}/>


 
</Drawer.Navigator>
  )
    }
    else { return <AppLoading></AppLoading> } 
  }
}


const CounterContainer3d3 = connect(state => ({ count: state.count }))(Logon);

const CounterContainer3d3b = connect(state => ({ count: state.count, count2: state.count2, count3: state.count3 }))(MenuComponent);

const CounterContainer3d3bfffd = connect(state => ({ count2: state.count2 }))(Postagem);

const Countdfdf= connect(state => ({ count2: state.count2, count3: state.count3 }))(Newpost);

//const InciRedux = connect(state => ({ count: state.count }))(Incidents);

export class Routesff extends Component {

  constructor(props) {
    super(props);
    
    
    this.state = {
      
      fontsLoaded: false
    }
       
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    //console.log(this.InputChange()+'qqq')
    this.setState({ fontsLoaded: true });
  }
  componentDidMount(){
    this._loadFontsAsync();
  }
  componentWillUnmount(){
    this._loadFontsAsync()
  }
  
 
  render()
  {
   
    if (this.state.fontsLoaded) {
 
  return (
    
  <Drawer.Navigator
  initialRouteName={Desta}
  drawerContent={props => <CounterContainer3d3b   {...props}  />}
  drawerType={'slide'} 
  drawerStyle={{width: '85%'}}>
     
     <Drawer.Screen name="Destaques" component={Desta}/>  

<Drawer.Screen name="Todos" component={InciRedux} />
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

<Drawer.Screen name="Logon" component={CounterContainer3d3}  />

<Drawer.Screen name="Profile" component={Profile} />
<Drawer.Screen name="Postagem" component={CounterContainer3d3bfffd}/>
<Drawer.Screen name="Newpost" component={Countdfdf}/>
 
</Drawer.Navigator>
  )
    }
    else { return <AppLoading></AppLoading> } 
  }
}

export function Routes({ count, dispatch, navigation }) {

  //console.log(count)
   
  //if(count == 0){
    return(
    <Routes2 navigation={navigation} dispatch={dispatch} count={count} ></Routes2>
  )
}

/*if(count == 1){
  return(
  <Routes4 navigation={navigation} dispatch={dispatch} count={count} ></Routes4>
)
}
}
*/

const CounterContainer33 = connect(state => ({ count: state.count, count2: state.count2 }))(Routesff);

const CounterContainer33bb = connect(state => ({ count: state.count }))(Routesff2);

export class Routes2 extends Component {

  


  constructor(props) {
    super(props);

    this.state = {
      visual: 's'
    }
   
}


render() {

  return (
  
        <NavigationContainer >
           <View>
<StatusBar backgroundColor="#0A1F30" barStyle="dark-content" ></StatusBar>
</View>
  
      <CounterContainer33  />
        </NavigationContainer>
        
    );
}
}


export function Routes3({ count, dispatch, navigation }) {

  //console.log(count)
  return <Routes4 navigation={navigation} dispatch={dispatch} count={count} ></Routes4>
}

export class Routes4 extends Component {

  


  constructor(props) {
    super(props);

    this.state = {
      visual: 's'
    }
   
}




render() {

  return (
  
        <NavigationContainer >
           <View>
<StatusBar backgroundColor="#0A1F30" barStyle="dark-content" ></StatusBar>
</View>
  
      <CounterContainer33bb  />
        </NavigationContainer>
        
    );
}
}



