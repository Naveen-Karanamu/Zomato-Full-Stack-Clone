import axios from "axios"
import UserDropDown from "../../../Components/Auth/DropDown";

// Redus types
import { SIGN_IN, SIGN_UP, GOOGLE_AUTH } from "./auth.type"

export const signIn = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `http://localhost:3001/auth/signin`,
            data:{credentials : userData},
        })

        localStorage.setItem("zomatoUser", JSON.stringify({token:User.data.token}));

        return dispatch({ type: SIGN_IN, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const signUp = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `http://localhost:3001/auth/signup`,
            data:{credentials : userData},
        })

        localStorage.setItem("zomatoUser", JSON.stringify({token:User.data.token}));

        return dispatch({ type: SIGN_UP, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}

// export const googleAuth = (userData) => async (dispatch) => {
//     try {
//         const User = await axios({
//             method: "POST",
//             url: `http://localhost:3001/auth/signup`,
//             data:{credentials : userData},
//         })

//         localStorage.setItem("zomatoUser", JSON.stringify({token:User.data.token}));

//         return dispatch({ type: SIGN_UP, payload: User.data });
//     } catch (error) {
//         return dispatch({ type: "ERROR", payload: error });
//     }
// }