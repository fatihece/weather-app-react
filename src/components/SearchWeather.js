import React from 'react'

const SearchWeather = ({city, setCity, handleClick}) => {
    return (
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
    )
}

export default SearchWeather
