import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} alt={props.data.description} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          {" "}
          <WeatherIcon code={props.data.icon} />
          <span className="temperature">
            {" "}
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">&deg;C</span>
        </div>
        <div className="col-6">
          <ul>
            <li> Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
