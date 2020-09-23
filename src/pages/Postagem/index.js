import React from 'react';
import {
  AsyncStorage,
  Text,
  FlatList,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Linking,
  Platform   
} from 'react-native';
import {Card} from 'react-native-paper';
import Constants from 'expo-constants';
import api from '../../services/api';
import {Feather, Entypo, Ionicons,  AntDesign, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StatusBar, Alert, Dimensions  } from 'react-native';
import {AdMobBanner} from 'expo-ads-admob'
  
let customFonts = {
  'Inter-Black': require('../../assets/fonts/BellotaText-Bold.ttf'),
  'Inter-BlackC': require('../../assets/fonts/BellotaText-Regular.ttf'),
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class Postagem extends React.Component {

  
  

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
 

  constructor(props) {
    super(props);
    
    this._loadFontsAsync();

    this.bannerAdId = Platform.OS === "ios" ? "ca-app-pub-4742876649235540/4064903407": "ca-app-pub-4742876649235540/2683523067";
    
  this. state = {
    id: '',
    idp: '',
    username: '',
    google: '',
    email: '',
    whatsapp: '',
    destaque: '',
    value: '',
    description: '',
    grupo: '',
    centrolojistico: '',
    tipoloja: '',
    visual: <View></View>,
    visual2: <View></View>,
    visual3: <View></View>,
    todos: [],
    isFetching: false,
    fontsLoaded: false,
    mudar: false,
    error: '',
    success: '',

    
  };

  

  //this._retrieveData()
  //this.loandPost()
  }
  componentDidMount(){
  
    this.onRefresh()
    
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      // do something
      this.onRefresh()
    });
    
    
  }
  componentWillUnmount = () => {
    this.onRefresh()
    this._unsubscribe();
  }
  
  _listEmptyComponent = () => {
    
    return (
        <View style={styles.header} >
        <Text style={styles.description1}>Voce ainda não adicionou seu post, click em atualizar ou em adicionar post:</Text>
            
        </View>
    )
}

mudarhhh = () =>{
    setTimeout(this.onRefresh(), 3000)
      
    
}

acultbo = () => {

   if(this.props.count2 == 0) {
   
        
  return <TouchableOpacity onPress={() => this.props.navigation.navigate('Newpost')} > 
  <Ionicons name="ios-add-circle" size={windowWidth*0.08} color='#203242' />

</TouchableOpacity>
  }
  if (this.props.count2 == 1 ) {
   
     
    return (<TouchableOpacity onPress={() => Alert.alert("Olá", "Para editar, apague o post atual e refaça na localização de sua empresa")} > 
    <Entypo name="edit" size={windowWidth*0.08} color='#203242' />
  
  </TouchableOpacity>)
  }
}
  
  onRefresh = () => {
    this.setState({isFetching: true,},() => {this._retrieveData()});
}

  tested = (xxx) =>{
    const response = String(xxx)
    const decoded = response
    .replace(/\\u(....)/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)))
    .replace(/\\n/g, (match, p1) => String.fromCharCode(parseInt(p1, 8)))
    .replace(/\\(\d{3})/g, (match, p1) => String.fromCharCode(parseInt(p1,  8)))
             
    return (decoded)
  }

  simnao = (xx) =>{
    if (xx=='1') {
      return "Nao"
    }
    else return "Sim"
  }

   deletepost = async () => {
     try{
      await api.delete( `incidents/${this.state.idp}`,{
        headers: {
            Authorization: `${this.state.id}`,
        }
      
    });
    this.props.dispatch({ type: 'DECREMENT2' })
    
    this.setState({todos: []})
    
     }
     catch(error) {
         console.log(error)
     }
   }

   renderlocali(){
     if(this.state.google == ''){
       return
     }
     else {
       return (<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center'}}>
       <Text style={styles.description1}>Localização da Loja  --</Text>

       <Text></Text>
     
        <TouchableOpacity style={styles.action2} onPress={() => this.sendGoogleMaps(todo.google)}>
                <MaterialCommunityIcons name={'google-maps'} size={Dimensions.get('window').width*0.065} color={'#0A1F30'}/>
        </TouchableOpacity>
       </View>)
     }

   }


sendIstagram(instagram) {
  Linking.openURL(`${instagram}`);
};

sendGoogleMaps(coordenadas) {
  Linking.openURL(`${coordenadas}`);
  
};

   _retrieveData = async () => {
     
       
    try {
      const value = await AsyncStorage.getItem('ongId');
      const value2 = await AsyncStorage.getItem('ongName');
      if (value !== null) {
         this.setState({ id: value})
    
        await api.get('profile', {
          headers: {
            Authorization: `${this.state.id}`,   
           }}).then(response=> {

                 const ggg = response.data[0]
                 this.setState({todos: response.data})
                 this.setState({username: value2})
                 this.setState({idp: ggg.id})
                 this.setState({mudar: true})
                 this.setState({ isFetching: false })
                 this.setState({google: ggg.google})


                 
              
               this.props.dispatch({ type: 'INCREMENT2' })
           })

      }

      } catch (error) {
     
    }

    setTimeout(() => {
      this.setState({isFetching: false});
    }, 4000);
  };



  
  render() {
     if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
   
    else {
  
    return (
      <View style={{flex:1,paddingHorizontal: Dimensions.get('window').width*0.015,
      paddingTop: Constants.statusBarHeight, height: windowHeight}}>
      
      <View>
        <StatusBar backgroundColor="#203242" barStyle="Dark-content" ></StatusBar>
        </View>

     <View style={styles.header} >
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} > 
          <Feather name={'list'} size={windowWidth*0.08} color='#203242' styles={{alignItems: 'center'}}/>
         
          </TouchableOpacity>
            <Image style={{height: windowHeight*0.11, width: windowWidth*0.60, }}
               source={require('../../../assets/icon.png')}></Image>
                {this.acultbo()}

          </View>

          <Text style={styles.user}>Bem vindo {this.state.username}</Text>
        
        <FlatList
          data={this.state.todos}
          ListEmptyComponent={this._listEmptyComponent}
          keyExtractor={ todo => String(todo.id)} 
          extraData={this.state.todos}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          
          renderItem={({item: todo})=>(
                   

            <View style={styles.body2}>
            <View style={styles.body}>
            <Card.Cover progressiveRenderingEnabled={true} 
                    style={{width: Constants.statusBarHeight*3, 
                            height: Constants.statusBarHeight*3, 
                            borderRadius: Constants.statusBarHeight*1.5,}} 
                    source={{uri: `${todo.instagram}`}}/>
            <Text style={styles.title}>{todo.title}</Text>
            <TouchableOpacity>
            <AntDesign name="delete" size={windowWidth*0.045} color="black" onPress={this.deletepost} />
            </TouchableOpacity>
            </View>
            <Text style={styles.description1}>Descrição:</Text>
            <Text style={styles.description}>{this.tested(String(todo.description))}</Text>
            <Text style={styles.description1}>Destacado na pagina principal:</Text>
            <Text style={styles.destaque}>{this.simnao(todo.destaque)}</Text>
           
             {this.renderlocali()}

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: windowHeight*0.03}}>
               <Text style={styles.description1}>Instagram da Loja       -- </Text>                   
                 <TouchableOpacity style={styles.action3} onPress={() => this.sendIstagram(todo.value)}>
                        <FontAwesome name={'instagram'} size={Dimensions.get('window').width*0.065} color={'#0A1F30'}/>
                 </TouchableOpacity>
              </View>         
            </View>

            
            
          )}
        />
          <View style={{width: windowWidth, height: windowHeight*0.15, marginLeft: -5}}>
          <AdMobBanner
      
      bannerSize={"smartBannerPortrait"}
      adUnitID={this.bannerAdId}
      //setTestDeviceIDAsync={false} // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds={true} // true or false
      onDidFailToReceiveAdWithError={(err) => console.log(err)}
       />
        </View>
          
       
      </View>
    );
  }
}
}

const styles = StyleSheet.create({
  

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Dimensions.get('window').width*0.015,
    //paddingTop: Constants.statusBarHeight,
    alignItems: "center" 
    
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center" 
  },
  user:{

    fontSize: windowHeight*0.025,
    padding:20,
    fontFamily: 'Inter-Black'
    
  },

  button:{
     paddingVertical: windowHeight*0.04,
     alignItems: "center",
     alignContent: 'center',
     alignSelf: 'center',
     

  },
  title: {
       //paddingVertical: 15,
       fontSize: windowHeight*0.025,
       fontFamily: 'Inter-Black'

  },
  description: {
    fontSize: windowHeight*0.023,
    paddingVertical: 5,
    fontFamily: 'Inter-BlackC'
  } ,
  description1:{
    fontSize: windowHeight*0.024,
    paddingVertical: 5,
    fontFamily: 'Inter-Black',
    //fontSize: 15
    
  },
  destaque: {
    fontSize: windowHeight*0.023,
    paddingVertical: 5,
    fontFamily: 'Inter-BlackC'
  }, 
  value: {
    fontSize: windowHeight*0.023,
    paddingVertical: 5,
    fontFamily: 'Inter-BlackC'
  },
  google: {
    fontSize: windowHeight*0.023,
    paddingVertical: 5,
    fontFamily: 'Inter-BlackC'
  },

  body2:{
    
     paddingHorizontal: 20,
     paddingVertical: 15,
     backgroundColor: "#FFF"
  },

  area: {
      paddingVertical: 10
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
