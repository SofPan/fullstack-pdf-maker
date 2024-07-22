import { useEffect, useState } from "react";
import { handleUserLoginState } from "../../helper/handleUserLoginState";


const Login = (props) => {
  const {
    userSignedIn,
    updateUser
  } = props;

  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const loginResults = async () => {
    const userData = await handleUserLoginState("Login", 1);
    setUser(userData);
  };

  const handleClick = (e) => {
    if (e.target.innerText === "Login"){
      loginResults();
    };
  }
  return(
    <button onClick={handleClick}>
      {userSignedIn ? "Logout" : "Login"}
    </button>
      
  )
}

export default Login;