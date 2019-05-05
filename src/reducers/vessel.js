import { VESSEL_PAGE_LOADED } from './../constants';

export default ( state = {}, action ) => {
  switch (action.type){
    case VESSEL_PAGE_LOADED:
      return {
        ...state,
        vessel: action.payload[0].vessel,
        certificates: action.payload[1].certificates
      }
    default:
      return state;
  } 
};