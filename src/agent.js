import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

// const API_ROOT = 'https://conduit.productionready.io/api';
// const VESSEL_API_ROOT = 'http://captain.moovelogic.com/api';
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
const vesselTokenPlugin = req => {
  req.set('Authorization', `Bearer SHmkX`);
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
    superagent.del(`${VESSEL_API_ROOT}${url}`).use(vesselTokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${VESSEL_API_ROOT}${url}`).use(vesselTokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${VESSEL_API_ROOT}${url}`, body).use(vesselTokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${VESSEL_API_ROOT}${url}`, body).use(vesselTokenPlugin).then(responseBody)
};


const Auth = {
  current: () =>
    requests.get('/user'),
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
};

const Certificates = {
  byVessel: (id) => vesselRequests.get(`/vessels/${id}/certificates`)
}

export default {
  Auth,
  Vessels,
  Certificates,
  setToken: _token => { token = _token; }
};
