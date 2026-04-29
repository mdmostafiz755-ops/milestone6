import React, { use, useState } from "react";
import Country from "./Country";
import './country/countries.css'
const Flags = ({ flags }) => {
  const countriesData = use(flags);
  //console.log(countriesData);
  const countries = countriesData.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedC = (c) => {
    const newVisited = [...visitedCountries, c];
    setVisitedCountries(newVisited)
  }
  const [visiteName, setvisitedName] = useState([]);
  const handleCname = (name) => {
    const newName = [...visiteName, name];
    setvisitedName(newName);
  }
  return (
    <>
      <h2>Countries:{countries.length}</h2>
      <h2>visited:{visitedCountries.length}</h2>
      <ul>
        {visiteName.map((name, i) => (
          <li key={i}>country: {name}</li>
        ))}
      </ul>
      <div className="Container">
        {
          countries.map(country =>
            <Country country={country}
              key={country.cca3.cca3} handleVisitedC={handleVisitedC} handleCname={handleCname}></Country>)
        }
      </div>

    </>

  )
}

export default Flags