import React,{useState} from 'react';
import { useHistory} from 'react-router-dom';
import ItemService from '../services/item-services';
export default function CadastroItem(){
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

    function clearFields(){
        setMarca('');
        setModelo('');
        setCalibre('');
        setImagem('');
    }
    async function cadastrarItens() {
        let item = {
          marca: marca,
          modelo: modelo,
          calibre: calibre,
          imagem: imagem
        }
    const response = await ItemService.save(item);


    if (response.status === 200) {
      alert('Cadastro efetuado com sucesso !')
      clearFields();
      buscarItens();
    } else {
      alert('ERRO!')
    }
  }

  async function buscarItens() {
    const response = await ItemService.findAll();
    setItens(response.data);
  }

    return (
    <div class = "container">
        <div class = "card">
            <h1 class = "titulo">
                cadastro de itens
            </h1>
            <div id ="entrada">
                
                <p class = "label_in">
                    <label class= "texto">
                        Marca:
                    </label>
                    <input 
                    class  = "formul" 
                    value = {marca} 
                    onChange = {handleMarcaChange}
                    />
                </p>
                <p class = "label_in">
                    <label class= "texto">
                        Modelo:
                    </label>
                    <input 
                    class  = "formul" 
                    value = {modelo} 
                    onChange = {handleModeloChange}
                    />
                </p >
                <p class = "label_in">
                    <label class= "texto">
                        Calibre:
                    </label>
                    <input 
                    class  = "formul" 
                    value = {calibre} 
                    onChange = {handleCalibreChange}
                    />
                </p>
                <p class = "label_in">
                    <label class= "texto">
                        Imagem:
                    </label>
                    <input 
                    class  = "formul" 
                    value = {imagem} 
                    onChange = {handleImagemChange}
                    />
                </p>
                <button class = "botao" onClick = {cadastrarItens}>Cadastrar</button>
            </div>
        </div>
        <div class = "footer">
          <button class = "botao" onClick = {
            function handleSubmit(e) {
              e.preventDefault();  
              history.push('/');
            }
            
            
            }> Home </button>
         
          
        </div>
    </div>
    )
}