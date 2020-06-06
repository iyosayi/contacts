import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  USER_LOADED,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  AUTH_ERROR,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User

  //Register User

  //Login User

  //logout User

  //Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
