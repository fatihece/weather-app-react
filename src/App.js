import {useState} from "react"
import './App.css';
import Card from './components/Card';

function App() {

  const URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = "c5011ac3358f4b6b880ab44ed4fd650b"

  const [city, setCity] = useState("")
  console.log(city);
  const handleClick = () => {
    fetch(`${URL}q=${city}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
  return (
    <div className="App">
      <h1>Daily Forecast</h1>
      <div className="input_container">
        <input type="text" className="input_text"
          placeholder=" Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)} />
        <button className="btn"
        onClick={handleClick}>Search</button>
      </div>
      <Card />
    </div>
  );
}

export default App;