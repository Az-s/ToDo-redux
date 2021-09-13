import {
    ADD,
    DECREASE,
    FETCH_COUNTER_FAILURE,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS,
    FETCH_COUNTER_POST,
    INCREASE,
    SUBTRACT
} from "./actions";

const initialState = {
    counter: 123,
    loading: false,
    error: null,
    toDoList: [],
};

let newText = '';

const add = (state, action) => {
    return { ...state, counter: state.counter + action.payload };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return { ...state, counter: state.counter + 1 };
        case DECREASE:
            return { ...state, counter: state.counter - 1 };
        case ADD:
            return add(state, action);
        case SUBTRACT:
            return { ...state, counter: state.counter - action.payload };
        case FETCH_COUNTER_REQUEST:
            return { ...state, error: null, loading: true };
        case FETCH_COUNTER_SUCCESS:
            return { ...state, loading: false, counter: action.payload };
        case FETCH_COUNTER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case FETCH_COUNTER_POST:
            return {...state, loading: false };
        default:
            return state;
    }
}

export default reducer;