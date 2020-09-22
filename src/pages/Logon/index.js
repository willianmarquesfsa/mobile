import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage} from 'react-native';
import api from '../../services/api';
import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';

export default function Logon({ count, dispatch, navigation }) {

  console.log(count+'kmmmhk')
  return <Logonk navigation={navigation} dispatch={dispatch} count={count} ></Logonk>
}

class Logonk extends Component {
  
  static navigationOptions = {
    header: null,
  };
  
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = { email: '', error: '' };

  handleEmailChange = (email) => {
    this.setState({ email });
  };
      
  handleCreateAccountPress = () => {
    this.props.navigation.navigate('Profile');
    
  };
 
jjjjj = () => {
  this.props.dispatch({ type: 'INCREMENT' })
}

jjjjj2 = () => {
  this.props.dispatch({ type: 'DECREMENT' })
}

InputChange1 = () => {
    
  //console.log(this.props.InputChange())
  return this.props.InputChange4()
}

  handleSignInPress = async () => {
    if (this.state.email.length === 0 ) {
      this.setState({ error: 'Preencha seu ID de acesso para continuar!' }, () => false);
    } else {
      try {
        const response = await api.post('/sessions', {
          id: this.state.email,
          
        });
          
        await AsyncStorage.setItem('ongName', response.data.name);
        await AsyncStorage.setItem('ongId', this.state.email);
        this.props.dispatch({ type: 'INCREMENT' })
        this.props.navigation.navigate('Postagem');
        
      } catch (_err) {
        console.log(_err)
        this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
      }
    }
  };

  render() {
    return (
      <Container>
        <Logo source={require('../../../assets/icon.png')} resizeMode="contain" />
        <Input
          placeholder="ID de Acesso"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
        <Button onPress={this.handleSignInPress}>
          <ButtonText>Entrar</ButtonText>
        </Button>
          <SignUpLink onPress={this.handleCreateAccountPress}>
          <SignUpLinkText>Criar conta grátis</SignUpLinkText>
        </SignUpLink>
      </Container>
    );
  }
}