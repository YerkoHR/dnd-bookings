import * as types from "../types";
import axios from "axios";
import { filterData } from "../../helpers";

const username = "4fjf146";
const password = "6hcah19dgu9vu48m7nxqgrmb4wt9twl7xjhinhdm216l0";
const clientId = "69198";

export const getBookings = () => async dispatch => {
  try {
    dispatch({ type: types.LOADING_DATA, loading: true });

    const bookings = await axios.get(
      `https://bambucalendar.cl/api/public/v1/clients/${clientId}/bookings`,
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
      data: filterData(bookings.data)
    });
  } catch (err) {
    dispatch({ type: types.GET_ERRORS, err });
  }
};

export const patchBooking = (id, statusId, newArray) => async dispatch => {
  try {
    dispatch({ type: types.PATCH_BOOKING, newArray });
    const patchedBooking = await axios({
      method: "patch",
      url: `https://bambucalendar.cl/api/public/v1/bookings/${id}`,
      crossdomain: true,
      data: {
        status_id: statusId
      },
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic NGZqZjE0Njo2aGNhaDE5ZGd1OXZ1NDhtN254cWdybWI0d3Q5dHdsN3hqaGluaGRtMjE2bDA="
      }
    });
  } catch (err) {
    dispatch({ type: types.GET_ERRORS, err });
  }
};

export const deleteBooking = id => dispatch => {
  axios
    .delete(`https://bambucalendar.cl/api/public/v1/bookings/${id}`, {
      auth: {
        username,
        password
      }
    })
    .then(res => {
      dispatch({ type: types.DELETE_BOOKING });
    })
    .catch(err => {
      dispatch({ type: types.GET_ERRORS, err });
    });
};

export const orderAsc = (key, time) => ({
  type: types.ORDER_ASC,
  time,
  key
});

export const orderDes = (key, time) => ({
  type: types.ORDER_DES,
  time,
  key
});
