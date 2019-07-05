import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Entregas from './pages/entregas';
import SingleEntrega from './pages/singleEntrega';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/entregas" component={Entregas} />
            <Route exact path="/entregas/:id" component={SingleEntrega} />
        </Switch>
    </BrowserRouter>
);

export default Routes;