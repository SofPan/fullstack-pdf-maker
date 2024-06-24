import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import UserDataService from './services/user.service';
import { useEffect, useState } from 'react';

function App() {
  const userService = new UserDataService();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const userData = await userService.get(1);
      console.log("getUserData's userData", userData);
      setUser(userData);
    };

    getUserData();
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
