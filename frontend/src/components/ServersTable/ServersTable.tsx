import React from "react";
import { Table } from 'antd';
import "antd/lib/table/style/index.css"
import "antd/lib/tag/style/index.css"
import "antd/lib/pagination/style/index.css"
import getServersTableColumns from "./ServerTableColumns";
import {Server} from "../../types/server";
import "./ServersTable.css"

interface ServersTableProps {
    servers: Array<Server>;
    deleteServer: (serverId: string) => void;
}


const ServersTable: React.FC<ServersTableProps> = ({servers, deleteServer}) => {
    const data = servers.map(server => ({
        ...server,
        key: server.id,
    }));

    return (
        <Table dataSource={data} columns={getServersTableColumns(deleteServer)} bordered={false} style={{direction: 'rtl'}}/>
        );
};

export default ServersTable;
