import { combineReducers } from 'redux';
import common from './reducers/common';
import auth from './reducers/auth';
import home from './reducers/home';
import vesselList from './reducers/vesselList';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  common,
  auth,
  home,
  vesselList,
  router: connectRouter(history)
});
