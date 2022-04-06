import { CALL_DATA_REQUEST, CALL_DATA_SUCCESS, CALL_DATA_FAILURE } from '../actions'
import produce from "immer";

const initState = {
    number: 0,
};

const data = (state = initState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case CALL_DATA_SUCCESS:
                draft.number = action.data["num"];
                break;
            default:
                break;
        }
    })
}

export default data;

