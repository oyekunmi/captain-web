import { combineReducers } from 'redux';
import common from './reducers/common';
import auth from './reducers/auth';
import home from './reducers/home';
import vessels from './reducers/vessels';
import certificate from './reducers/certificate';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  common,
  auth,
  home,
  vessels,
  certificate,
  router: connectRouter(history)
});
