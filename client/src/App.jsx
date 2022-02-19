import LocationHOC from "./HOC/Location.HOC";
import Temp from "./temp";

import { Route, Redirect } from "react-router-dom";

import Tab from "./Components/Tabs/Navigator";
import RestaurantHOC from "./HOC/Restaurant.HOC";

import RestaurantPage from "./Components/Pages/Secondary/Restaurant"

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/location/delivery"/>
      </Route>
      <LocationHOC path="/location" exact component={Temp} />
      <LocationHOC path="/location/:tabName" exact component={Tab} />
      <RestaurantHOC path="/restaurant/:id" exact component={RestaurantPage}/>
    </>
  );
}

export default App;
