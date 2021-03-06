import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

// const API_ROOT = 'https://captain.moovelogic.com/api';
// const VESSEL_API_ROOT = 'https://captain.moovelogic.com/api';
const VESSEL_API_ROOT = 'http://localhost:8081/api';
const API_ROOT = 'http://localhost:8081/api';

// const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('Authorization', `Bearer ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const vesselRequests = {
  del: url =>
    superagent.del(`${VESSEL_API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${VESSEL_API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${VESSEL_API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${VESSEL_API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};


const Auth = {
  current: () =>
    requests.get('/v1/user'),
  login: (password) =>
    requests.post('/v1/auth', { token: password }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const Vessels = {
  all: () =>  vesselRequests.get('/vessels'),
  get: (id) => vesselRequests.get(`/vessels/${id}`),
  save: vessel => requests.post(`/vessels`, vessel)
};

const Certificates = {
  byVessel: (id) => vesselRequests.get(`/vessels/${id}/certificates`),
  save: cert => requests.post(`/vessels/${cert.vessel_id}/certificates`, cert),
  delete: cert => requests.del(`/vessels/${cert.vessel_id}/certificates/${cert.id}`),
}

export default {
  Auth,
  Vessels,
  Certificates,
  setToken: _token => { token = _token; }
};
