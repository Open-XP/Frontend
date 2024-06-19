import axios from "./AxiosConfig";
import { returnErrors } from "./Messages";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_FAILED,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
} from "./Types";

const baseurl = "https://kaput-cannon-obedient-walk-production.pipeops.app";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get(`${baseurl}/api/auth/user/me/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN USER
export const login = (email, password) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  axios
    .post(`${baseurl}/api/auth/user/login/`, body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// REGISTER USER
export const registers =
  (first_name, last_name, username, email, password, confirm_password) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      first_name,
      last_name,
      username,
      email,
      password,
      confirm_password,
    });

    axios
      .post(`${baseurl}/api/auth/user/register/`, body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .get(`${baseurl}/api/auth/user/logout/`, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) => {
      if (err.response && err.response.status === 403) {
        dispatch({ type: LOGOUT_SUCCESS });
      } else {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: LOGOUT_FAILED });
      }
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

export const resetpassword = (email) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ email });

  axios
    .post(`${baseurl}/api/auth/user/reset-password/`, body, config)
    .then((res) => {
      dispatch({
        type: PASSWORD_RESET_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: PASSWORD_RESET_FAILED,
      });
    });
};

// CONFIRM PASSWORD RESET
export const confirmPassword =
  (uidb64, token, password, confirm_password) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    const body = JSON.stringify({ password, confirm_password });

    axios
      .post(
        `${baseurl}/auth/user/reset-password-confirm//${uidb64}/${token}/`,
        body,
        config
      )
      .then((res) => {
        dispatch({
          type: PASSWORD_RESET_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: PASSWORD_RESET_FAILED,
        });
      });
  };
