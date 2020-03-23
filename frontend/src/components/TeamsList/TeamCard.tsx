import React from "react";
import {Card} from "antd";
import {Team} from "../../types/team";
import "antd/lib/card/style/index.css"
import "./TeamCard.css"

interface TeamProps {
    team: Team;
}

const TeamCard:React.FC<TeamProps> = ({team}) =>  {
    return (
        <Card title={team.name}>
            <h3>מספר המערכות: {team.numberOfSystems}</h3>
            <h3>מספר השרתים: {team.numberOfServers}</h3>
        </Card>
    );
};

export default TeamCard;