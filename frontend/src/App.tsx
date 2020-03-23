import React, {useState} from 'react';
import './App.css';

import ServersTable from "./components/ServersTable/ServersTable";
import {deleteServerApi, getServers} from "./api/ServerApi";
import {filterObjFromArray} from "./utils/ArrayUtils";

import {Tabs} from "antd";
import "antd/lib/tabs/style/index.css"

import TeamsList from "./components/TeamsList/TeamsList";

const { TabPane } = Tabs;

function App() {
    const [servers, setServers] = useState(getServers());

    const deleteServer = (serverId: string) => {
        deleteServerApi(serverId);
        setServers(filterObjFromArray(serverId, servers))
    };

    return (
        <div className="App">
            <Tabs>
                <TabPane tab="צוותים" key="1">
                    <TeamsList/>
                </TabPane>
                <TabPane tab="טבלה" key="2">
                    <p></p>
                    <p></p>
                    <p></p>
                    <ServersTable
                        servers={servers}
                        deleteServer={deleteServer}
                    />
                </TabPane>
            </Tabs>
        </div>
  );
}

export default App;
