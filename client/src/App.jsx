import LocationHOC from "./HOC/Location.HOC";
import Temp from "./temp";

function App() {
  return (
    <div className="App">
      <LocationHOC path="/location" exact component={Temp} />
    </div>
  );
}

export default App;
