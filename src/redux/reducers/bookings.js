import * as types from "../types";

const initialState = {
  data: {},
  loading: false,
  error: null
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
    case types.ORDER_ASC:
      return {
        ...state,
        data: {
          ...state.data,
          [action.key]: state.data[action.key]
            .slice()
            .sort((a, b) =>
              a[action.time] > b[action.time]
                ? 1
                : b[action.time] > a[action.time]
                ? -1
                : 0
            )
        }
      };
    case types.ORDER_DES:
      return {
        ...state,
        data: {
          ...state.data,
          [action.key]: state.data[action.key]
            .slice()
            .sort((a, b) =>
              a[action.time] < b[action.time]
                ? 1
                : b[action.time] < a[action.time]
                ? -1
                : 0
            )
        }
      };
    case types.PATCH_BOOKING:
      return {
        ...state,
        data: action.newArray
      };
    case types.DELETE_BOOKING:
      return state;
    case types.GET_ERRORS:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default bookings;
