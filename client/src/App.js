import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
function App() {
  const [users, setUsers ] = useState([]);
  useEffect(() => {

    fetch('http://localhost:3000/api/users')
    .then((response) => response.json())
    .then((data) => setUsers(data))     

  }, []);
  return (
    <div className="App">
      {users.map((user) => {
        return(
          <div key={crypto.randomUUID()} style={{marginBottom: "10px", backgroundColor: "gray"}}>
            <div>Vraag: {user.question}</div>
            <div>Antwoord: {user.correctanswer}</div>  
          </div>
        ) 
      })}
    </div>
  );
}

export default App;
