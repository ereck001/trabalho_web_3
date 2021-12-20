import React, {useState} from 'react';
import axios from 'axios';
import { useHistory} from 'react-router-dom';


export default function Home() {

  
  const history = useHistory();
  const [item,setItem] = useState('');
  function handlePesquisa(){
    axios.get('https://rickandmortyapi.com/api/character').then(
      response => {const catal = response.data;
      const nome =JSON.stringify(catal.map(repo => repo.name));
      localStorage.setItem('nome',nome);
      })
  }

  

 
    
  
  return (
    <>
      <div class ="container">
        <div class = "card">
          <img src = "https://taurusarmas.com.br/assets/img/content/products/product-251-photo-1.png" height ="200px"/>
          <h1 class = "titulo">
            CATÁLOGO DE ARMAS DE FOGO
          </h1>
          <h2>{item}</h2>
            <div class = "caixa_in">
              <p>
              <button class="botao" onClick = {
            function handleSubmit(e) {
              e.preventDefault();  
              history.push('/resultado');
            }}>Consultar catálogo</button>
              </p>
            </div>
        </div>
      
        <div class = "footer">
          <button class="botao" onClick = {
            function handleSubmit(e) {
              e.preventDefault();  
              history.push('/cadastro');
            }}> Cadastrar </button>
         
          
        </div>
      </div>
    </>
  );
}

