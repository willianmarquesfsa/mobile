import React  from 'react';
import {FontAwesome5, } from '@expo/vector-icons';
import {Image,  View, Linking} from "react-native";
//import { DrawerNavigation} from '@react-navigation';
import { DrawerContentScrollView} from '@react-navigation/drawer';
import {Card} from 'react-native-paper';
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
import { AsyncStorage, Dimensions } from 'react-native';


import styles from './pages/Incidents/styles'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class MenuComponent extends React.Component {   
  
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
                     isFetching: false,
                     instagram: '',
                     todos: [],
                     idp: '',
                     username: '',
                     id:'',
                     id1: false,
                      };                  
  
    }    
  
    componentDidMount(){
      
      this._retrieveData()                   
    }

     
       
     _retrieveData = async () => {
       console.log("2806la"+this.props.count3)
       
      try {
        const value = await AsyncStorage.getItem('ongId');
        const value2 = await AsyncStorage.getItem('FotoInsta');
        const value3 = await AsyncStorage.getItem('Titulo');       
        
        if (value !== null) {
          this.setState({ id: value}),
          this.setState({ id1: '1'})
          this.setState({instagram: value2})
          this.setState({username: value3})
          this.setState({ isFetching: false })
       }
        if (value == null) {
          console.log("teste")
          this.setState({id: ''})
          this.setState({id1: '2'})
         }
      
      } catch (error) {
        
      }
       
    };
 
    handleSignInPress = async () => {
      
        try {
        
          await AsyncStorage.setItem('ongName', '');
          await AsyncStorage.setItem('ongId', '');
          await AsyncStorage.setItem('FotoInsta', '');
          await AsyncStorage.setItem('Titulo', '');
            //console.log(response.data)
            this.setState({id: ''})
            this.setState({id1: '2'})
            this.props.dispatch({ type: 'DECREMENT' })
            this.props.dispatch({ type: 'DECREMENT2' })
            this.props.navigation.navigate('Destaques');
          
        } catch (_err) {
          console.log(_err)
          
        }
            
    };

    _listEmptyFoto =  () => {

      if (this.props.count === 1 && this.props.count2 === 1 && this.props.count3._55!=null   ) {
        
          console.log(`${this.props.count3._55.titu} brasil`)
           
           return (
            <View style={{flexDirection: 'row',  alignItems: 'center', alignContent: 'flex-start', justifyContent: 'flex-start', flex:1 }}> 
            <Card.Cover progressiveRenderingEnabled={true} 
                      style={styles.instagram2} 
                      source={this.props.count3._55.link ? {uri: this.props.count3._55.link}:null}/>
             <Text style={styles.instagram3} >{this.props.count3._55.titu}</Text>
                      </View>
           )            
       
      }
     
        
      if (this.props.count === 1 && this.props.count2 === 0) {
         
        return (
          <View style={{flexDirection: 'row',  alignItems: 'center', alignContent: 'flex-start', justifyContent: 'flex-start', flex:1 }}> 
          <Image style={styles.instagram2}
          source={require('./assets/UserS.png')}></Image>
          <Text style={styles.instagram3}>Sem imagem</Text>
          </View>
         )       
      }
  
      if (this.props.count === 0){
        
         return (
           <View style={{flexDirection: 'row',  alignItems: 'center', alignContent: 'flex-start', justifyContent: 'flex-start', flex:1 }}> 
          <Image style={styles.instagram2}
          source={require('./assets/UserS.png')}></Image>
          <Text style={styles.instagram3}>Não Logado</Text>
          </View> )
       
      }
  }
      
     _listEmptyComponent = () => {
  
      console.log(this.state.id+'ddd')
      console.log(this.props.count+'2508')


      if (this.props.count == 0) {
         
        return ( 
        <View>
          <ListItem  icon onPress={() => this.props.navigation.navigate('Profile')}>
             <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}} >CADASTRAR NEGÓCIO</Text></Body>
         </ListItem>
         <ListItem   icon onPress={() => this.props.navigation.navigate('Logon')}>
             <Body  style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}} >ENTRAR</Text></Body>
         </ListItem>
       </View> )
       
      }
  
      if (this.props.count == 1){
  
         return ( 
         <View>
          <ListItem  icon onPress={() => this.props.navigation.navigate('Postagem')}>
               <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}} >MEU POST</Text></Body>
          </ListItem>
          <ListItem  icon onPress={() => this.handleSignInPress()}>
               <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}} >SAIR</Text></Body>
          </ListItem>
      </View> )
       
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
      
     
      
      return (
      <Container style={{ backgroundColor: '#0A1F30' }}>
        
        <Header style={{height: windowHeight*0.15, backgroundColor: '#203242'}}>
        
        
          {this._listEmptyFoto()}
        
      </Header>
      <DrawerContentScrollView  {...this.props}>
           
      <ListItem  icon onPress={() => this.props.navigation.navigate('Destaques')}>
      
      <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}} >PÁGINA PRINCIPAL</Text></Body>
    </ListItem>
  
    <ListItem  icon onPress={() => this.setState({ item1: !this.state.item1, item2: !this.state.item2, item3: !this.state.item3  })}>
      
      <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}} >CENTROS COMERCIAIS</Text></Body>
    </ListItem>
  
    
  
  
          <ListItem icon onPress={() => this.setState({ item1: !this.state.item1 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}}>Feiraguay</Text></Body>
            <Right><Icon name={icon1} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item1 ? (
               <Feiraguay {...this.props}></Feiraguay>
            )
               : null}
  
          <ListItem icon onPress={() => this.setState({ item2: !this.state.item2 })}>
            <Left><FontAwesome5 name="layer-group" color='#FCAD02'/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}}>Feira Portal</Text></Body>
            <Right><Icon name={icon2} style={{color: '#FCAD02'}} /></Right>
            
          </ListItem>
  
          {this.state.item2 ? ( <Rotas {...this.props}></Rotas>) : null}
  
          <ListItem icon onPress={() => this.setState({ item3: !this.state.item3 })}>
          <Left><FontAwesome5 name="layer-group" color='#FCAD02'/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}}>Polimodas</Text></Body>
            <Right><Icon name={icon3} style={{color: '#FCAD02'}}/></Right>
            
          </ListItem>
  
          {this.state.item3 ? (
            <Polimodass {...this.props}></Polimodass>
      ) : null}
      <ListItem icon onPress={() => this.setState({ item11: !this.state.item11 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}}>Centro da Cidade</Text></Body>
            <Right><Icon name={icon11} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item11 ? ( <Centrodacidade {...this.props}></Centrodacidade>
               
            )
               : null}
  
  
      <ListItem  icon onPress={() => this.setState({ item4: !this.state.item4  })}>
      
      <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}} >SERVIÇOS</Text></Body>
    </ListItem>
  
      <ListItem icon onPress={() => this.setState({ item5: !this.state.item5 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}}>Agro e Pets</Text></Body>
            <Right><Icon name={icon5} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item5 ? (
               
            
  <AgroePetShops {...this.props} ></AgroePetShops>     
    
  )
               : null}
   
               <ListItem icon onPress={() => this.setState({ item6: !this.state.item6 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}}>Autos</Text></Body>
            <Right><Icon name={icon6} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item6 ? (
               
            <Autoss {...this.props}></Autoss>
   
    
  )
               : null}
  
  
               <ListItem icon onPress={() => this.setState({ item7: !this.state.item7 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}}>Casa e Construção</Text></Body>
            <Right><Icon name={icon7} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item7 ? (
               <CasaeConstruçãos {...this.props}></CasaeConstruçãos>
            )
               : null}
  
               <ListItem icon onPress={() => this.setState({ item8: !this.state.item8 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}}>Educação e Treinamentos</Text></Body>
            <Right><Icon name={icon8} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item8 ? (
               <EducaçãoeTreinamentoss {...this.props}></EducaçãoeTreinamentoss>
            )
               : null} 
      
  
      <ListItem icon onPress={() => this.setState({ item4: !this.state.item4 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045 , fontFamily: 'Inter-Black'}}>Manutenção e informática</Text></Body>
            <Right><Icon name={icon4} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item4 ? (
               <Manutençãoeinformáticas {...this.props}></Manutençãoeinformáticas>
            )
               : null}
  
  
               <ListItem icon onPress={() => this.setState({ item9: !this.state.item9 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}}>Saúde e Beleza</Text></Body>
            <Right><Icon name={icon9} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item9 ? (
               <SaúdeeBelezas {...this.props}></SaúdeeBelezas>
            )
               : null}
  
               <ListItem icon onPress={() => this.setState({ item10: !this.state.item10 })}>
            <Left><FontAwesome5 name="layer-group" color={'#FCAD02'}/></Left>
            <Body><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}}>Serviços Diversos</Text></Body>
            <Right><Icon name={icon10} style={{color: '#FCAD02'}}/></Right>
          </ListItem>
  
          {this.state.item10 ? (
               <ServiçosDiversoss {...this.props}></ServiçosDiversoss>
            )
               : null}
  
               <ListItem  icon onPress={() => this.props.navigation.navigate('Bares e Restudantes')}>
      
      <Body style={{alignItems: "center"}}><Text style={{color: '#FCAD02', fontSize: windowWidth*0.045, fontFamily: 'Inter-Black'}} >BARES E RESTAURANTES</Text></Body>
    </ListItem>
   
    {this._listEmptyComponent()}
       
          </DrawerContentScrollView>          
          
        </Container>
      )
      
    }
  }