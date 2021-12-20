import React from 'react';
import { BrowserRouter , Switch,Route} from "react-router-dom";
import CadastroItem from "../components/cadastro-item";
import Home from "../components/home";
import Resultado from '../components/resultado';
export default function Rotas(){

    return(
        <BrowserRouter>

            <Switch>
                <Route path = '/' exact component = { Home }/>
                <Route  path='/cadastro' exact component = { CadastroItem }/>
                <Route  path='/resultado' exact component = { Resultado }/>
            </Switch>
        </BrowserRouter>
    );
}