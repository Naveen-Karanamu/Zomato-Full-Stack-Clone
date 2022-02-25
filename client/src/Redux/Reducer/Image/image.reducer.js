import { GET_IMAGE } from "./image.type";

const INITIAL_STATE = {
    images: [],
};

const imageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_IMAGE:
            return { ...state, images: action.payload };

        default:
            return { ...state }
    }
}

export default imageReducer;