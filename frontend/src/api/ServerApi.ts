import { Server } from "../types/server";
import axios from "axios";

export const getServers = () => {
  return [
    new Server({
      id: "1",
      serverName: "yamut",
      serverBase: "ירקון",
      teamName: "אולטרה",
      systemName: "greenmile",
      status: "Down",
      tags: ["Operational"],
      ram: "24GB",
      cores: "24"
    }),
    new Server({
      id: "2",
      serverName: "yarmon",
      serverBase: "מפקדה",
      teamName: "אולטרה",
      systemName: "armon",
      status: "Good",
      tags: ["Operational"],
      ram: "128GB",
      cores: "64"
    }),
    new Server({
      id: "3",
      serverName: "eliza",
      serverBase: "מפקדה",
      teamName: "אולטרה",
      systemName: "alice",
      status: "Up",
      tags: ["Tests"],
      ram: "16GB",
      cores: "24"
    })
   ];
};

export const deleteServerApi = (serverId: string) => {
  console.log("Server Deleted");
};
