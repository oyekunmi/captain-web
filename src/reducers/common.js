import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  ADD_CERTIFICATE,
  HOME_PAGE_LOADED
} from '../constants/actionTypes';

const defaultState = {
  appName: 'Captain',
  token: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null,
        redirectTo: action.token ? null: '/login'
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case LOGIN:
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      }
    case HOME_PAGE_LOADED:
      return {
        ...state,
        vessels: action.payload[0]
      };
    case ADD_CERTIFICATE:
      return {
        ...state,
        redirectTo: action.error ? null : '/'
      }
    
    case LOGOUT:
      return { ...state, redirectTo: '/', token: null, currentUser: null };
    default:
      return state;
  }
};
