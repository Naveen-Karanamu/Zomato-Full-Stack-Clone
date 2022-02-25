import axios from "axios"

// Redus types
import { GET_IMAGE } from "./image.type"

export const getImage = () => async (dispatch) => {
    try {
        const imageList = await axios({
            method: "GET",
            url: "http://localhost:3001/restaurant/?city=vizag"
        })

        return dispatch({ type: GET_IMAGE, payload: imageList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}