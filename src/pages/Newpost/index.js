import React from 'react';
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import RadioForm from 'react-native-simple-radio-button';
import * as Font from 'expo-font';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';
import { Dimensions, PermissionsAndroid  } from 'react-native';
import api from '../../services/api';
import { AdMobRewarded} from 'expo-ads-admob'



var radio_props = [
  {label: 'Sim', value: '2' },
  {label: 'Não', value: '1' }
];
  

let space = 'og:image" content="';
let space2 = 'og:title" content="';
let space3 = 'biography":"';

let valim = '" />';
let vatit = '(@';
let vades = '","bloc';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


var splitString = function(stringToSplit, separator, vain) {
    var arrayOfStrings = stringToSplit.split(separator);
    var test = arrayOfStrings[1].split(vain)
    if(test[0].length>500) { console.log('Muito Grande')}
        else  
        console.log(test[0])
        return test[0]
              
     }
     let customFonts = {
      'Inter-Black': require('../../assets/fonts/BellotaText-Bold.ttf'),
      'Inter-BlackC': require('../../assets/fonts/BellotaText-Regular.ttf'),
    };
  

export default class Newpost extends React.Component {

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
   
  }


   verifyLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permissão concedida');
        this.setState({setHasLocationPermission: true})
        this.setState({isReady: false})
        this.buscarlocalizacao()
        
      } else {
        console.error('permissão negada');
        //this.teste()
        this.setState({setHasLocationPermission: true})
        
      }
    } catch (err) {
      console.warn(err);
    }
  }
  

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.bannerAdId = Platform.OS === "ios" ? "ca-app-pub-4742876649235540/1957614815": "ca-app-pub-4742876649235540/4478345684";
       
    this. state = {
    Instagram: '',
    title: '',
    description: '',
    destaque: '',
    value: '',
    latitude: '',
    longitude: '', 
    error: '',
    success: '',
    localizacao: '',
    google: '',
    fontsLoaded: false,
    isReady: true,
    hasLocationPermission: false,
    setHasLocationPermission: false,
    userPosition: false,
    setUserPosition: false,
     
  }; 
  
  }

  componentDidMount(){
    this._loadFontsAsync();    
  }

  componentWillUnmount(){
    this._loadFontsAsync();  
    
  }
    
 buscarlocalizacao = async () => {
  console.log('buca')

  try{
   
   navigator.geolocation.getCurrentPosition(
     position => {
       const latitude1 = JSON.stringify(position.coords.latitude);
       const longitude1 = JSON.stringify(position.coords.longitude);

       this.setState({
        google: `https://maps.google.com/maps?q=${latitude1}%2C${longitude1}&z=17&hl=pt-BR`,         
        
        });
     },
     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
   );
   
   setTimeout(()=>{this.teste()}, 1000 )
    }
    catch(Err){console.log('sasas')}
    
 };


  handleInstagramChange = (Instagram) => {
    this.setState({ Instagram });

    
  };
  handleLocalizacaoChange = (localizacao) => {
    this.setState({ localizacao });    
  };

  handleValueChange = async (value) => {
    this.setState({value})    
    
  };
     
 handleDestaqueChange = (destaque) => {
  this.setState({ destaque });
};

  handleBackToLoginPress = () => {
    this.props.navigation.navigate('Destaque');
  };

  handleSignUpPress = async () => {    

    if (this.state.localizacao == '2') {
            
      this.verifyLocationPermission()            
      
    }
        if (this.state.localizacao == '1') {
          this.setState({google: ''})
          this.teste()
        }        
  };

  teste = async () => {
    console.log('teste')
    this.setState({isReady: false})
    const value = await AsyncStorage.getItem('ongId');    

    if (this.state.value.length === 0 || this.state.destaque.length === 0
        
        ) {
      this.setState({ error: 'Preencha todos os campos para continuar!' }, () => false);
    } else {
     
      try {
                   
        var request = new XMLHttpRequest();
        request.open('GET', `https://instagram.com/${this.state.value}/`);
        request.send();
        request.onreadystatechange = (e) => {
           if (request.readyState !== 4) {
            return;
  }

      if (request.status === 200) {
       
        let xx1 = splitString(request.responseText, space, valim)
        let xx2 = splitString(request.responseText, space2, vatit)
        let xx3 = splitString(request.responseText, space3, vades)

          this.setState({instagram: xx1 })
          this.setState({title: `\n${xx2}` })
          this.setState({description: xx3})

          api.post('/incidents', {
            title: this.state.title,
            description: this.state.description,
            value: `https://instagram.com/${this.state.value}`,
            instagram: this.state.instagram,
            destaque: this.state.destaque,
            google: this.state.google,
            
          },{
            headers: {
                Authorization: value,
            }}
            )

            
            
            AsyncStorage.setItem('FotoInsta', `${this.state.instagram}` )
            AsyncStorage.setItem('Titulo', `${this.state.title}` )
            this.props.dispatch({ type: 'INCREMENT2' })
            this.props.dispatch({ type: 'FOTO' })
            
            this.setState({setHasLocationPermission: true})
            setTimeout(()=>{this.props.navigation.navigate('Postagem'), this.setState({isReady: true})}, 500 )
            
            
      } else {
         console.warn('error');
  }
};      

        this.setState({ success: 'Conta criada com sucesso! Redirecionando para o login', error: '' });
        
      } catch (_err) {
        this.setState({ error: 'Houve um problema com o cadastro, verifique os dados preenchidos!' });
      }
  }
}   

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{alignContent: 'center', 
        justifyContent: 'center', 
        
        width:windowWidth,
        height: windowHeight}}>
        
        <ActivityIndicator
          
        />
        </View>
      ); }

    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>
          <View style={{justifyContent: 'flex-start' , alignItems: "center", flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Postagem')}} > 
          <AntDesign name={'back'} size={windowWidth*0.08} color='#203242' styles={{alignItems: 'center'}}/>
         
          </TouchableOpacity>
            <Image source={require('../../../assets/icon.png')} 
            style={{height: windowHeight*0.12,
                    width: windowWidth*0.75,
                    alignItems: 'center',
                    alignContent: 'center',
                    alignSelf: 'center',
                    
                    }} 
                    resizeMode="contain"></Image>
          </View>
          <Text style={{paddingVertical: windowHeight*0.024, 
                        fontFamily: 'Inter-Black',
                        fontSize: windowHeight*0.024}}>Adicione seu Instagram:</Text>
          <TextInput
            
            value={this.state.value}
            onChangeText={this.handleValueChange}
                        
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            
          />
<View style={{paddingVertical: windowHeight*0.007}}>

<Text style={{paddingVertical: windowHeight*0.028, fontFamily: 'Inter-Black', fontSize: windowHeight*0.024,}}>Deseja destacar na pagina principal?</Text>
<RadioForm
          radio_props={radio_props}
          initial={'1'}
          onPress={(value) => {this.setState({destaque:value})}}
         
        />

<Text style={{paddingVertical: windowHeight*0.028, fontFamily: 'Inter-Black', fontSize: windowHeight*0.024, }}>Deseja marcar sua localização atual como a localização de sua loja?</Text>
<RadioForm 
          
          radio_props={radio_props}
          initial={'1'}
          onPress={(value) => {this.setState({localizacao:value})}}
        />
         

</View>

{this.state.error.length !== 0 && <Text>{this.state.error}</Text>}
<View style={{marginTop: 30}}>
 
<Button
        title="Publicar"
        color = '#203242'
        onPress={this.handleSignUpPress}
      />

</View>          
          
        </ScrollView>
      </View>
    );
          }
  }
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight  

  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContentContainer: {
    paddingTop: windowHeight*0.024,
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
},
circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
},
checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#794F9B',
},
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: windowHeight*0.022,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, 
  },
  inputAndroid: {
    fontSize: windowHeight*0.022,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, 
  },
});
