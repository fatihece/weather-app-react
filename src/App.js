import {useState, useEffect} from "react"
import './App.css';
import Card from './components/Card';

function App() {

  const URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = "c5011ac3358f4b6b880ab44ed4fd650b"

  const [city, setCity] = useState("")
  const[cityWeather, setCityWeather] = useState(null)
  console.log(city);

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`${URL}?q=${city}&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCityWeather(data))
  }
  console.log(cityWeather);


  // useEffect(() => {
  //   fetch(`${URL}?q=${city}&appid=${API_KEY}`)
  //      .then((res) => res.json())
  //     //  .then((data) => console.log(data))
  // }, [city])

  return (
    <div className="App">
      <h1>Daily Forecast</h1>
      
      <div className="input_container">
        <form onSubmit={handleClick}>
        <input type="text" className="input_text"
          placeholder=" Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)} />
        <button className="btn">
          Search
        </button>
        </form>
      </div>
     
       {cityWeather && cityWeather.cod !== "404" ? <Card cityWeather={cityWeather}/> : <h4 style={{textTransform:"capitalize"}}>No city data</h4>}
      
      
    </div>
  );
}

export default App;
