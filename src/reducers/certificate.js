import {
  ADD_CERTIFICATE_PAGE_LOADED,
  ADD_CERTIFICATE_PAGE_UNLOADED,
  UPDATE_FIELD_CERTIFICATE,
  ADD_CERTIFICATE,
  ASYNC_START,
} from './../constants/actionTypes';

const defaultState = {

};

export default (state = defaultState, action) => {
  switch(action.type){
    case ADD_CERTIFICATE_PAGE_LOADED:
      return {
        ...state,
        vessels: action.payload[0]
      };
    case UPDATE_FIELD_CERTIFICATE:
      return { ...state, [action.key]: action.value };
    case ADD_CERTIFICATE:
      return {
        inProgress: false,
        errors: action.error ? action.payload.errors : null,
      }
    case ASYNC_START:
      if (action.subtype === ADD_CERTIFICATE) {
        return { ...state, inProgress: true };
      }
      return state;
    case ADD_CERTIFICATE_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }

};