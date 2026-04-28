import { useState } from 'react'
import './country/country.css'
const Country = ({ country, handleVisitedC }) => {

    const [visited,setVisited]=useState(false);
    const handleVisited=()=>{
        setVisited(visited? false: true);
        handleVisitedC(country);
    }
    return (
            
            <div className='Container'>
                <div className={visited?'country-visited':'country'}>
                    <div>Name:{country.name.common}</div>
                    <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
                    <button onClick={handleVisited}>{visited?'visited':'not visited'}</button>
                </div>
            </div>
    )
}

export default Country