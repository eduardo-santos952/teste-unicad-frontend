import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
export default class Main extends Component {

    state = {
        entregas: []
    };

    componentDidMount() {
        this.loadEntregas();
    };

    loadEntregas = async () => {
        const response = await api.get('/entregas');
        this.setState({ entregas: response.data });
    };

    render() {
        return(
            <div className="container">
                <div className="row">
                        {this.state.entregas.map(entrega => (
                            <div className="col-md-3">
                                <div className="card" key={entrega.id} style={{width: 18 + 'rem'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{entrega.nome}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{entrega.data_entrega}</h6>
                                        <p className="card-text">{entrega.origem}</p>
                                        <p className="card-text">{entrega.destino}</p>
                                        <Link to={`/entregas/${entrega.id}`} className="card-link">Visualizar mapa</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        ) 
    }
}