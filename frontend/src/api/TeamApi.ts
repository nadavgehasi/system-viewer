import { Team } from "../types/team";
import { deleteTeamFromTeams } from "../utils/ArrayUtils";

let teams: Array<Team> = [
  new Team({
    id: "1",
    name: "אולטרה",
    numberOfServers: 12,
    numberOfSystems: 100,
    info: "Interesting info"
  }),
  new Team({
    id: "2",
    name: "וונום",
    numberOfServers: 1,
    numberOfSystems: 10,
    info: "Interesting info"
  })
];

let nextId = "3";

export const getTeams = (): Array<Team> => teams;

export const addTeamApi = (name: string, info: string): Array<Team> => {
  teams = [
    ...teams,
    new Team({
      id: nextId,
      name: name,
      numberOfSystems: 0,
      numberOfServers: 0,
      info: info
    })
  ];
  nextId = String(Number(nextId) + 1);
  return getTeams();
};

export const deleteTeamApi = (teamId: string): Array<Team> => {
  console.log(`team with id: ${teamId} deleted`);
  teams = deleteTeamFromTeams(teamId, teams);
  return getTeams();
};
