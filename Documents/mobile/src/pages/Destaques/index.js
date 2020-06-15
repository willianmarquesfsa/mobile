import React, { useState, useEffect} from 'react';
import { View, FlatList, Text, TouchableOpacity, Linking, StatusBar, Dimensions, } from 'react-native';
import {Feather, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api'
import styles from './styles';
import {Card} from 'react-native-paper';
import { RFPercentage } from "react-native-responsive-fontsize"; 
import {useFonts} from '@use-expo/font';
import { AppLoading } from 'expo';
import { ImageBackground } from 'react-native';
import Constants from 'expo-constants'
import Propaganda from './propaganda';



export default function Destaques(x, segun) {
    
    
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

  
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('../../assets/fonts/BellotaText-Bold.ttf'),
    'Inter-BlackC': require('../../assets/fonts/BellotaText-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading>
      <View>
<StatusBar backgroundColor="#0A1F30" barStyle="Dark-content" ></StatusBar>
</View>
    </AppLoading>;
  } else {

    return (
        

      
        <View style={styles.container}>
          
         



           <ImageBackground  
               style={{width: Dimensions.get('window').width, 
                       height: Dimensions.get('window').height * 0.183,
                       marginLeft: - Constants.statusBarHeight * 0.4,
                       
                                  }} 
                source={require('../../../assets/principalC.png')}
                                   >
                       

                         <TouchableOpacity
                             style={{marginTop: - Constants.statusBarHeight*0.75,
                                     marginLeft: Constants.statusBarHeight * 0.53,
                                     flex: 1,
                                     flexDirection: "column",
                                     //alignItems: "flex-start",
                                     justifyContent: "space-around"}} 
                             onPress={() => navigation.openDrawer()} > 
                           <Feather name={'list'} size={RFPercentage(5)} color='#FCAD02'/>

                         </TouchableOpacity>
                      
            </ImageBackground>
         
                                  
        <View>
<StatusBar backgroundColor="#0A1F30" barStyle="light-content" ></StatusBar>
</View>

 <View style={{width: Dimensions.get('window').width, 
               height: Dimensions.get('window').height * 0.183,
               marginLeft: - Constants.statusBarHeight * 0.4
               
                               }}>
    
    <Propaganda/>
         
 </View>
          
             

              
             <FlatList
                 data={incidents}
                 numColumns={2}
                 keyExtractor={incident => String(incident.id)}
                 style={styles.incidentsList}
                 //showsVerticalScrollIndicator={false}
                 onEndReached={loadIncidents}
                 onEndReachedThreshold={0.2}
                 //horizontal={true}
                 extraData={incidents}
                 renderItem={({item: incident})=>(
                  
                  
                    <View style={styles.incidentsList3}>
                      <View style={styles.incidents}>
                      
                        <Card.Cover progressiveRenderingEnabled={true} 
                                  style={{width: 45, height: 45, borderRadius: 30}} 
                                  source={{uri: `${incident.instagram}`}}/>
                          <View style={{flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        flex:1}}>
                            <Text style={styles.incidentsValue}>{incident.name}</Text>
                            <Text style={styles.incidentsProperty}>{incident.centrolojistico}</Text>
                            
                          
                            
                          
                          <View style={styles.actions}>
                               <TouchableOpacity style={styles.action1} onPress={() => sendWhatsapp(incident.whatsapp)}>
                                  <FontAwesome name={'whatsapp'} size={18} color={'#1D2B44'}/>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.action2} onPress={() => sendGoogleMaps(incident.google)}>
                                   <MaterialCommunityIcons name={'google-maps'} size={18} color={'#1D2B44'}/>
                               </TouchableOpacity>
                          

                               <TouchableOpacity style={styles.action3} onPress={() => sendIstagram(incident.value)}>
                                   <FontAwesome name={'instagram'} size={18} color={'#1D2B44'}/>
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





