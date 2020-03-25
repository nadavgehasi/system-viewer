import {System} from "../types/system"

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
    }),
];

export const getTeamSystems = (teamId: string) => {
    console.log(`Got request for systems of ${teamId} team`);
    return SYSTEMS;
};


export const deleteSystemApi = (systemId: string) => {
    console.log("System Deleted");
};