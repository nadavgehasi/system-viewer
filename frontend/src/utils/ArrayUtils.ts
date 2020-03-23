import {Server} from "../types/server";

export const filterObjFromArray = (serverId: string, serverList: Array<Server>) => {
    return serverList.filter(server => server.id !== serverId);
};