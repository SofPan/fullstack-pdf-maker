import { useContext } from "react";
import { UserContext } from "../../App";

const Nav = () => {
  const {userState, userDispatch} = useContext(UserContext);
  console.log("userState", userState);
  return(
    <nav className="text-white font-bold flex justify-between">
      <p>X</p>
      <ul className="flex justify-evenly">
        <li className="ml-2 mr-2">
          <button>
            {userState.userLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
        <li className="ml-2 mr-2">
            {
              userState.userLoggedIn ? 
              <p>Welcome {userState.userInfo.email}</p>
              :
              <button>
                Register
              </button>
            }
          </li>
      </ul>
    </nav>
  )
}

export default Nav;