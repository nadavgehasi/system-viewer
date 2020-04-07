import { System } from "../types/system";
import axios from "./LoginApi";

export const getTeamSystems = (teamId: string): Promise<Array<System>> => {
  return axios
    .get(`/api/systems/?team=${teamId}`)
    .then((res) =>
      res.data
        .map((system: System) => new System(system))
    );
};

export const deleteSystemApi = (systemId: string): Promise<any> => {
  return axios.delete(`/api/systems/${systemId}`);
};
