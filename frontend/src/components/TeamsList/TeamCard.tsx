import React from "react";
import { Card } from "antd";
import { Team } from "../../types/team";
import "antd/lib/card/style/index.css";
import "../General/Card/CardStyle.css";
import { Link } from "react-router-dom";
import PropertyList from "../General/List/PropertyList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons/faEdit";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons/faTrashAlt";
import CardTitle from "../General/Card/CardTitle";

interface TeamProps {
  team: Team;
  deleteTeam: (teamId: string) => void;
}

const TeamCard: React.FC<TeamProps> = ({ team, deleteTeam }) => {
  return (
    <Card
      title={
        <CardTitle
          id={team.id}
          title={<Link to={`/teams/${team.id}`}>{team.name}</Link>}
          deleteCard={deleteTeam}
        />
      }
    >
      <PropertyList
        content={{
          "מספר מערכות": team.numberOfSystems,
          "מספר שרתים": team.numberOfServers,
          "מידע חופשי": team.info
        }}
      />
    </Card>
  );
};

export default TeamCard;
