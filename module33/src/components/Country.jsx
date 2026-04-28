import './country/country.css'
const Country = ({ country }) => {
    return (
            
            <div className='Container'>
                <div className='country'>
                    <div>Name:{country.name.common}</div>
                    <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
                </div>
            </div>
    )
}

export default Country