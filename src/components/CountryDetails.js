import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function CountryDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState({})
  const [allCountries, setAllCountries] = useState([]) 


  useEffect(() => {
    axios({
      method: "GET",
      url: `https://ih-countries-api.herokuapp.com/countries`
    })
    .then(res => {
      setAllCountries(res.data)
    })
    .catch(err => console.log("ERROR", err))

    axios({
      method: "GET",
      url: `https://ih-countries-api.herokuapp.com/countries/${code}`
    })
    .then(res => {
      setCountry(res.data)
    })
    .catch(err => console.log("ERROR", err))
  }, [country, allCountries])

  return (
    <div>
      <h1>Country Info</h1>
      <h3>Name: {country?.name?.common}</h3>
      <p>Member of the UN? {country?.unMember?.toString()}</p>
      <p>Borders:
        {country?.borders?.map((bordering, i) => {
          return (
            <div key={i}>
              <Link to={`/${bordering}`}>{bordering}</Link>
            </div>
          )

          {/* let found = ''

          allCountries.find((countryToFind) => {
            if (countryToFind.alpha3Code === bordering){
              found = countryToFind.common.name
            }
          })
          
          return (
            <div key={i}>
              <Link to={`/${bordering}`}>
                {found}
              </Link>
              <br></br>
            </div> 
          ) */}
        })}
      </p>
      <Link to="/">Back to Countries</Link>
    </div>
  )
}

export default CountryDetails
