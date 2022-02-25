import LocationHOC from "./HOC/Location.HOC";

import { Route, Redirect } from "react-router-dom";

import Tab from "./Components/Tabs/Navigator";
import RestaurantHOC from "./HOC/Restaurant.HOC";

import RestaurantPage from "./Components/Pages/Secondary/Restaurant/Overview"
import RestaurantOverview from "./Components/Pages/Secondary/Restaurant/Overview/Overview.Restaurant";
import OrderOnline from "./Components/Pages/Secondary/Restaurant/Order Online/OrderOnline.page";
import Temp from "./Components/Pages/Secondary/Restaurant/temp";
import ReviewsPage from "./Components/Pages/Secondary/Restaurant/Reviews/Reviews.restaurant";
import MenuPage from "./Components/Pages/Secondary/Restaurant/Menu/MenuPage";
import PhotosPage from "./Components/Pages/Secondary/Restaurant/Photos/Photos.page";
import CheckoutHOC from "./HOC/Checkout.HOC";
import CheckoutPage from "./Components/Pages/Secondary/Restaurant/Checkout/CheckoutPage";
import RestaurantRedirect from "./Components/Pages/Secondary/Restaurant/Redirect";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/location/delivery"/>
      </Route>
      <Route path="/restaurant/:id" exact component={RestaurantRedirect} />
      
      <LocationHOC path="/location/:tabName" exact component={Tab} />
      <RestaurantHOC path="/restaurant/:id/overview" exact component={Temp}/>
      <RestaurantHOC path="/restaurant/:id/order-online" exact component={OrderOnline}/>
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={ReviewsPage}/>
      <RestaurantHOC path="/restaurant/:id/photos" exact component={PhotosPage}/>
      <RestaurantHOC path="/restaurant/:id/menu" exact component={MenuPage}/>
      <CheckoutHOC path="/checkout" exact component={CheckoutPage} />
    </>
  );
}

export default App;
