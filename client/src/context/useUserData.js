import axios from "axios";
import { useEffect, useReducer } from "react";

export const ACTIONS = {
  USER_LOGIN: "login",
  USER_INFO: "user_info"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.USER_LOGIN:
      return { ...state, userLoggedIn: action.payload }
    case ACTIONS.USER_INFO:
      return { ...state, userInfo: action.payload }
    default:
      throw new Error("Tried to use unsupported action type", action.type);
  }
}

export default function useUserData() {
  const initialState = {
    userLoggedIn: false,
    userInfo: {},
  }

  const [userState, userDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // temporary default user
    axios.get(`/users/${1}`)
      .then(res => res.data)
      .then(data => {
        if (data) {
          userDispatch({ type: "login", payload: true });
          userDispatch({ type: "user_info", payload: data });
        }
      })
      .catch(err => console.error('Error fetching user', err));

  }, []);

  return {
    userState,
    userDispatch
  }
}