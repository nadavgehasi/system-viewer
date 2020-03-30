import { Team } from "../types/team";
import axios from "axios";

let nextId = "3";

export const getTeams = (): Promise<Array<Team>> => {
  return axios.get('/api/teams').then(res => res.data.map((team: Team) => new Team(team)));
};

export const addTeamApi = (name: string, info: string): Array<Team> => {
  nextId = String(Number(nextId) + 1);
  return [];
};

export const deleteTeamApi = (teamId: string): Array<Team> => {
  console.log(`team with id: ${teamId} deleted`);
  return [];
};
