import {
  VESSEL_PAGE_LOADED,
  UPDATE_FIELD_VESSEL,
  ADD_VESSEL,
  ADD_VESSEL_PAGE_UNLOADED,
  ASYNC_START
} from './../constants/actionTypes';

export default ( state = {}, action ) => {
  switch (action.type){
    case VESSEL_PAGE_LOADED:
      return {
        ...state,
      }
    case UPDATE_FIELD_VESSEL:
      return { ...state, [action.key]: action.value };
    case ADD_VESSEL:
      return {
        inProgress: false,
        errors: action.error ? action.payload.errors : null,
      }
    case ASYNC_START:
      if (action.subtype === ADD_VESSEL) {
        return { ...state, inProgress: true };
      }
      return state;
    case ADD_VESSEL_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};