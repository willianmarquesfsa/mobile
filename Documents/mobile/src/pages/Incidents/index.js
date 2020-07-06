import React, { useState, useEffect} from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, Button, Linking, StatusBar, Dimensions, ImageBackground, Html } from 'react-native';
import {Feather, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation, DrawerActions, useRoute } from '@react-navigation/native';
import api from '../../services/api'
import logoImg from '../../assets/logo.png';
//import Card, {itemm, colors } from './image';
import styles from './styles';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
//import { Container, Header, Body, Textt } from 'native-base';
import { createStackNavigator} from '@react-navigation/stack';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; 
const AppStack = createStackNavigator();
import {useFonts} from '@use-expo/font';
import { AppLoading } from 'expo';
import Constants from 'expo-constants'

//import useFontsss from '../../assets/fonts';



export default function Incidents(x, segun) {



  function tested(xxx){
              
    const response = String(xxx)
    const decoded = response
    .replace(/\\u(....)/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)))
    .replace(/\\n/g, (match, p1) => String.fromCharCode(parseInt(p1, 8)))
    .replace(/\\(\d{3})/g, (match, p1) => String.fromCharCode(parseInt(p1,  8)))
             
    return (decoded)
}
    
    
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const grupo = x;
    const centrolojistico = segun;
    const [loanding, setLoading] = useState(false);
    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();
    
    async function loadIncidents() {
        if (loanding){
            return;
        };

        if(total > 0 && incidents.length === total) {
            return;
        };

        setLoading(true); 


       const response = await api.get('incidents', {
           
           params: {page, grupo, centrolojistico},
           
       });
       //console.log(response.data);
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
    };

    useEffect(()=>{
        loadIncidents();
    },[]); 
    
    

    const message = `Olá ${incidents.name }, estamos entrando em contato, pos gostaria de ajudar no caso ${incidents.title} com o valor de ${
        Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL'
            }).format(incidents.value)}`


    
    function sendWhatsapp(whatsapp) {
        Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`);
};

function sendIstagram(instagram) {
    Linking.openURL(`${instagram}`);
};

function sendGoogleMaps(coordenadas) {
  Linking.openURL(`${coordenadas}`);
};


function catego() {
  
  var tex
  if (centrolojistico ===  "Feiraguay") {
      tex = 'Centro Comercial:'
  }
  else if (centrolojistico ===  'FeiraPortal') {tex = 'Centro Comercial:';
                 return (<Text style={styles.headerTextBold}>{tex}<Text style={styles.headerTextBold}> {`${segun}`}</Text></Text>)}
   
  else if (centrolojistico ===  "Polimodas") {tex = 'Centro Comercial:';
                 return (<Text style={styles.headerTextBold}>{tex}<Text style={styles.headerTextBold}> {`${segun}`}</Text></Text>)}
  else if (centrolojistico ===  "Centro da Cidade") {tex = 'Centro Comercial:';
                 return (<Text style={styles.headerTextBold}>{tex}<Text style={styles.headerTextBold}> {`${segun}`}</Text></Text>)}
  else if (centrolojistico ===  "Bares e Restudantes") {
                 return (<Text style={styles.headerTextBold}>{`${segun}`}</Text>)}
  else { tex = 'Serviços:';
                 return (<Text style={styles.headerTextBold}>{tex}<Text style={styles.headerTextBold}> {`${segun}`}</Text></Text>)}
  
  return (<Text style={styles.headerTextBold}>{tex}<Text style={styles.headerTextBold}> {`${segun}`}</Text></Text>)
}
//console.log(incidents.name);

/*function render() {
    
    const fotoUrl = 'https://instagram.fssa3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/90436938_281622322820743_2573674605696778240_n.jpg?_nc_ht=instagram.fssa3-1.fna.fbcdn.net&_nc_ohc=SIlGHQ0_es0AX85Q1e3&oh=c52dbc6ea2626078380653395c1200e5&oe=5EC66D00';
    return (
      <View>
        <Image source={{uri: fotoUrl}} resizeMode="contain"/>
        
      </View>
    );
  };
const perfil = render();
   */
  
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('../../assets/fonts/BellotaText-Bold.ttf'),
    'Inter-BlackC': require('../../assets/fonts/BellotaText-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
        
        
<ImageBackground  
               style={{width: Dimensions.get('window').width, 
                       height: Dimensions.get('window').height}}
               source={require('../../../assets/final.jpg')}>
             
        <View style={styles.container}>
        
        <View>
<StatusBar backgroundColor="#0A1F30" barStyle="Dark-content" ></StatusBar>
</View>
          <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()} > 
          <Feather name={'list'} size={38} color='#FCAD02' styles={{alignItems: 'center'}}/>
         
          </TouchableOpacity>
          <Image style={{width: Dimensions.get('window').width*0.2, 
                       height: Dimensions.get('window').width*0.2,
                       marginLeft: Dimensions.get('window').width*0.28
                        }}
               source={require('../../../assets/icon.png')}></Image>
          </View>



             
              <Text>{catego()}</Text>
               
              <Text style={styles.headerText}>Categoria:<Text style={styles.headerTextBold}> {x}</Text></Text>
              

             <FlatList
                 data={incidents}
                 keyExtractor={incident => String(incident.id)}
                 style={styles.incidentsList}
                 //showsVerticalScrollIndicator={false}
                 onEndReached={loadIncidents}
                 onEndReachedThreshold={0.2}
                 extraData={incidents}
                 renderItem={({item: incident})=>(
                      
                    <View style={styles.incidentsList2}>
                      <View style={styles.incidents}>
                      
                        <Card.Cover progressiveRenderingEnabled={true} 
                                  style={styles.instagram} 
                                  source={{uri: `${incident.instagram}`}}/>
                          <View style={{flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        flex:1}}>
                            <Text numberOfLines={2} style={styles.incidentsValue}>{incident.title}</Text>
                            <Text numberOfLines={3} ellipsizeMode='tail' style={styles.incidentsProperty}>{tested(String(incident.description))}</Text>
                          
                            
                          
                          <View style={styles.actions}>
                               <TouchableOpacity style={styles.action1} onPress={() => sendWhatsapp(incident.whatsapp)}>
                                  <FontAwesome name={'whatsapp'} size={28} color={'#3E4F87'}/>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.action2} onPress={() => sendGoogleMaps(incident.google)}>
                                   <MaterialCommunityIcons name={'google-maps'} size={28} color={'#3E4F87'}/>
                               </TouchableOpacity>
                          

                               <TouchableOpacity style={styles.action3} onPress={() => sendIstagram(incident.value)}>
                                   <FontAwesome name={'instagram'} size={28} color={'#3E4F87'}/>
                               </TouchableOpacity>
                          
                               </View>
                          
                        </View>
                      </View>        
                   
                    

                    
                          
                      
           
            

                 </View>
                 

                 )}
             />
        </View>
        </ImageBackground>
    );
  }

}





