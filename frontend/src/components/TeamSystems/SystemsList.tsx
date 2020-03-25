import React, {useState} from "react";
import {deleteSystemApi, getTeamSystems} from "../../api/SystemApi";
import {List} from "antd";
import "../General/ListStyle.css"
import SystemCard from "./SystemCard";
import {RouteComponentProps} from "react-router-dom";
import {deleteSystemFromSystems, deleteTeamFromTeams} from "../../utils/ArrayUtils";

interface SystemsListProps extends RouteComponentProps<{teamId: string }> {

}

const SystemsList: React.FC<SystemsListProps> = ({match}) =>  {
    const [systems, setSystems] = useState(getTeamSystems(match.params.teamId));

    const deleteSystem = (systemId: string) => {
        deleteSystemApi(systemId);
        setSystems(deleteSystemFromSystems(systemId, systems));
    };

    return (
        <List
            dataSource={systems}
            renderItem={
                system => (<SystemCard system={system} deleteSystem={deleteSystem}/>)
            }
        />
    );
};


export default SystemsList;