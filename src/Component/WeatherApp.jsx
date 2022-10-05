import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const WeatherApp = () => {
           const [city,setCity] = useState(null);
           const [search,setSearch] = useState("Vapi");
           useEffect( () => {
             const fetchApi = async() => {
                  const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`;
                  const response = await fetch(url);
                  const resJson = await response.json();
                  setCity(resJson.main);
                  
                  console.log(city);
                };
             fetchApi();
           },[search])
           return (
              <>
              
                <div className="box">  
                     <input type="search" className="name commCss"value={search} onChange={ (event) => { setSearch(event.target.value) } }/>
                    
                     {!city ? (<h1 className="commCss">No Data FOund</h1>) : ( <div className="formDetails">
                       <h1 className="locationName commCss"><LocationOnIcon />{search}</h1>
                     <h3 className="locationDetails commCss">Today Temprature {Math.round(city.temp-275.15)}°C </h3>
                     <h5 className="min_max commCss"> { Math.round(city.temp_min-275.15) }°C Min | {Math.round(city.temp_max-275.15)}°C Max</h5>
                     <div className="wave -one"></div>
                     <div className="wave -two"></div>
                     <div className="wave -three"></div>
                     </div>)}
                </div>
              </>
           );
}

export default WeatherApp;