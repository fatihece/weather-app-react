import React, {useEffect, useState} from 'react'
import "./Card.css"

const Card = ({cityWeather}) => {

    useEffect(() => {
        
    }, [])

    return (
        <div className="card">
            
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

            <h3 style={{ textAlign: "center", fontSize: "2rem" }}>{cityWeather.name}</h3>


            <div className="icon_info">
                    <p className="temp">
                        {cityWeather.main.temp}
                        <sup>
                            <span>&#176;</span>
                        </sup>
                        C
                    </p>
           

            <div className="temp_container">
                <p className="min_max">
                    <span  style={{fontSize:"12px"}}> </span>
                    {cityWeather.main.temp_min}
                    <sup>
                        <span>&#176;</span>
                    </sup>
                    C / 
                </p>  

                <p className="min_max">
                <span style={{fontSize:"12px"}} ></span>
                    {cityWeather.main.temp_max}
                    <sup>
                        <span>&#176;</span>
                    </sup>
                    C
                </p>

                </div>
            </div>    
            
        </div>
    )
}

export default Card
