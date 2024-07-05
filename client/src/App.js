import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(res => res.data)
      .then(data => setData(data))
      .catch(err => console.error('Error fetching users', err));
  }, [])

  return (
    <div className="App">
      <div>
        <p className='text-red-400'>User Info</p>
        {data.map(user => <p key={user.id}>{user.email}</p>)}
      </div>
    </div>
  );
}

export default App;
