import { useState } from 'react'
import './country/country.css'
const Country = ({ country, handleVisitedC,handleCname }) => {

    const [visited,setVisited]=useState(false);
    const handleVisited=()=>{
        setVisited(visited? false: true);
        handleVisitedC(country);
    }
    const[added,setAdded]=useState(false);
    const handleaddCountry=()=>{
        setAdded(added?false:true);
        handleCname(country.name.common);
    }
    return (
            
            <div className='Container'>
                <div className={visited?'country-visited':'country'}>
                    <div>Name:{country.name.common}</div>
                    <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
                    <button onClick={handleVisited}>{visited?'visited':'not visited'}</button>
                    <button onClick={handleaddCountry}>{added?'Add country flag':'Not added'}</button>
                </div>
            </div>
    )
}

export default Country