import React, {useState} from "react";
import {deleteTeamApi, getTeams} from "../../api/TeamApi";
import {List} from "antd";
import "../General/ListStyle.css"
import TeamCard from "./TeamCard";
import {deleteTeamFromTeams} from "../../utils/ArrayUtils";

const TeamsList = () =>  {
    const [teams, setTeams] = useState(getTeams());

    const deleteTeam = (teamId: string) => {
        deleteTeamApi(teamId);
        setTeams(deleteTeamFromTeams(teamId, teams));
    };

    return (
        <List
            dataSource={teams}
            renderItem={
                team => (<TeamCard team={team} deleteTeam={deleteTeam}/>)
            }
        />
    );
};

export default TeamsList;