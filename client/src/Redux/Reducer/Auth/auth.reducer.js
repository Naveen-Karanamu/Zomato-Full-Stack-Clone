import SignIn from "../../../Components/Auth/SignIn";
import { SIGN_IN,SIGN_UP } from "./auth.type";

const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state,  };
        case SIGN_UP:
            return { ...state,  };

        default:
            return { ...state }
    }
}

export default authReducer;