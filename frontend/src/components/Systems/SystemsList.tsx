import React, { useEffect, useState } from "react";
import { deleteSystemApi, getTeamSystems } from "../../api/SystemApi";
import { List } from "antd";
import "../General/List/ListStyle.css";
import SystemCard from "./SystemCard";
import { RouteComponentProps } from "react-router-dom";
import { System } from "../../types/system";

interface SystemsListProps extends RouteComponentProps<{ teamId: string }> {}

const SystemsList: React.FC<SystemsListProps> = ({ match }) => {
  const updateSystems = (systems: Array<System>) => {
    setSystems(systems);
  };

  const [systems, setSystems] = useState(Array<System>());

  useEffect(() => {
    getTeamSystems(match.params.teamId).then((systems: Array<System>) => {
      setSystems(systems);
    });
  }, []);

  const deleteSystem = (systemId: string) => {
    deleteSystemApi(systemId).then((res) => {
      // TODO add message
      getTeamSystems(match.params.teamId).then((systems: Array<System>) =>
        setSystems(systems)
      );
    });
  };

  return (
    <List
      dataSource={systems}
      renderItem={(system) => (
        <SystemCard system={system} deleteSystem={deleteSystem} />
      )}
    />
  );
};

export default SystemsList;
