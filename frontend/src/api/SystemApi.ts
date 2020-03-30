import { System } from "../types/system";
import axios from "axios";

let SYSTEMS = [
  new System({
    id: "1",
    name: "Greenmile",
    systemServerId: "123",
    systemServerName: "yamut",
    systemTeam: "ultra",
    info: "Interesting info"
  }),
  new System({
    id: "2",
    name: "Alice",
    systemServerId: "122",
    systemServerName: "eliza",
    systemTeam: "ultra",
    info: "Interesting info"
  }),
  new System({
    id: "3",
    name: "Armon",
    systemServerId: "124",
    systemServerName: "yarmon",
    systemTeam: "ultra",
    info: "Interesting info"
  })
];

export const getTeamSystems = (teamId: string, callback: (systems: Array<System>) => void) => {
  // axios.get(`/api/systems/${tea}`).then(res => {
  //   teamCallback(res.data);
  // });
  console.log(`Got request for systems of ${teamId} team`);
  return SYSTEMS;
};

export const deleteSystemApi = (systemId: string) => {
  console.log("System Deleted");
};
