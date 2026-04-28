import React,{use} from "react";
import Country from "./Country";
import './country/countries.css'
const Flags = ({flags}) => {
    const countriesData=use(flags);
    //console.log(countriesData);
    const countries=countriesData.countries;
    
  return (
  <>
  <div className="Container">
{
    countries.map(country=><Country country={country} key={country.cca3.cca3}></Country>)
  }
  </div>
  
  </>
    
  )
}

export default Flags