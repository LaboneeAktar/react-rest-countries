import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const { name, capital, area, region, population, flags } = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country Name: {name.common}</h2>
            <h3>Capital: {capital}</h3>
            <h3>Region: {region}</h3>
            <h5>Area: {area}</h5>
            <h5>Population: {population}</h5>
        </div>
    );
};

export default Country;