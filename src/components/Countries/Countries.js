import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1 className='title'>Hello from Countries!!</h1>
            <h3 className='sub-title'>Available Countries: {countries.length}</h3>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    // name={country.name.common}
                    // capital={country.capital}
                    // region={country.region}
                    // area={country.area}
                    // population={country.population}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;