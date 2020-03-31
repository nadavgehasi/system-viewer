import { System } from "../types/system";
import axios from "axios";

export const getTeamSystems = (teamId: string): Promise<Array<System>> => {
  return axios
    .get(`/api/systems/`)
    .then((res) =>
      res.data
        .map((system: System) => new System(system))
        .filter((system: System) => system.team == teamId)
    );
};

export const deleteSystemApi = (systemId: string): Promise<any> => {
  return axios.delete(`/api/systems/${systemId}`);
};
