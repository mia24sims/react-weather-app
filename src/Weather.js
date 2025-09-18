import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>{" "}
        </div>
      </form>

      <h1>New Yrok</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions2023/2023.2/svg/cloudy_light.svg"
            alt="Mostly Cloudy"
            width="80px"
          />
          20&deg;C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li> Humidity: 72%</li>
            <li>Wind: 13 km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
