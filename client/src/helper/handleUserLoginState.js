import axios from "axios";
// import useUserData from "../context/useUserData";

export const handleUserLoginState = (loginState, userId) => {
  // const { userDispatch } = useUserData();
  if (loginState === "Login") {
    return axios.get(`/users/${userId}`)
      .then(res => res.data)
      .then(data => {
        // if (data) {
        // userDispatch({ type: "login", payload: true });
        // userDispatch({ type: "user_info", payload: data });
        // }
        console.log("data in helper", data);
        return data;
      })
      .catch(err => console.error('Error fetching user', err));
  }
}