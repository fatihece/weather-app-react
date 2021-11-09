import React, {useEffect, useState} from 'react'
import "./Card.css"

const Card = ({cityWeather}) => {

    useEffect(() => {
        
    }, [])

    return (
        <div className="card">
            <h3>{cityWeather.name}</h3>
            <img src={`http://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`}/>
            <p className="temp">
                {cityWeather.main.temp}
                <sup>
                    <span>&#176;</span>
                </sup>
                C
            </p>

            <div className="temp_container">
                <p className="temp">
                    <span  style={{fontSize:"12px"}}>Min Temp.</span>
                    {cityWeather.main.temp_min}
                    <sup>
                        <span>&#176;</span>
                    </sup>
                    C
                </p>

                <p className="temp">
                <span style={{fontSize:"12px"}} >Max Temp.</span>
                    {cityWeather.main.temp_max}
                    <sup>
                        <span>&#176;</span>
                    </sup>
                    C
                </p>
            </div>
            
        </div>
    )
}

export default Card
