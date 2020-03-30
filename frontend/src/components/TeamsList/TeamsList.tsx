import React, {useEffect, useState} from "react";
import { addTeamApi, deleteTeamApi, getTeams } from "../../api/TeamApi";
import { List } from "antd";
import "../General/List/ListStyle.css";
import TeamCard from "./TeamCard";
import AddModal from "../General/Modal/AddModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {Team} from "../../types/team";

const TeamsList = () => {
  const [teams, setTeams] = useState(Array<Team>());
  const [addTeamVisible, setAddTeamVisible] = useState(false);

  useEffect(() => {
      getTeams().then(teams => setTeams(teams));
  }, []);

  const updateTeams = (updatedTeams: Array<Team>): void => {
        setTeams(updatedTeams)
    };

  const deleteTeam = (teamId: string) => {
    const updatedTeams = deleteTeamApi(teamId);
    setTeams(updatedTeams);
  };

  const addTeam = (e: React.MouseEvent<HTMLElement>, newTeamInfo: any) => {
    setAddTeamVisible(false);
    const updatedTeams = addTeamApi(newTeamInfo["שם"], newTeamInfo["מידע"]);
    setTeams(updatedTeams);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faPlus}
        style={{ float: "right" }}
        onClick={() => {
          setAddTeamVisible(true);
        }}
      />
      <AddModal
        title={"הוספת צוות"}
        visible={addTeamVisible}
        onOk={addTeam}
        onCancel={(e: React.MouseEvent<HTMLElement>, newTeamInfo: any) => {
          setAddTeamVisible(false);
        }}
        newObj={{
          "שם": "",
          "מידע": ""
        }}
      />
      <List
        dataSource={teams}
        renderItem={team => <TeamCard team={team} deleteTeam={deleteTeam} />}
      />
    </div>
  );
};

export default TeamsList;
