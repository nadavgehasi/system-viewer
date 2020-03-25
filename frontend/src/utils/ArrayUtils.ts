import {Server} from "../types/server";
import {System} from "../types/system";
import {Team} from "../types/team";

export const deleteServerFromServers = (serverId: string, serversList: Array<Server>) => {
    return serversList.filter(server => server.id !== serverId);
};

export const deleteSystemFromSystems = (systemId: string, systemsList: Array<System>) => {
    return systemsList.filter(system => system.id !== systemId);
};

export const deleteTeamFromTeams = (teamId: string, teamsList: Array<Team>) => {
    return teamsList.filter(team => team.id !== teamId);
};