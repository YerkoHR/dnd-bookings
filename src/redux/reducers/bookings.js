import * as types from "../types";

const initialState = {
  data: [],
  loading: false
};

const bookings = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOKINGS:
      return {
        ...state,
        data: action.data
      };
    case types.LOADING_DATA:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
};

export default bookings;
