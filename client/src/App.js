import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('/users')
  //     .then(res => res.data)
  //     .then(data => setData(data))
  //     .catch(err => console.error('Error fetching users', err));
  // }, []);

  return (
    <div className="App">
      <header className='bg-pink-500 p-4'>
        <Nav />
      </header>
    </div>
  );
}

export default App;
