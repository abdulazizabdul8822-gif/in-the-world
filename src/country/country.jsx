import React, { useState } from 'react';
import './country.css'
const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);
    // console.log(country.area.area);
    
    const handleVisited = () => {
    //    if(visited){
    //     setVisited(false)
    //    }
    //    else{
    //     setVisited(true)
    //    }
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountries(country);
    }

    return (
        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>capital: {country.capital.capital}</p>
            <p>area: {country.area.area} {country.area.area > 300000 ? "Big Country" : 'Small Country'}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;




// {
//     "name": {
//         "common": "Jamaica",
//         "official": "Jamaica"
//     },
//     "ccn3": {
//         "ccn3": "388"
//     },
//     "currencies": {
//         "currencies": {
//             "JMD": {
//                 "name": "Jamaican dollar",
//                 "symbol": "$"
//             }
//         }
//     },
//     "capital": {
//         "capital": [
//             "Kingston"
//         ]
//     },
//     "region": {
//         "region": "Americas"
//     },
//     "languages": {
//         "languages": {
//             "eng": "English",
//             "jam": "Jamaican Patois"
//         }
//     },
//     "area": {
//         "area": 10991
//     },
//     "cca3": {
//         "cca3": "JAM"
//     },
//     "population": {
//         "population": 2961161
//     },
//     "continents": {
//         "continents": [
//             "North America"
//         ]
//     },
//     "flags": {
//         "flags": {
//             "png": "https://flagcdn.com/w320/jm.png",
//             "svg": "https://flagcdn.com/jm.svg",
//             "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
//         }
//     }
// }