import {System} from "../types/system"
export const getSystems = (teamId: string) => {
    console.log(`Got request for systems of ${teamId} team`);
    return [
        new System({
            id: "1",
            name: "greenmile",
            systemServerId: "123",
            systemServerName: "yamut",
            systemTeam: "ultea"
        }),
        new System({
            id: "2",
            name: "alice",
            systemServerId: "122",
            systemServerName: "eliza",
            systemTeam: "ultea"
        }),
        new System({
            id: "3",
            name: "armon",
            systemServerId: "124",
            systemServerName: "yarmon",
            systemTeam: "ultea"
        }),
    ];
};


export const deleteSystemApi = (systemId: string) => {
    console.log("System Deleted");
};