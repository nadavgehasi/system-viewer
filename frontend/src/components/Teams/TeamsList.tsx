import React, {useEffect, useState} from "react";
import {addTeamApi, deleteTeamApi, getTeams} from "../../api/TeamApi";
import {loginApi} from "../../api/LoginApi";
import {List} from "antd";
import "../General/List/ListStyle.css";
import TeamCard from "./TeamCard";
import AddModal from "../General/Modal/AddModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {Team} from "../../types/team";
import LoginModal from "../Login/LoginModal";

const TeamsList = () => {
  const [teams, setTeams] = useState(Array<Team>());
  const [addTeamVisible, setAddTeamVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  useEffect(() => {
    getTeams().then((teams) => setTeams(teams));
  }, []);

  const updateTeams = (updatedTeams: Array<Team>): void => {
    setTeams(updatedTeams);
  };

  const deleteTeam = (teamId: string) => {
    deleteTeamApi(teamId).then((res) => {
      // TODO Add message here
      // console.log(res);
      getTeams().then((teams) => setTeams(teams));
    });
  };

  const addTeam = (e: React.MouseEvent<HTMLElement>, newTeamInfo: any) => {
    setAddTeamVisible(false);
    addTeamApi(newTeamInfo["שם"], newTeamInfo["מידע"]).then((res) => {
      // TODO Add message here
      console.log(res);
      getTeams().then((teams) => setTeams(teams));
    });
  };

  const login = (e: React.MouseEvent<HTMLElement>, newLoginInfo: any) => {
    setLoginVisible(false);
    loginApi(newLoginInfo["user"], newLoginInfo["password"]).then((res) => {
      // TODO Add message here
      console.log(res);
      getTeams().then((teams) => setTeams(teams));
    });
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faPlus}
        style={{float: "right"}}
        onClick={() => {
          setAddTeamVisible(true);
        }}
      />
      <br/>
      <FontAwesomeIcon
        icon={faSignInAlt}
        style={{float: "right"}}
        onClick={() => {
          setLoginVisible(true);
        }}
      />
      <br/>
      <FontAwesomeIcon
        icon={faSignOutAlt}
        style={{float: "right"}}
        onClick={() => {
          sessionStorage.setItem('refresh', '');
          sessionStorage.setItem('access', '');
          setTeams(Array<Team>());
        }}
      />
      <LoginModal
        title={"Login"}
        visible={loginVisible}
        onOk={login}
        onCancel={(e: React.MouseEvent<HTMLElement>, loginInfo: any) => {
          setLoginVisible(false);
        }}
        newObj={{
          user: "",
          password: "",
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
          שם: "",
          מידע: "",
        }}
      />
      <List
        dataSource={teams}
        renderItem={(team) => <TeamCard team={team} deleteTeam={deleteTeam}/>}
      />
    </div>
  );
};

export default TeamsList;
