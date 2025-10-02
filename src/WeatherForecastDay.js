import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
function maxTemperature() {
  let temperature = Math.round(props.data.temperature.maximum);
  return `${temperature}` ;
}


function minTemperature() {
  let temperature = Math.round(props.data.temperature.minimum);
  return `${temperature}`;
}

function day(){
  let date = new Date(props.data.time *1000);
  let day = date.getDay();

let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] ;

  return days[day];
}

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.icon_url} width="35" />
      <div className="WeatherForecast-temps">
        <span className="WeatherForecast-temp-max">
          {maxTemperature()}&deg;
        </span>
        <span className="WeatherForecast-temp-min">
          {minTemperature()}&deg;
        </span>
      </div>
    </div>
  );
}
