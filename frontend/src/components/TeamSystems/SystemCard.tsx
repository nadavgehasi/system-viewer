import React from "react";
import {Card} from "antd";
import "antd/lib/card/style/index.css"
import "./SystemCard.css"
import {System} from "../../types/system";

interface SystemProps {
    system: System;
}

const SystemCard:React.FC<SystemProps> = ({system}) =>  {
    return (
        <Card title={system.name}>
            <h3>שרת: {system.systemServerName}</h3>
            <h3>צוות: {system.systemTeam}</h3>
        </Card>
    );
};

export default SystemCard;