import React from "react";
import { Card } from "antd";
import "antd/lib/card/style/index.css";
import "../General/Card/CardStyle.css";
import { System } from "../../types/system";
import PropertyList from "../General/List/PropertyList";
import CardTitle from "../General/Card/CardTitle";

interface SystemProps {
  system: System;
  deleteSystem: (systemId: string) => void;
  updateSystem: (system: System) => void;
}

const SystemCard: React.FC<SystemProps> = ({
  system,
  deleteSystem,
  updateSystem,
}) => {
  return (
    <Card
      title={
        <CardTitle
          title={<div style={{ display: "contents" }}>{system.name}</div>}
          deleteCard={() => deleteSystem(system.id)}
          updateCard={() => updateSystem(system)}
        />
      }
    >
      <PropertyList
        content={{
          "שם השרת": system.servers,
          "שם הצוות": system.team,
          צלע: system.universe,
          "מידע חופש": system.info,
        }}
      />
    </Card>
  );
};

export default SystemCard;
