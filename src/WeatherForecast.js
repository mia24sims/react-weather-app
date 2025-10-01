import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast() {
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
