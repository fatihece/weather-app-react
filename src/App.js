import {useState} from "react"
import './App.css';
import Card from './components/Card';

function App() {
  const [city, setCity] = useState("")
  console.log(city);
  return (
    <div className="App">
      <h1>Daily Forecast</h1>
      <div className="input_container">
        <input type="text" className="input_text" placeholder=" Search city..." value={city} onChange={(e)=> setCity(e.target.value)}/>
        <button className="btn">Search</button>
      </div>
      <Card />
    </div>
  );
}

export default App;
