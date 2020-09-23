import React from 'react';
import { View, FlatList, Image, Text,AsyncStorage, TouchableOpacity, Button, Linking, StatusBar, StyleSheet, Dimensions, ImageBackground, Html  } from 'react-native';
import {Feather, FontAwesome, MaterialCommunityIcons, Entypo, AntDesign} from '@expo/vector-icons';
import api from '../../services/api'
import styles from './styles';
import {Card} from 'react-native-paper';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';


let customFonts = {
  'Inter-Black': require('../../assets/fonts/BellotaText-Bold.ttf'),
  'Inter-BlackC': require('../../assets/fonts/BellotaText-Regular.ttf'),
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Incidents extends React.Component {

      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }

      onRefresh2() {
        this.setState({isFetching2: true,
          page: 1,  
          incidents: [],           
          loanding: false
                        
            },() => {this.loadIncidents()});
    }

      tested = (xxx) =>{
        const response = String(xxx)
        const decoded = response
        .replace(/\\u(....)/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)))
        .replace(/\\n/g, (match, p1) => String.fromCharCode(parseInt(p1, 8)))
        .replace(/\\(\d{3})/g, (match, p1) => String.fromCharCode(parseInt(p1,  8)))
                 
        return (decoded)
      }   


      constructor(props) {
        super(props)
        
        this._loadFontsAsync();
        
        this.state = {
          loanding: false,
          valor: '1',        
          page: 1,
          grupo: 'Todos',
          centrolojistico: 'Feiraguay',
          incidents: [],        
          message: 'Olá, encontrei sua empresa no AcheiFsa',
          sliderIndex: 0,
          maxSlider: 5,      
          isFetching: false,
          fontsLoaded: false,        
          isFetching2: false,
          error: '',
          success: '',
          google: ''
      };

      }

      componentDidMount(){
        this.loadIncidents()
      }

      loadIncidents = async () => {                  

        if (this.state.loanding){
         return;
      };

        if(this.state.total > 0 && this.state.incidents.length === this.state.total) {
          return;
       };
       
        this.setState({loanding: true})        
       
        try {
         const response = await api.get('incidents', {
           
             params: {page: this.state.page,
                      grupo: this.props.x, 
                      centrolojistico: this.props.segun},           
       });
        this.state.incidents.push(...response.data)          
        this.setState({page: (this.state.page + 1)})    
        this.setState({loanding: false})
       }
        catch(Err){console.log(Err)}  
    }


      sendWhatsapp(whatsapp) {
          Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${this.state.message}`);
  };
      sendIstagram(instagram) {
          Linking.openURL(`${instagram}`);
      };
       
      sendGoogleMaps(coordenadas) {
          Linking.openURL(`${coordenadas}`);
          
      };
      
      _listEmptyComponent = () => {
    
          return (              
              <Text style={styles.seminternet}>Sem internet!</Text>  
         )
      }
  
      addico = () =>{    
        
          if (this.props.count == 0) {
               return ( <TouchableOpacity onPress={() => this.props.navigation.navigate('Logon')} > 
                           <AntDesign name="adduser" size={windowWidth*0.08} color='#203242' />         
                        </TouchableOpacity>)
            }
        
          if (this.props.count == 1) {
               return ( <TouchableOpacity onPress={() => this.props.navigation.navigate('Postagem')} > 
                           <Entypo name="add-to-list" size={windowWidth*0.08} color='#203242' />         
                        </TouchableOpacity>)
            }        
        }

      renderlocalizacao(google){
        if(google == "") {
          return
        }
        else {
          return(
          <TouchableOpacity style={styles.action2} onPress={() => this.sendGoogleMaps(google)}>
              <MaterialCommunityIcons name={'google-maps'} size={Dimensions.get('window').width*0.06} color={'#0A1F30'}/>
          </TouchableOpacity>
                )
             }
        }  

      render() {
            
          if (!this.state.fontsLoaded) {
               return <AppLoading />;
          }
          else {        
         
               return (
                <View style={styles.container}>        
                  <View>
                     <StatusBar backgroundColor="#203242" barStyle="Dark-content" ></StatusBar>
                  </View>
                <View style={styles.header}>
                  <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} > 
                    <Feather name={'list'} size={windowWidth*0.08} color='#203242' styles={{alignItems: 'center'}}/>                 
                  </TouchableOpacity>
                  <Image style={{height: windowHeight*0.12, width: windowWidth*0.60, }}
                       source={require('../../../assets/icon.png')}></Image>
                        
                  <View>{this.addico()}</View>
                </View>
        
        
        
                <View style={{flexDirection: 'column', justifyContent: 'flex-start' }}>
                   <Text style={styles.headerText}>{this.props.segun}:</Text>           
                   <Text style={styles.headerText}>{this.props.x}.</Text>
                       
                </View>
                
                <FlatList
                 data={this.state.incidents}
                 ListEmptyComponent={this._listEmptyComponent}
                 keyExtractor={incident => String(incident.id)}
                 style={styles.incidentsList}
                 //showsVerticalScrollIndicator={false}
                 onEndReached={()=>this.loadIncidents()}
                 onRefresh={()=>this.onRefresh2()}
                 refreshing={this.state.isFetching}
                 onEndReachedThreshold={0.2}
                 extraData={this.state.incidents}
                 renderItem={({item: incident})=>(
                              
                    <View style={styles.incidentsList2}>
                      <View style={styles.incidents}>
                        <Card.Cover progressiveRenderingEnabled={true} 
                                    style={styles.instagram} 
                                    source={{uri: `${incident.instagram}`}}/>
                        <View style={{flexDirection: 'column',
                                      justifyContent: 'flex-start',
                                      alignItems: 'stretch',
                                      flex:1}}>
                          <View style={{alignItems: 'center', justifyContent: 'space-between', flex:1  }}>
                            <Text numberOfLines={2} style={styles.incidentsValue}>{incident.title}</Text>
                            <Text numberOfLines={4} style={styles.incidentsProperty}>{this.tested(String(incident.description))}</Text>
                          </View>                                   
                            <View style={styles.actions}>
                              <TouchableOpacity style={styles.action1} onPress={() => this.sendWhatsapp(incident.whatsapp)}>
                                <FontAwesome name={'whatsapp'} size={Dimensions.get('window').width*0.06} color={'#0A1F30'}/>
                              </TouchableOpacity>                                 
                                 {this.renderlocalizacao(incident.google)} 
                              <TouchableOpacity style={styles.action3} onPress={() => this.sendIstagram(incident.value)}>
                                <FontAwesome name={'instagram'} size={Dimensions.get('window').width*0.06} color={'#0A1F30'}/>
                              </TouchableOpacity>
                                  
                            </View>
                                  
                          </View>
                        </View>                       
                
                    </View>
                         
        
                           )}
                     />
                </View>
                
            );
          }
        
        }
    }