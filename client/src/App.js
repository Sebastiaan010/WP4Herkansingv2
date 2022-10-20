import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
          <Carousel>
          {users.map((user) => {
        return(
          <div>
        <div className='' key={crypto.randomUUID()} style={{marginBottom: "40px", backgroundColor: "gray"}}>
            <div>Vraag: {user.question}</div>
            <div>Antwoord: {user.correctanswer}</div>  
            {/*<button onClick={NextQuestion}></button>*/}
          </div>

          </div>
   
        ) 
      })}
            </Carousel>
    </div>
  );
}

export default App;
