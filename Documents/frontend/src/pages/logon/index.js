import React,{ useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';

import api from '../services/api';


import './styles.css'
//import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo2.png'


export default function Logon(){

    const [id,setID] = useState('');
    const history = useHistory(); 
    
    async function handleLogin(e){
        e.preventDefault();
        
        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('./profile');
             
            console.log(response.data.name);
        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }

 return (
     <dic className="logon-container">
         <section className="form">
             <img src={logoImg} alt="Logo de Teste"/>
             <form onSubmit={handleLogin}>
                 <h1>Faça de Logon            
                 </h1>
                 <input placeholder='Sua ID' value={id} onChange={e => setID(e.target.value)}></input>
                 <button class="button" type="submit">Entrar</button>

                 <Link className="back-link" to  = "/register"><FiLogIn size={16} color="#E02041"/>Não tenho cadastro </Link> 
             </form>
         </section>
         
         

     </dic>
 );
}

