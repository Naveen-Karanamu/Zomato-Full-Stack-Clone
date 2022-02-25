import axios from "axios"

// Redus types
import { GET_IMAGE } from "./image.type"

export const getImage = (_id) => async (dispatch) => {
    try {
        const imageList = await axios({
            method: "GET",
            url: `http://localhost:3001/image/${_id}`
        })

        return dispatch({ type: GET_IMAGE, payload: imageList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}