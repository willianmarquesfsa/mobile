import React from 'react';
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ButtonText,
} from 'react-native';
import { Chevron } from 'react-native-shapes';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
// import RNPickerSelect, { defaultStyles } from './debug';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import {Feather} from '@expo/vector-icons';
import api from '../../services/api';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
  
import { Dimensions } from 'react-native';

  
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let customFonts = {
  'Inter-Black': require('../../assets/fonts/BellotaText-Bold.ttf'),
  'Inter-BlackC': require('../../assets/fonts/BellotaText-Regular.ttf'),
};

export default class Profile extends React.Component {
   
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
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
  
    this._loadFontsAsync();

  

  this. state = {
    username: '',
    email: '',
    whatsapp: '',
    city: 'Feira de Santana',
    uf: 'BA',
    grupo: '',
    centrolojistico: '',
    tipoloja: '',
    visual: <View></View>,
    visual2: <View></View>,
    visual3: <View></View>,
    error: '',
    success: '',
    fontsLoaded: false,
  };
  //this.InputAccessoryView = this.InputAccessoryView.bind(this);
  }


  handleUsernameChange = (username) => {
    this.setState({ username });
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handleWhatsappChange = (whatsapp) => {
    this.setState({ whatsapp });
  };
  handleCityChange = (city) => {
    this.setState({ city });
  };

  handleUfChange = (uf) => {
    this.setState({ uf });
  };

  handleGrupoChange = (grupo) => {
    
    this.setState({ grupo });
   
  };

  createTwoButtonAlert = (Texto) => {
  this.setState({username: '',
                       email: '',
                       whatsapp: '',
                       grupo: '',
                       centrolojistico: '',
                       tipoloja: '',
                       visual2: <View></View>, 
                      })
    Alert.alert(
      "Mensagem:",
      `${Texto}.`,
      [
       
        { text: "OK", onPress: () => this.props.navigation.navigate('Logon')
        }
      ],
      { cancelable: false }
    );


  }


  handleCentrolojisticoChange = (centrolojistico) => {
    this.setState({ centrolojistico });
    this.setState({visual2: <View></View>})
    console.log(centrolojistico)
    if ( centrolojistico == 'Feiraguay'||
         centrolojistico == 'FeiraPortal'||
         centrolojistico == 'Polimodas'||
         centrolojistico == 'Centro da Cidade'
         ) {
          this.setState({visual2: <View><View paddingVertical={2} />

            <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Categoria</Text>
            {/* and value defined */}
            <RNPickerSelect
              placeholder={{
                            label: 'Selecione a categoria do seu negócio',
                            value: null,
                            color: '#203242',
                                  }}
              value={this.setState({grupo: this.state.grupo})}                    
              items={[{ label: 'Acessorios Diversos', value: 'AcessoriosDiversos"'},
                      { label: 'Beleza', value: 'Beleza' },
                      { label: 'Moda Feminina', value: 'Moda Feminina' },
                      { label: 'Moda Masculina', value: 'Moda Masculina' },
                      { label: 'Casae & Jardin', value: 'CasaeJardin' },
                      ]}
              onValueChange={this.handleGrupoChange}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
              Icon={() => {
                return <Ionicons name="md-arrow-down" size={24} color="gray" />;
              }}
            /></View>})
         };
         if ( centrolojistico == 'Agro e PetShos') {
           this.setState({visual2: <View><View paddingVertical={2} />

            <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Categoria de Agro e PetShos</Text>
            {/* and value defined */}
            <RNPickerSelect
              placeholder={{
                            label: 'Selecione uma categoria de Agro e PetShops',
                            value: null,
                            color: '#203242',
                                  }}
              value={this.setState({grupo: this.state.grupo})}                    
              items={[{ label: 'Nutrição e Estetica animal', value: 'Nutrição e Estetica animal'},
                      { label: 'Veterinaria', value: 'Veterinaria' },
                     
                      ]}
              onValueChange={this.handleGrupoChange}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
              Icon={() => {
                return <Ionicons name="md-arrow-down" size={24} color="gray" />;
              }}
            /></View>})
          
         }

         if ( centrolojistico == 'Autos') {

          this.setState({visual2: <View><View paddingVertical={2} />

            <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Categoria de Autos</Text>
            {/* and value defined */}
            <RNPickerSelect
              placeholder={{
                            label: 'Selecione uma categoria de Autos',
                            value: null,
                            color: '#203242',
                                  }}
              value={this.setState({grupo: this.state.grupo})}                    
              items={[{ label: 'Locação e seguros', value: 'Locação e seguros'},
                      { label: 'Chaparia e Pintura', value: 'Chaparia e Pintura' },
                      { label: 'Mecanica e Eletrica', value: 'Mecanica e Eletrica' },
                      { label: 'Lavagem', value: 'Lavagem' },
                     
                      ]}
              onValueChange={this.handleGrupoChange}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
              Icon={() => {
                return <Ionicons name="md-arrow-down" size={24} color="gray" />;
              }}
            /></View>})

         }

         if ( centrolojistico == 'Casa e Construção') {
            
          this.setState({visual2: <View><View paddingVertical={2} />

            <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Categoria Casa e Construção</Text>
            {/* and value defined */}
            <RNPickerSelect
              placeholder={{
                            label: 'Selecione uma categoria de Casa e Construção',
                            value: null,
                            color: '#203242',
                                  }}
              value={this.setState({grupo: this.state.grupo})}                    
              items={[{ label: 'Empreiteiras', value: 'Empreiteiras'},
                      { label: 'Móveis Portões e Vidros Planejados', value: 'Móveis Portões e Vidros Planejados' },
                      { label: 'Engenharia e Arquitetura', value: 'Engenharia e Arquitetura' },
                      
                     
                      ]}
              onValueChange={this.handleGrupoChange}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
              Icon={() => {
                return <Ionicons name="md-arrow-down" size={24} color="gray" />;
              }}
            /></View>})

         }
         if ( centrolojistico == 'Manutenção em informática') {

          this.setState({visual2: <View><View paddingVertical={2} />

            <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Categoria Manutenção e informática</Text>
            {/* and value defined */}
            <RNPickerSelect
              placeholder={{
                            label: 'Selecione uma categoria de Manutenção e informática',
                            value: null,
                            color: '#203242',
                                  }}
              value={this.setState({grupo: this.state.grupo})}                    
              items={[{ label: 'CPUs e Notebooks', value: 'CPUs e Notebooks'},
                      { label: 'Internet e Comunicação', value: 'Internet e Comunicação' },
                      { label: 'Celulares', value: 'Celulares' },
                      { label: 'Eletronicos', value: 'Eletronicos' },
                      { label: 'Refrigeração e Assistencia Técnica', value: 'Refrigeração e Assistencia Técnica' },
                      
                      
                     
                      ]}
              onValueChange={this.handleGrupoChange}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
              Icon={() => {
                return <Ionicons name="md-arrow-down" size={24} color="gray" />;
              }}
            /></View>})
         }

         if ( centrolojistico == 'Saúde e Beleza') {

          this.setState({visual2: <View><View paddingVertical={2} />

            <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Categoria Saúde e Beleza</Text>
            {/* and value defined */}
            <RNPickerSelect
              placeholder={{
                            label: 'Selecione uma categoria de Saúde e Beleza',
                            value: null,
                            color: '#203242',
                                  }}
              value={this.setState({grupo: this.state.grupo})}                    
              items={[{ label: 'Cabelo e Barba', value: 'Cabelo e Barba'},
                      { label: 'Clinicas e Estetica', value: 'Clinicas e Estetica' },
                     
                      
                      
                     
                      ]}
              onValueChange={this.handleGrupoChange}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
              Icon={() => {
                return <Ionicons name="md-arrow-down" size={24} color="gray" />;
              }}
            /></View>})

         }

         if ( centrolojistico == 'Serviços Diversos' ) {
               
          this.setState({visual2: <View><View paddingVertical={2} />

            <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Categoria Serviços Diversos</Text>
            {/* and value defined */}
            <RNPickerSelect
              placeholder={{
                            label: 'Selecione uma categoria de Serviços Diversos',
                            value: null,
                            color: '#203242',
                                  }}
              value={this.setState({grupo: this.state.grupo})}                    
              items={[{ label: 'Chaveiros e Carimbos', value: 'Chaveiros e Carimbos'},
                      { label: 'Serviços Funerários', value: 'Serviços Funerários' },
                      { label: 'Viagens Turismo e Transporte', value: 'Viagens Turismo e Transporte' },
                      { label: 'Comunicação Visual e Fotografia', value: 'Comunicação Visual e Fotografia' },
                     
                      
                      
                     
                      ]}
              onValueChange={this.handleGrupoChange}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
              Icon={() => {
                return <Ionicons name="md-arrow-down" size={24} color="gray" />;
              }}
            /></View>})

         }
  };
  handletipolojaChange = (tipoloja) => {
    this.setState({ tipoloja });
    this.setState({visual: <View></View>})
    if(tipoloja == 'Comércio') {
  this.setState({visual: <View><View paddingVertical={2} />

    <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Local</Text>
    {/* and value defined */}
    <RNPickerSelect
      placeholder={{
                    label: 'Selecione o centro comercial',
                    value: null,
                    color: '#203242',
                          }}
      value={this.setState({centrolojistico: this.state.centrolojistico}) }                    
      items={[{ label: 'Feiraguay', value: 'Feiraguay'},
              { label: 'FeiraPortal', value: 'FeiraPortal' },
              { label: 'Polimodas', value: 'Polimodas' },
              { label: 'Centro da Cidade', value: 'Centro da Cidade' },
              ]}
      onValueChange={this.handleCentrolojisticoChange}
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          top: 10,
          right: 12,
        },
      }}
      
      useNativeAndroidPickerStyle={false}
      textInputProps={{ underlineColor: 'yellow' }}
      Icon={() => {
        return <Ionicons name="md-arrow-down" size={24} color="gray" />;
      }}
    /></View>})
    }
    if (tipoloja == 'Serviço') {
      this.setState({visual: <View><View paddingVertical={5} />

        <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Area do Serviço:</Text>
        {/* and value defined */}
        <RNPickerSelect
          placeholder={{
                        label: 'Selecione uma categoria de Serviço:',
                        value: null,
                        color: '#203242',
                              }}
          value={this.setState({centrolojistico: this.state.centrolojistico})}                    
          items={[{ label: 'Agro e PetShos', value: 'Agro e PetShos'},
                  { label: 'Autos', value: 'Autos' },
                  { label: 'Casa e Construção', value: 'Casa e Construção' },
                  { label: 'Manutenção em informática', value: 'Manutenção em informática' },
                  { label: 'Saúde e Beleza', value: 'Saúde e Beleza' },
                  { label: 'Serviços Diversos', value: 'Serviços Diversos' },
                  ]}
          onValueChange={this.handleCentrolojisticoChange}
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 10,
              right: 12,
            },
          }}
          
          useNativeAndroidPickerStyle={false}
          textInputProps={{ underlineColor: 'yellow' }}
          Icon={() => {
            return <Ionicons name="md-arrow-down" size={24} color="gray" />;
          }}
        /></View>})
    }
    console.log(tipoloja)
  };

  handleBackToLoginPress = () => {
    this.props.navigation.navigate('Destaque');
  };

  handleSignUpPress = async () => {
    if (this.state.email.length === 0 || 
        this.state.username.length === 0 || 
        this.state.whatsapp.length === 0 || 
        this.state.city.length === 0 || 
        this.state.uf.length === 0 || 
        this.state.grupo.length === 0 || 
        this.state.centrolojistico.length === 0
        ) {
      this.setState({ error: 'Preencha todos os campos para continuar!' }, () => false);
    } else {
      try {
        const response = await api.post('/ongs', {
          name: this.state.username,
          email: this.state.email,
          whatsapp: this.state.whatsapp,
          city: this.state.city,
          uf: this.state.uf,
          grupo: this.state.grupo,
          centrolojistico: this.state.centrolojistico,
        });

        const res = response.data

        console.log(response.data)


        this.setState({ error: 'Conta criada com sucesso! Redirecionando para o login' });
        this.createTwoButtonAlert(res.resposta)
        //setTimeout(()=>{this.props.navigation.navigate('Logon')}, 1000 )
        

        
      } catch (_err) {
        this.setState({ error: 'Houve um problema com o cadastro, verifique os dados preenchidos!' });
      }
    }
  };

  

  

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>
          
          <View style={{justifyContent: 'flex-start' , alignItems: "center", flexDirection: 'row', width: windowWidth}}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} > 
          <Feather name={'list'} size={windowWidth*0.08} color='#203242' styles={{alignItems: 'center'}}/>
         
          </TouchableOpacity>
            <Image source={require('../../../assets/icon.png')} 
                   style={{height: windowHeight*0.12, 
                           width: windowWidth*0.2,
                           marginBottom: 10,
                           paddingHorizontal: windowWidth*0.38}} resizeMode="contain"></Image>
          </View>
          <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Nome de usuário.</Text>
          <TextInput
            
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            //returnKeyType="next"
            //enablesReturnKeyAutomatically
            //onSubmitEditing={() => {
              //this.inputRefs.favSport0.togglePicker();
            
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            //blurOnSubmit={false}
          />

           <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>E-mail.</Text>
          <TextInput
            
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            //returnKeyType="next"
            //enablesReturnKeyAutomatically
            //onSubmitEditing={() => {
              //this.inputRefs.favSport0.togglePicker();
            
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            //blurOnSubmit={false}
          />
           <Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Whatsapp.</Text>
          <TextInput
            placeholder="Ex: 5575991234455"
            value={this.state.whatsapp}
            onChangeText={this.handleWhatsappChange}
            //returnKeyType="next"
            //enablesReturnKeyAutomatically
            //onSubmitEditing={() => {
              //this.inputRefs.favSport0.togglePicker();
            
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            //blurOnSubmit={false}
          />

 

         
<View paddingVertical={2} />

<Text style={{paddingVertical: windowHeight*0.01, fontFamily: 'Inter-Black', fontSize: windowHeight*0.021,}}>Tipo de Empresa.</Text>
{/* and value defined */}
<RNPickerSelect
  placeholder={{
                label: 'Selecione Comercio ou Serviço:',
                value: null,
                color: '#203242',
                      }}
  value={this.state.tipoloja}                    
  items={[{ label: 'Comércio', value: "Comércio" },
          { label: 'Serviço', value: 'Serviço' },
          ]}
  onValueChange={this.handletipolojaChange}
  style={{
    ...pickerSelectStyles,
    iconContainer: {
      top: 10,
      right: 12,
    },
  }}
  
  useNativeAndroidPickerStyle={false}
  textInputProps={{ underlineColor: 'yellow' }}
  Icon={() => {
    return <Ionicons name="md-arrow-down" size={24} color="gray" />;
  }}
/>


<View>{this.state.visual}</View>
<View>{this.state.visual2}</View>

<View>{this.state.visual3}</View>
<Text>{this.state.error}</Text>
<View style={{marginTop: windowWidth*0.03}}>
 
<Button 
        title="Cadastrar"
        onPress={this.handleSignUpPress}
        color="#203242"
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
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContentContainer: {
    paddingTop: windowHeight*0.025,
    paddingBottom: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
