const Nav = () => {
  return(
    <nav className="text-white font-bold flex justify-between">
      <p>X</p>
      <ul className="flex justify-evenly">
        <li className="ml-2 mr-2"><button>Login</button></li>
        <li className="ml-2 mr-2"><button>Register</button></li>
      </ul>
    </nav>
  )
}

export default Nav;