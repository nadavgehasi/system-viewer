import React from 'react';
import './App.css';
import ServersTable from "./components/ServersTable/ServersTable";
import {getServers} from "./api/getServers";



function App() {
  return (
    <div className="App">
        <p></p>
        <p></p>
        <p></p>
        <ServersTable servers={getServers()}/>
    </div>
  );
}

export default App;
