import React from "react";
import { Card } from "antd";
import "antd/lib/card/style/index.css";
import "../General/CardStyle.css";
import { System } from "../../types/system";
import PropertyList from "../General/PropertyList";
import CardTitle from "../General/CardTitle";

interface SystemProps {
  system: System;
  deleteSystem: (systemId: string) => void;
}

const SystemCard: React.FC<SystemProps> = ({ system, deleteSystem }) => {
  return (
    <Card
        title={
        <CardTitle
          id={system.id}
          title={<div style={{ display: "contents" }}>{system.name}</div>}
          deleteCard={deleteSystem}
        />
      }
    >
      <PropertyList
        content={{
          "שם השרת": system.systemServerName,
          "שם הצוות": system.systemTeam,
          "מידע חופש": system.info,
        }}
      />
    </Card>
  );
};

export default SystemCard;
