import React, {useState} from "react";
import {getTeams} from "../../api/TeamApi";
import {List} from "antd";
import "./TeamsList.css"
import TeamCard from "./TeamCard";

const TeamsList = () =>  {
    const [teams, setTeams] = useState(getTeams());

    return (
        <List
            dataSource={teams}
            renderItem={team => (
                <TeamCard team={team}/>
            )}
        />
    );
};


export default TeamsList;