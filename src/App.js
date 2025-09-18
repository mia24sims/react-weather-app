import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/mia24sims?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Tamia Sims{" "}
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/mia24sims/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}
