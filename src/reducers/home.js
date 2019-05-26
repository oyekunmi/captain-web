import { HOME_PAGE_UNLOADED, LOAD_CERTIFICATES, DELETE_CERTIFICATE } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_CERTIFICATES:
      return {
        ...state,
        vessel: action.payload[0],
        certificates: action.payload[1],
      }
    case DELETE_CERTIFICATE:
      return {
        ...state,
        certificates: state.certificates.filter(e=>e.id !== action.payload[0].id),
      }
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
