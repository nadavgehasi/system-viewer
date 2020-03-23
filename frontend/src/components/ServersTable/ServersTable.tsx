import React from "react";
import { Table, Tag } from 'antd';
import "antd/lib/table/style/index.css"
import "antd/lib/tag/style/index.css"
import "antd/lib/pagination/style/index.css"
import serversTableColumns from "./ServerTableColumns";
import {Server} from "../../types/server";
import "./ServersTable.css"

interface ServersTableProps {
    servers: Array<Server>
}


const ServersTable: React.FC<ServersTableProps> = ({servers}) => {
    const data = servers.map(server => ({
        ...server,
        key: server.serverName,
    }));

    return (
        <Table dataSource={data} columns={serversTableColumns} bordered={false} style={{direction: 'rtl'}}/>
        );
};

export default ServersTable;
