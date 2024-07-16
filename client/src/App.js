import './App.css';
import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import Nav from './components/Nav/Nav';
import useUserData from './context/useUserData';

export const UserContext = createContext();

function App() {

  const {
    userState,
    userDispatch
  } = useUserData();

  return (
    <div className="App">
      <UserContext.Provider value={{ userState, userDispatch }}>
        <header className='bg-pink-500 p-4'>
          <Nav />
        </header>
      </UserContext.Provider>
    </div>
  );
}

export default App;
