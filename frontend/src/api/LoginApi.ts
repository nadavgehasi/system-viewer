import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const refreshAuthLogic = (failedRequest: any) => {
  if (getAccessToken() != '') {
    axios.post('/api/refresh/').then(tokenRefreshResponse => {
      sessionStorage.setItem('access', tokenRefreshResponse.data.access);
      failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.access;
      return Promise.resolve();
    });
  } else {
    return Promise.reject();
  }
};

createAuthRefreshInterceptor(axios, refreshAuthLogic);

function getAccessToken() {
  return sessionStorage.getItem('access');
}

axios.interceptors.request.use(request => {
  request.headers['Authorization'] = `Bearer ${getAccessToken()}`;
  return request;
});

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

export default axios;