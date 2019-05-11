import { combineReducers } from 'redux';
import common from './reducers/common';
import auth from './reducers/auth';
import home from './reducers/home';
import vessels from './reducers/vessels';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  common,
  auth,
  home,
  vessels,
  router: connectRouter(history)
});
