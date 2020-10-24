import React, {Component} from 'react';
import Menu from '../../components/menu';
import Jumbotron from '../../components/menu';



class Filmes extends Component {

    render(){
        return(
            <div>
                <Menu/>
                <Jumbotron titulo='Filmes' descricao='Gerencie seus filmes' />
            </div>
        )
    }

}

export default Filmes;