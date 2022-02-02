import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from './button.component';

const Country = props => {
  const { country, countryShow, setShow } = props;

  const [weatherIcon, setWeatherIcon] = useState('');
  const [temperature, setTemperature] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [windDirection, setWindDirection] = useState('');

  const api_key = process.env.REACT_APP_WEATHER_KEY;
  const weather_api = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`;

  useEffect(() => {
    axios.get(weather_api).then(response => {
      console.log(response.data);
      setWeatherIcon(response.data['weather'][0]['icon']);
      setTemperature(response.data['main']['temp']);
      setWindSpeed(response.data['wind']['speed']);
      setWindDirection(response.data['wind']['deg']);
    });
  }, [weather_api]);

  if (countryShow[country.name.common]) {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <div>
          <div>capital {country.capital}</div>
          <div>population {country.population}</div>
        </div>
        <div>
          <h3>languages</h3>
          {Object.values(country.languages).map(e => (
            <li key={e}>{e}</li>
          ))}
        </div>
        <br />
        <div>
          <img src={country.flags.svg} alt='Country Flag' width='8%' />
        </div>
        <div>
          <h3>Weather in {country.capital}</h3>
          <div>
            <div>
              <h4>temperature</h4>
              <div>{(temperature - 273.15).toFixed(2)} Celcius</div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                alt='Weather Icon'
                width='5%'
              />
            </div>
            <div>
              <h4>wind</h4>
              <div>Speed: {windSpeed} mph</div>
              <div>Direction: {windDirection} deg</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {country.name.common}
      <Button
        countryShow={countryShow}
        setShow={setShow}
        name={country.name.common}
      />
    </div>
  );
};

export default Country;
