import React,{use} from "react";

const Flags = ({flags}) => {
    const countriesData=use(flags);
    //console.log(countriesData);
    const countries=countriesData.countries;
    
  return (
    <div>hi:{countries.length}</div>
  )
}

export default Flags