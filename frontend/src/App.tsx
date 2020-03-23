import React, {useState} from 'react';
import './App.css';
import ServersTable from "./components/ServersTable/ServersTable";
import {deleteServerApi, getServers} from "./api/getServers";
import {filterObjFromArray} from "./utils/ArrayUtils";



function App() {
    const [servers, setServers] = useState(getServers());

    const deleteServer = (serverId: string) => {
        deleteServerApi(serverId);
        setServers(filterObjFromArray(serverId, servers))
    };

    return (
        <div className="App">
            <p></p>
            <p></p>
            <p></p>
            <ServersTable
                servers={servers}
                deleteServer={deleteServer}
            />
        </div>
  );
}

export default App;
