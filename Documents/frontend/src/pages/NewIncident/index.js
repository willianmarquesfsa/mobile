import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';

import api from '../services/api';

import './styles.css';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);





const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      height: 50
    },
  }));


export default function NewIncident(){

   

  function hand(){
    return(e => setTitle(e.target.value))
  }

    
    const classes = useStyles();

    const ongName = localStorage.getItem('ongName');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    const [instagram, setInstagram] = useState('');
    const [destaque, setDestaque] = useState('');
    const [google, setGoogle] = useState('')


    async  function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
            instagram,
            destaque,
            google 
        };

        try {
          await api.post('incidents', data, {
              headers: {
                  Authorization: ongId,
              }
          })
          history.push('/profile');  
        }catch(err) {
            alert ('Erro ao cadastrar caso, tente novamente');
        }
    }

     
    return (
        <div className="new-incident-container">
            <div className="content">
            <section>
            

            <h1>Cadastro:</h1>
            <p>Unidade de negócio.</p>
            
            </section>

            <form onSubmit={handleNewIncident}> 
            
            <FormControl className={classes.margin}>
              <InputLabel id="demo-customized-textbox">Nome da empresa</InputLabel>
                <Select
                  style={{width:280 }}
                  labelId="demo-customized-textbox"
                  id="demo-customized-select"
                  value={title}
                  onChange={hand()}
                  >
          
                  <MenuItem value={ongName}>{ongName}</MenuItem>
          
                </Select>
           </FormControl>

            
      
      
            <input 
                placeholder="Alterar nome da empresa"
                value={title}
                onChange={e => setTitle(e.target.value)}>    
                </input>

            <textarea 
                placeholder="Descrição do instagram "
                value={description}
                onChange={e => setDescription(e.target.value)}>
                </textarea>
            <input 
                placeholder="URL do Instagram"
                value={value}
                onChange={e => setValue(e.target.value)}>
                </input>
            <input 
                placeholder="Link da foto do Instagram" 
                value={instagram} 
                onChange={e => setInstagram(e.target.value)}>
                </input>

                <input 
                placeholder="Link da localização do google Maps" 
                value={google} 
                onChange={e => setGoogle(e.target.value)}>
                </input>

                <FormControl className={classes.formControl} >
        <InputLabel  id="demo-simple-select-label">Destacar na pagina principal?</InputLabel>
        <Select style={{width:240 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={destaque}
          onChange={e => setDestaque(e.target.value)}
        >
          <MenuItem value={'1'}>Não</MenuItem>
          <MenuItem value={'2'}>Sim</MenuItem>
          
         
        </Select>
      </FormControl>


            
            
            <button className="button" type="submit">Cadastrar</button>
            <Link className="back-link" to  = "/profile"><FiArrowLeft size={16} color="#E02041"/>Voltar para a home </Link> 
            </form>
            
            </div>

            
        </div>
    )
}