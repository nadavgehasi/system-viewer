import React from "react";
import {Card} from "antd";
import {Team} from "../../types/team";
import "antd/lib/card/style/index.css"
import "./TeamCard.css"
import {Link} from "react-router-dom"

interface TeamProps {
    team: Team;
}

const TeamCard:React.FC<TeamProps> = ({team}) =>  {
    return (
        <Card title={team.name}>
            <h3>מספר המערכות: {team.numberOfSystems}</h3>
            <h3>מספר השרתים: {team.numberOfServers}</h3>
            <h3>
                <Link to={`/teams/${team.id}`}>פרטים</Link>
            </h3>
        </Card>
    );
};

export default TeamCard;