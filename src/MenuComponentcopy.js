import React  from 'react';
import {FontAwesome5, } from '@expo/vector-icons';
import {Image,  View, Linking} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
//import { DrawerNavigation} from '@react-navigation';
import { DrawerContentScrollView} from '@react-navigation/drawer';

import {Rotas, 
        Feiraguay, 
        Polimodass, 
        Centrodacidade, 
        AgroePetShops, 
        Autoss, 
        CasaeConstruçãos, 
        EducaçãoeTreinamentoss,
        Manutençãoeinformáticas,
        SaúdeeBelezas,
        ServiçosDiversoss} from './rotas';

import { Container, Header, Body, Text, ListItem, Left, Right, Icon} from 'native-base';
import RN, { AsyncStorage } from 'react-native';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import HTML from 'react-native-render-html';

function sendWhatsapp() {
  Linking.openURL(`http://acheifsa.com.umbler.net`);
};





export default class MenuComponentcopy extends React.Component {
  
  
  
    constructor(propsss) {
      super(propsss);
      this.state = { item1: false, 
                     item2: false, 
                     item3: false, 
                     item4: false, 
                     item5: false, 
                     item6: false, 
                     item7: false, 
                     item8: false, 
                     item9: false, 
                     item10: false,
                     item11: false,
                     id:'',
                     id1: false,
                     visual: <View>
        
                     <ListItem  icon onPress={() => this.props.navigation.navigate('Postagem')}>
                   
                     <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >MEU POST</Text></Body>
                   </ListItem>
               
                   <ListItem  icon onPress={() => this.handleSignInPress()}>
                   
                   <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >SAIR</Text></Body>
                 </ListItem>
                 </View> };
  
                     
  
    }
  
    componentDidMount(){
      
      this._retrieveData()
      console.log(this.props.count)
     
      
     
      
    }
  
    
  
     _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('ongId');
        const value2 = await AsyncStorage.getItem('ongName');
        if (value !== null) {
          // We have data!!
          //console.log(value);
          this.setState({ id: value}),
          this.setState({ id1: '1'})
          
          console.log(this.state.id)
          //console.log(value)
          console.log(value2)
          console.log(this.state.id1)
          this._listEmptyComponent()
  
        }
        if (value == null) {
          console.log("teste")
          this.setState({id: ''})
          this.setState({id1: '2'})
          this._listEmptyComponent()
        }
  
        //console.log(this.state.todos.length)
      } catch (error) {
        // Error retrieving data
      }
  
      
    };

    chama = () => {
      this.props.navigation.navigate('Profile')
    }
  
   
    
  
    handleSignInPress = async () => {
      
        try {
          
            
          await AsyncStorage.setItem('ongName', '');
          await AsyncStorage.setItem('ongId', '');
            //console.log(response.data)
            this.setState({id: ''})
            this.setState({id1: '2'})
            this._listEmptyComponent()
          //this._retrieveData()
          
          this.props.navigation.navigate('Destaques');
          
        } catch (_err) {
          console.log(_err)
          
        }
        
      
    };
  
  
    mudarstado = () => {
      this.setState({id: '2'})
      this._listEmptyComponent()
  }
  
     _listEmptyComponent = () => {
  
      console.log(this.state.id+'ddd')
      
  
      if (this.state.id1 === '2') {
          
  
        this.setState({visual: <View>
          <ListItem  icon onPress={() => this.props.navigation.navigate('Profile')}>
        
        <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >CADASTRAR NEGÓCIO</Text></Body>
      </ListItem>
    
          <ListItem   icon onPress={() => this.props.navigation.navigate('Logon')}>
        
        <Body  style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >ENTRAR</Text></Body>
      </ListItem>
      </View> })
  
  
      
      }
  
      if (this.state.id1 === '1'){
  
         this.setState({visual: <View>
        
          <ListItem  icon onPress={() => this.props.navigation.navigate('Postagem')}>
        
          <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >MEU POST</Text></Body>
        </ListItem>
    
        <ListItem  icon onPress={() => this.handleSignInPress()}>
        
        <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >SAIR</Text></Body>
      </ListItem>
      </View> })
  
        
  
      }
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
      
      const component = (this.props.count)
      
      return (
       
        

        <Container style={{ backgroundColor: '#0A1F30' }}>
        
        <Header style={{height: 170, backgroundColor: '#203242'}}>
        <Body style={{alignItems: 'center'}} >
        <Image
           style={{width: 130, height:130}}
           source={require('../assets/icon.png')}></Image>
          
        </Body>
      </Header>
      <DrawerContentScrollView mudarstado2={this.mudarstado.bind(this)} {...this.props}>
           
      <ListItem  icon onPress={() => this.props.navigation.navigate('Destaques')}>
      
      <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >PÁGINA PRINCIPAL</Text></Body>
    </ListItem>
  
    <ListItem  icon onPress={() => this.setState({ item1: !this.state.item1, item2: !this.state.item2, item3: !this.state.item3  })}>
      
      <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >CENTROS COMERCIAIS</Text></Body>
    </ListItem>
  
    
  
  
          <ListItem icon onPress={() => this.setState({ item1: !this.state.item1 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Feiraguay</Text></Body>
            <Right><Icon name={icon1} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item1 ? (
               <Feiraguay {...this.props}></Feiraguay>
            )
               : null}
  
          <ListItem icon onPress={() => this.setState({ item2: !this.state.item2 })}>
            <Left><FontAwesome5 name="layer-group" color='#FCAD02'/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Feira Portal</Text></Body>
            <Right><Icon name={icon2} style={{color: '#FCAD02'}} /></Right>
            
          </ListItem>
  
          {this.state.item2 ? ( <Rotas {...this.props}></Rotas>) : null}
  
          <ListItem icon onPress={() => this.setState({ item3: !this.state.item3 })}>
          <Left><FontAwesome5 name="layer-group" color='#FCAD02'/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Polimodas</Text></Body>
            <Right><Icon name={icon3} style={{color: '#FCAD02'}}/></Right>
            
          </ListItem>
  
          {this.state.item3 ? (
            <Polimodass {...this.props}></Polimodass>
      ) : null}
      <ListItem icon onPress={() => this.setState({ item11: !this.state.item11 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Centro da Cidade</Text></Body>
            <Right><Icon name={icon11} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item11 ? ( <Centrodacidade {...this.props}></Centrodacidade>
               
            )
               : null}
  
  
      <ListItem  icon onPress={() => this.setState({ item4: !this.state.item4  })}>
      
      <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >SERVIÇOS</Text></Body>
    </ListItem>
  
      <ListItem icon onPress={() => this.setState({ item5: !this.state.item5 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Agro e Pets</Text></Body>
            <Right><Icon name={icon5} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item5 ? (
               
            
  <AgroePetShops {...this.props} ></AgroePetShops>
    
    
    
  )
               : null}
  
  
               <ListItem icon onPress={() => this.setState({ item6: !this.state.item6 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Autos</Text></Body>
            <Right><Icon name={icon6} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item6 ? (
               
            <Autoss {...this.props}></Autoss>
  
  
    
    
    
    
  )
               : null}
  
  
               <ListItem icon onPress={() => this.setState({ item7: !this.state.item7 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Casa e Construção</Text></Body>
            <Right><Icon name={icon7} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item7 ? (
               <CasaeConstruçãos {...this.props}></CasaeConstruçãos>
            )
               : null}
  
               <ListItem icon onPress={() => this.setState({ item8: !this.state.item8 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Educação e Treinamentos</Text></Body>
            <Right><Icon name={icon8} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item8 ? (
               <EducaçãoeTreinamentoss {...this.props}></EducaçãoeTreinamentoss>
            )
               : null}
  
  
      
  
      <ListItem icon onPress={() => this.setState({ item4: !this.state.item4 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Manutenção e informática</Text></Body>
            <Right><Icon name={icon4} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item4 ? (
               <Manutençãoeinformáticas {...this.props}></Manutençãoeinformáticas>
            )
               : null}
  
  
               <ListItem icon onPress={() => this.setState({ item9: !this.state.item9 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Saúde e Beleza</Text></Body>
            <Right><Icon name={icon9} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item9 ? (
               <SaúdeeBelezas {...this.props}></SaúdeeBelezas>
            )
               : null}
  
               <ListItem icon onPress={() => this.setState({ item10: !this.state.item10 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}}>Serviços Diversos</Text></Body>
            <Right><Icon name={icon10} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item10 ? (
               <ServiçosDiversoss {...this.props}></ServiçosDiversoss>
            )
               : null}
  
               <ListItem  icon onPress={() => this.props.navigation.navigate('Bares e Restudantes')}>
      
      <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >BARES E RESTAURANTES</Text></Body>
    </ListItem>
  
    
  
    <ListItem  icon onPress={() => this.props.navigation.navigate('Postagem')}>
                   
                   <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >MEU POST</Text></Body>
                 </ListItem>
             
                 <ListItem  icon onPress={() => this.handleSignInPress()}>
                 
                 <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: RFPercentage(5/2), fontFamily: 'Inter-Black'}} >SAIR</Text></Body>
               </ListItem>
    
  
     
     
     
  
      
          </DrawerContentScrollView>
          
          
        </Container>
      )
      
    }
  }