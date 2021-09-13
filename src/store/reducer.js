import {
    ADD,
    DECREASE,
    FETCH_COUNTER_FAILURE,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS,
    FETCH_COUNTER_POST,
    INCREASE,
    SUBTRACT,
    TODO_SUCCESS,
    KEEP_NEW_TEXT,
    POST_TODO,
    DELETE_TODO,
} from "./actions";

const initialState = {
    counter: 100,
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
            return { ...state, loading: false };
        case KEEP_NEW_TEXT:
            newText = action.newText;
            return state;
        case POST_TODO:
            let copy = state.toDoList;
            if (copy.length !== 0) {
                copy = [...copy, newText];
            } else {
                copy = [newText];
            }
            return {
                ...state,
                toDoList: copy,
            };
        case TODO_SUCCESS:
            return {
                ...state,
                toDoList: action.toDoList,
                loading: false,
            };
        case DELETE_TODO:
            const id = action.index;
            copy = state.toDoList;
            copy.splice(id, 1);
            return {
                ...state,
                toDoList: copy,
                loading: true,
            };
        default:
            return state;
    }
}

export default reducer;