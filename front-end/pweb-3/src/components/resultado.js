import React,{useState} from 'react';
import { useHistory} from 'react-router-dom';
import ItemService from '../services/item-services';

export default function Resultado(){

    
    const history = useHistory();
    const [marca,setMarca] = useState('');
    const [modelo,setModelo] = useState('');
    const [calibre,setCalibre] = useState('');
    const [imagem,setImagem] = useState('');
    const [itens,setItens] = useState([]);

    function handleMarcaChange(evt){
        setMarca(evt.target.value);
    }
    function handleModeloChange(evt){
        setModelo(evt.target.value);
    }
    function handleCalibreChange(evt){
        setCalibre(evt.target.value);
    }
    function handleImagemChange(evt){
        setImagem(evt.target.value);
    }
    async function buscarItens() {
        const response = await ItemService.findAll();
        setItens(response.data);
      }

    return(

        <div class = "container">
        <div class = "card">
            
        {itens.length > 0
                ?
                (
                  itens.map((item) =>
                    <tr key={item.idItem}>
                      <td><img src ={item.imagem} height = "100px"/></td>  
                      <td><div class ="carac">MARCA: </div >{item.marca}</td>   
                      <td><div class ="carac">MODELO: </div >{item.modelo}</td>
                      <td><div class ="carac">CALIBRE: </div >{item.calibre}</td>
                      <br/>
                      <br/>
                    </tr>
                    
                  )
                )
                : (
                  <div>Clique em Buscar</div>
                )
              }

            
            
        </div>
        <div class = "footer">
            <div id ="res_footer">
                <button class = "botao" onClick = {
                    function handleSubmit(e) {
                    e.preventDefault();  
                    history.push('/');
                    }}> Home </button>
                <button class = "botao" onClick = {buscarItens}>Buscar</button>  
            </div>
          
          
        </div>
    </div>

    )
}