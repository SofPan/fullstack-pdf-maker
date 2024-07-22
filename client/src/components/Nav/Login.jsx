

const Login = (props) => {
  const {
    userSignedIn
  } = props;
  return(
    <button>
      {userSignedIn ? "Login" : "Logout"}
    </button>
      
  )
}

export default Login;