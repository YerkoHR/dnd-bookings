import * as types from "../types";
import axios from "axios";
//import { getErrors } from "./errorActions";

const username = "4fjf146";
const password = "6hcah19dgu9vu48m7nxqgrmb4wt9twl7xjhinhdm216l0";
const clientId = "69198";

export const getBookings = () => async dispatch => {
  dispatch({ type: types.LOADING_DATA, loading: true });

  const bookings = await axios.get(
    ` https://bambucalendar.cl/api/public/v1/clients/${clientId}/bookings`,
    {
      auth: {
        username,
        password
      }
    }
  );

  dispatch({ type: types.LOADING_DATA, loading: false });

  dispatch({
    type: types.GET_BOOKINGS,
    data: bookings.data
  });
};
