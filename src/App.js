
import './App.css';
import Countries from './components/Countries/Countries';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}



/* function LoadCountries() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Visiting Every Country of the World !!</h1>
      <h4>Available Countries : {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name.common} capital={country.capital} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Capital: {props.capital}</h3>
      <p>Population: {props.population}</p>
    </div>
  )
} */

export default App;
