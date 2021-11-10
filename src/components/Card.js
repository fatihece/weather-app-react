import React, {useEffect, useState} from 'react'
import "./Card.css"

const Card = ({cityWeather}) => {

    useEffect(() => {
        
    }, [])

    return (
        <div className="card">
            <h3 style={{textAlign:"center", fontSize:"2rem"}}>{cityWeather.name}</h3>
            <div className="info">
                <img
                className="icon"
                src={`http://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`}
                />
          
            <div className="icon_info">
                    <p className="temp">
                        {cityWeather.main.temp}
                        <sup>
                            <span>&#176;</span>
                        </sup>
                        C
                    </p>
                    <h4 style={{ fontSize: "20px", textTransform: "capitalize", color:"#333", padding:"-10px"}}>
                        {cityWeather.weather[0].description}
                    </h4>
            </div>
        </div>

            <div className="temp_container">
                <p className="temp">
                    <span  style={{fontSize:"12px"}}>Min Temp. </span>
                    {cityWeather.main.temp_min}
                    <sup>
                        <span>&#176;</span>
                    </sup>
                    C
                </p>

                <p className="temp">
                <span style={{fontSize:"12px"}} >Max Temp. </span>
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
