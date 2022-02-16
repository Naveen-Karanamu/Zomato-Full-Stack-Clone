import LocationHOC from "./HOC/Location.HOC";
import Temp from "./temp";

import Tab from "./Components/Tabs/Master";



function App() {
  return (
    <div className="App">
      <LocationHOC path="/location" exact component={Temp} />
      <LocationHOC path="/location/:tabName" exact component={Tab} />
    </div>
  );
}

export default App;
