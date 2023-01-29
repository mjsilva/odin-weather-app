import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Location from "./components/Location";

function App() {

  return (
    <div id="App">
      <Location />
      <CurrentWeather />
    </div>
  );
}

export default App;
