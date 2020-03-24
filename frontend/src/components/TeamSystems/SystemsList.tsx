import React, {useState} from "react";
import {getSystems} from "../../api/SystemApi";
import {List} from "antd";
import "./SystemsList.css"
import SystemCard from "./SystemCard";
import {RouteComponentProps} from "react-router-dom";

interface SystemsListProps extends RouteComponentProps<{teamId: string }> {

}

const SystemsList: React.FC<SystemsListProps> = ({match}) =>  {
    const [systems, setSystems] = useState(getSystems(match.params.teamId));

    return (
        <List
            dataSource={systems}
            renderItem={system => (
                <SystemCard system={system}/>
            )}
        />
    );
};


export default SystemsList;