import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  HOME_PAGE_UNLOADED,
  LOGIN_PAGE_UNLOADED,
} from '../constants/actionTypes';

const defaultState = {
  appName: 'Captain',
  token: null,
  viewChangeCounter: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case LOGOUT:
      return { ...state, redirectTo: '/', token: null, currentUser: null };
    case LOGIN:
    case HOME_PAGE_UNLOADED:
    case LOGIN_PAGE_UNLOADED:
    default:
      return state;
  }
};
