import { Server } from "../types/server";
import axios from "./LoginApi";

export const getServers = (): Promise<Array<Server>> => {
  return axios.get(`/api/servers`).then((res) => res.data);
};

export const deleteServerApi = (serverId: string) => {
  console.log("Server Deleted");
};
