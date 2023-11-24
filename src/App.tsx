import { useEffect, useState } from 'react';
import './App.css';




function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([])


  const touchh = () => {
      return fetch(url).then((response) => response.json()).then((data) => setData(data))
  }

  return (
    <div className="App">
      <h1>using JavaScript inbuilt FETCH API</h1>
      <center>
        <div>
          <button onClick={touchh} style={{ fontSize: 20, color: 'black' }}>Get Users Data</button>
          {(data as any[]).map((user: any) => (
           <h2 key={user.id}>{user.name}</h2>
          ))}
        </div>
      </center>
    </div>
  );
}

export default App;
