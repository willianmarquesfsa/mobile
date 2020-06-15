import React, {useState} from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../services/api';

import logoImg from '../../assets/logo2.png';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



export default function Register() {

    const classes = useStyles();
    
   


    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [whatsapp,setWhatsapp]=useState('');
    const [city,setCity]=useState('');
    const [uf,setUF]=useState('');
    const [grupo,setgrupo]=useState('');
    
    const [centrolojistico,setcentrolojistico]=useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {name,email,whatsapp,city,uf,grupo,centrolojistico};

        try{
        const response =  await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id} `);
        history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente.')
        }

    }

    return (

        <div className="register-container">
        
            <div className="content">
            <img src={logoImg} alt="Cadastro Simples"/>
            <section>
            

            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre na pataforma e torne sua impresa mais visivel e acessivel.</p>
            
            </section>

            <form onSubmit={handleRegister}>
            <input placeholder="Nome da Negócio" value={name} onChange={e=>setName(e.target.value)}></input>
            <input type="email" placeholder="E-mail (Não obrigatório)" value={email} onChange={e=>setEmail(e.target.value)}></input>
            <input placeholder="Whatsapp Ex: 5575988889999" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)}></input>
            
            <div className="input-group">
            <FormControl className={classes.formControl} >
        <InputLabel  id="demo-simple-select-label">Cidade</InputLabel>
        <Select style={{width:120 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          onChange={e=>setCity(e.target.value)}
        >
          <MenuItem value={'Feira de Santana'}>Feira de Santana</MenuItem>
          
         
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} >
        <InputLabel  id="demo-simple-select-label">Estado (UF)</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={uf}
          onChange={e=>setUF(e.target.value)}
        >
          <MenuItem value={'BA'}>Bahia</MenuItem>
          
         
        </Select>
      </FormControl>
            
            
            </div>

             <div className="input-group">
             
             
      <FormControl className={classes.formControl} >
       <InputLabel  id="demo-simple-select-label">Loja/Serviço</InputLabel>
        <Select style={{width:120 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={centrolojistico}
          onChange={e=>setcentrolojistico(e.target.value)}
        >
          <MenuItem value={'Feiraguay'}>Feiraguay</MenuItem>
          <MenuItem value={'FeiraPortal'}>FeiraPortal</MenuItem>
          <MenuItem value={'Polimodas'}>Polimodas</MenuItem>
         
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={grupo}
          onChange={e=>setgrupo(e.target.value)}
        >
          <MenuItem value={'AcessoriosDiversos'}>AcessoriosDiversos</MenuItem>
          <MenuItem value={'Beleza'}>Beleza</MenuItem>
          <MenuItem value={'Eletronicos'}>Eletronicos</MenuItem>
          <MenuItem value={'Moda Feminina'}>Moda Feminina</MenuItem>
          <MenuItem value={'Moda Masculina'}>Moda Masculina</MenuItem>
          <MenuItem value={'CasaeJardin'}>CasaeJardin</MenuItem>
        </Select>
      </FormControl>
             </div>

            
            
            <button className="button" type="submit">Cadastrar</button>

            </form>
            <Link className="back-link" to  = "/"><FiArrowLeft size={16} color="#E02041"/>Tenho cadastro </Link> 
            </div>
        </div>
    )
}