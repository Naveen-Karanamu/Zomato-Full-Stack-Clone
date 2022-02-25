import { combineReducers } from "redux";

import restaurantReducer from "./Restaurant/restaurant.reducer";

const rootReducer = combineReducers({restaurantReducer});

export default rootReducer;