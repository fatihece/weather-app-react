import React, {useEffect, useState} from 'react'
import "./Card.css"

const Card = ({cityWeather}) => {

    useEffect(() => {
        
    }, [])

    return (
        <div className="card">
            <h4>{cityWeather.name}</h4>
            <p className="temp"> {cityWeather.main.temp }</p>
        </div>
    )
}

export default Card
