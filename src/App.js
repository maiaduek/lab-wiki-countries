import "./App.css";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails";

import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://ih-countries-api.herokuapp.com/countries"
    })
    .then(res => {
      setCountries(res.data)
    })
    .catch(err => console.log("ERROR", err))
  }, [])

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Routes>
            <Route path="/:code" element={<CountryDetails />} />
        </Routes>
        <CountriesList countries={countries}/>
      </div>
    </div>
  )
}
export default App;