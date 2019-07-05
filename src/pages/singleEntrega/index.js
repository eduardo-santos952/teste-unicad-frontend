import React, { Component } from 'react';

import api from '../../services/api';
export default class Main extends Component {

    state = {
        entrega: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/visualizar_entrega/${id}`);
        this.setState({ entrega: response.data.data });
        
    };

    render() {
        const { entrega } = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card" key={entrega.id} style={{width: 18 + 'rem'}}>
                            <div className="card-body">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3916957312395!2d-43.396438549075185!3d-22.9357973471684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd930232f05cf%3A0xbfd2262354de9a9!2sN%C3%BAcleo+Rodrigues+Caldas!5e0!3m2!1spt-BR!2sbr!4v1562329201495!5m2!1spt-BR!2sbr" allowfullscreen></iframe>
                                <h5 className="card-title">{entrega.nome}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{entrega.data_entrega}</h6>
                                <p className="card-text">{entrega.origem}</p>
                                <p className="card-text">{entrega.destino}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}