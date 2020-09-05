import React, { useState, useEffect} from 'react';
import { View, FlatList, Image, Text,AsyncStorage, TouchableOpacity, Button, Linking, StatusBar, StyleSheet, Dimensions, ImageBackground, Html, Platform  } from 'react-native';
import {Feather, FontAwesome, MaterialCommunityIcons, Entypo, AntDesign} from '@expo/vector-icons';
import api from '../../services/api'
import styles from './styles';
import {Card} from 'react-native-paper';
import { AppLoading } from 'expo';
import {AdMobBanner} from 'expo-ads-admob'
import * as Font from 'expo-font';


let customFonts = {
  'Inter-Black': require('../../assets/fonts/BellotaText-Bold.ttf'),
  'Inter-BlackC': require('../../assets/fonts/BellotaText-Regular.ttf'),
};


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class Destaque extends React.Component {
    _loadFontsAsync = async () => {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
          
      }
          
      constructor(props) {
        super(props)
 
        this.bannerAdId = Platform.OS === "ios" ? "ca-app-pub-4742876649235540/4064903407": "ca-app-pub-4742876649235540/2683523067";
       
        
      this.state = {
         
        message: 'Olá, encontrei sua empresa no AcheiFsa',
        page: 1,
        grupo: 'Todoss',
        centrolojistico: 'Feiraguay',
        incidents: [],
        total: 0,
        isFetching: false,
        fontsLoaded: false,
        loanding: false,
        error: '',
        success: '',
      };
    
      }

  componentDidMount(){
        this._retrieveData()
        this._loadFontsAsync();
        
    }

     componentWillUnmount(){
       this._retrieveData()
       this._loadFontsAsync();
     }
     
      onRefresh() {
        this.setState({isFetching: true,
                       page: 1,  
                       incidents: [], 
                       loanding: false, },() => {this._retrieveData()});
    }

    
      _retrieveData = async () => {
        //console.log(this.state.centrolojistico.length)

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
                        grupo: this.state.grupo,
                        centrolojistico: this.state.centrolojistico},
                 
        })
            
            this.state.incidents.push(...response.data)
            this.setState({page: (this.state.page + 1)})
            this.setState({loanding: false})
            
      }
      catch(err) {console.log(err+'0409')}
        
        setTimeout(() => {
            this.setState({isFetching: false});
          }, 4000);
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
    _listEmptyComponent = () => {
    
      return (
          
          <Text style={styles.seminternet}>Sem internet!</Text>
              
          
      )
  }

render() {
   
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
  
    return (

      <View style={styles.container}>
         <View>
            <StatusBar backgroundColor="#203242" barStyle="Dark-content" ></StatusBar>
         </View>
         <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} > 
               <Feather name={'list'} size={windowWidth*0.08} color='#203242' styles={{alignItems: 'center'}}/>
            </TouchableOpacity>
            <Image style={{height: windowHeight*0.12, width: windowWidth*0.19, }}
               source={require('../../../assets/icon.png')}></Image>
            <View>{this.addico()}</View>
         </View>
  
      <View style={{width: windowWidth, marginLeft: -5}}>
         <AdMobBanner
      
            bannerSize="smartBannerPortrait"
            adUnitID={this.bannerAdId}
            servePersonalizedAds={true} // true or false
            onDidFailToReceiveAdWithError={(err) => console.log(err)}
           />
             
     </View>                  

     <FlatList
            data={this.state.incidents}
            ListEmptyComponent={this._listEmptyComponent}
            numColumns={2}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={()=>this._retrieveData()}
            onRefresh={()=>this.onRefresh()}
            refreshing={this.state.isFetching}
            onEndReachedThreshold={0.2}
            extraData={this.state.incidents}
            renderItem={({item: incident})=>(
             
                    <View style={styles.incidentsList3}>
                      <View style={styles.incidents}>
                      
                        <Card.Cover progressiveRenderingEnabled={true} 
                                  style={{width: 45, height: 45, borderRadius: 30}} 
                                  source={{uri: `${incident.instagram}`}}/>
                          <View style={{flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'stretch',
                                        flex:1}}>
                                       
                            <View style={{alignItems: 'center'}}>
                            <Text numberOfLines={1} style={styles.incidentsValue}>{incident.grupo}-{incident.centrolojistico}</Text>
                            <Text numberOfLines={1} style={styles.incidentsProperty}>{incident.name}</Text>
                            </View>
                         
                          <View style={styles.actions}>
                               <TouchableOpacity style={{flex:1, 
                                                        alignItems: "center",
                                                        alignContent: 'center',}} 
                                                 onPress={() => this.sendWhatsapp(incident.whatsapp)}>
                                  <FontAwesome name={'whatsapp'} size={windowWidth*0.05} color={'#1D2B44'}/>
                               </TouchableOpacity>

                               <TouchableOpacity style={{flex:1, 
                                                         alignItems: "center",
                                                         alignContent: 'center',}}
                                                 onPress={() => this.sendGoogleMaps(incident.google)}>
                                  <MaterialCommunityIcons name={'google-maps'} size={windowWidth*0.05} color={'#1D2B44'}/>
                               </TouchableOpacity>
                          
                               <TouchableOpacity style={{flex:1,
                                                         alignItems: "center",
                                                         alignContent: 'center',}} 
                                                 onPress={() => this.sendIstagram(incident.value)}>
                                   <FontAwesome name={'instagram'} size={windowWidth*0.05} color={'#1D2B44'}/>
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