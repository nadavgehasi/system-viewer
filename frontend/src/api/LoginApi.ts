import {Team} from "../types/team";
import axios from "axios";

export const loginApi = (user: string, password: string): Promise<any> => {
  return axios.post("/api/token/", {
    username: user,
    password: password,
  }).then(function (response) {
    if (response.status == 200) {
      sessionStorage.setItem('refresh', response.data['refresh']);
      sessionStorage.setItem('access', response.data['access']);
    }
  })
};

export const refreshApi = (): Promise<any> => {
  return axios.post("/api/refresh/", {
    refresh: sessionStorage.getItem('refresh'),
  }).then(function (response) {
    if (response.status == 200) {
      sessionStorage.setItem('access', response.data['access']);
    }
  })
};