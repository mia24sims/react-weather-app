import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span className="temperature">
            {" "}
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              width="60px"
            />{" "}
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
