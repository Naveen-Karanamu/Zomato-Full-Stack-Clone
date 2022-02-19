import LocationHOC from "./HOC/Location.HOC";
import Temp from "./temp";

import { Route, Redirect } from "react-router-dom";

import Tab from "./Components/Tabs/Navigator";



function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/location/delivery"/>
      </Route>
      <LocationHOC path="/location" exact component={Temp} />
      <LocationHOC path="/location/:tabName" exact component={Tab} />
    </>
  );
}

export default App;
