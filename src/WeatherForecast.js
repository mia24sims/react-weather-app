import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
     
  }

 

  let apiKey = `f2784deoc3ec5b8af02864390dt6ce37`;
let city = props.city ;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="02d" width="35" />
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temp-max">19&deg;</span>
            <span className="WeatherForecast-temp-min">10&deg;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
