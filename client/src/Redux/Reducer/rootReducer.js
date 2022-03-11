import { combineReducers } from "redux";

import restaurantReducer from "./Restaurant/restaurant.reducer";
import imageReducer from "./Image/image.reducer";
import authReducer from "./Auth/auth.reducer";

const rootReducer = combineReducers({restaurantReducer, imageReducer, authReducer});

export default rootReducer;