import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED, LOAD_CERTIFICATES } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        vessels: action.payload[0]
      };
    case LOAD_CERTIFICATES:
      return {
        ...state,
        vessel: action.payload[0],
        certificates: action.payload[1],
      }
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
