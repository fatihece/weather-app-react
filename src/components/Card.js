import React, {useEffect} from 'react'
import "./Card.css"

const Card = ({cityWeather}) => {

    useEffect(() => {
        
    }, [])

    return (
        <>
        <div className="card">
        <h3 style={{ textAlign: "center", fontSize: "2rem", borderBottom:"3px solid black" }}>{cityWeather.name}</h3>
            <div className="info">

                    <img
                    className="icon"
                    src={`http://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`}
                    />
            

                    <h1 style={{
                        fontSize: "1.5rem", textTransform: "capitalize", color: "black", fontWeight:"bold", marginTop:"-2rem"}}>
                            {cityWeather.weather[0].description}
                    </h1>
            </div>



            <div className="icon_info">
                    <p className="temp">
                        {Math.round(cityWeather.main.temp)}
                        <sup>
                            <span>&#176;</span>
                        </sup>
                    </p>
           

            <div className="temp_container">
                <p className="min_max">
                    <span  style={{fontSize:"12px"}}> </span>
                    {Math.round(cityWeather.main.temp_min)}
                    <sup>
                        <span>&#176;</span>
                    </sup>
                    / 
                </p>  

                <p className="min_max">
                <span style={{fontSize:"12px", marginLeft:"5px"}} ></span>
                    {Math.round(cityWeather.main.temp_max)}
                    <sup>
                        <span>&#176;</span>
                    </sup>   
                </p>

                </div>
            </div>    
            
            </div>
            </>
    )
}

export default Card
