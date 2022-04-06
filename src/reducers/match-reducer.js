import produce from "immer"
import { CALL_MATCH_REQUEST, CALL_MATCH_SUCCESS, CALL_MATCH_FAILURE } from '../actions'

const initState = {
    id: "",
    tournament: "",

    leftTeam: "",
    leftOdds: "",

    rightTeam: "",
    rightOdds: "",

    betlineDate: ""
};


const match = (state = initState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case CALL_MATCH_SUCCESS:
                draft.match = action.match;
                break;
            default:
                break;
        }
    })
}

export default match;
