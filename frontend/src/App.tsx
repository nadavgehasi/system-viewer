import React from 'react';
import './App.css';

import ServersTable from "./components/ServersTable/ServersTable";

import AppMenu from "./components/Menu/AppMenu";

import TeamsList from "./components/TeamsList/TeamsList";

import {BrowserRouter, Route, Switch} from "react-router-dom"
import SystemsList from "./components/TeamSystems/SystemsList";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <AppMenu/>
                <Switch>
                    <Route path="/" exact component={TeamsList} />
                    <Route path="/table" exact component={ServersTable} />
                    <Route path="/teams" exact component={TeamsList} />
                    <Route path="/teams/:teamId" component={SystemsList} />
                </Switch>
            </BrowserRouter>
        </div>
  );
}

export default App;
