import { useContext } from "react";
import { UserContext } from "../../App";
import Login from "./Login";

const Nav = () => {
  const {userState, userDispatch} = useContext(UserContext);

  return(
    <nav className="text-white font-bold flex justify-between">
      <p>X</p>
      <ul className="flex justify-evenly">
        <li className="ml-2 mr-2">
          <Login userSignedIn={userState.userLoggedIn}/>
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