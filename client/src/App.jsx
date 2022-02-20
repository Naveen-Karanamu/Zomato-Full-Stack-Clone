import LocationHOC from "./HOC/Location.HOC";

import { Route, Redirect } from "react-router-dom";

import Tab from "./Components/Tabs/Navigator";
import RestaurantHOC from "./HOC/Restaurant.HOC";

import RestaurantPage from "./Components/Pages/Secondary/Restaurant"
import RestaurantOverview from "./Components/Pages/Secondary/Restaurant/Overview.Restaurant";


function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/location/delivery"/>
      </Route>
      <Route path="/restaurant/:id" exact>
        <Redirect to="/restaurant/:id/overview" />
      </Route>
      
      <LocationHOC path="/location/:tabName" exact component={Tab} />
      <RestaurantHOC path="/restaurant/:id" exact component={RestaurantPage}/>
      <RestaurantHOC path="/restaurant/:id/overview" exact component={RestaurantOverview}/>
      <RestaurantHOC path="/restaurant/:id/order-online" exact component={RestaurantPage}/>
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={RestaurantPage}/>
      <RestaurantHOC path="/restaurant/:id/photos" exact component={RestaurantPage}/>
      <RestaurantHOC path="/restaurant/:id/menu" exact component={RestaurantPage}/>
    </>
  );
}

export default App;
