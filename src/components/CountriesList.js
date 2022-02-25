import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList(props) {
  return (
    <div> 
      {
        props.countries.map((country, i) => {
          return (
            <div key={i}>
              <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
              <br></br>
            </div>
          )
        })
      }
      {/* <CountryDetails countries={props.countries}/> */}
    </div>
  )
}

export default CountriesList
