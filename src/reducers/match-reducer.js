import { CALL_MATCH_REQUEST, CALL_MATCH_SUCCESS, CALL_MATCH_FAILURE } from '../actions'
import produce from "immer";

const initState = {
    match: Array
};

const data = (state = initState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case CALL_MATCH_SUCCESS:
                draft.match = action.data["schedules"];
                break;
            default:
                break;
        }
    })
}

export default data;
