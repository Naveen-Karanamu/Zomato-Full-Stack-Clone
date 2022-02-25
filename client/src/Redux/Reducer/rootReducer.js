import { combineReducers } from "redux";

import restaurantReducer from "./Restaurant/restaurant.reducer";
import imageReducer from "./Image/image.reducer";

const rootReducer = combineReducers({restaurantReducer, imageReducer});

export default rootReducer;