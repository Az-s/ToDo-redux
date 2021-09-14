import axios from "axios";

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_FAILURE = 'FETCH_COUNTER_FAILURE';
export const FETCH_COUNTER_POST = 'FETCH_COUNTER_POST';

export const TODO_SUCCESS = 'TODO_SUCCESS';
export const POST_TODO = 'POST_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const KEEP_NEW_TEXT = 'KEEP_NEW_TEXT';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const add = value => ({ type: ADD, payload: value });
export const subtract = value => ({ type: SUBTRACT, payload: value });

export const fetchCounterRequest = () => ({ type: FETCH_COUNTER_REQUEST });
export const fetchCounterSuccess = counter => ({ type: FETCH_COUNTER_SUCCESS, payload: counter });
export const fetchCounterFailure = () => ({ type: FETCH_COUNTER_FAILURE });
export const fetchCounterPost = () => ({ type: FETCH_COUNTER_POST });

export const toDoListSuccess = toDoList => ({ type: TODO_SUCCESS, toDoList });
export const addNewTask = newText => ({ type: POST_TODO, newText });
export const deleteTask = (index) => ({ type: DELETE_TODO, index });
export const keepNewText = newText => ({ type: KEEP_NEW_TEXT, newText });


export const fetchCounter = () => {
    return async (dispatch, getState) => {
        dispatch(fetchCounterRequest());
        try {
            const response = await axios.get('https://az-sa-bd3f9-default-rtdb.firebaseio.com/counter.json');

            if (response.data === null) {
                dispatch(fetchCounterSuccess(0));
            } else {
                dispatch(fetchCounterSuccess(response.data));
            }
        } catch (e) {
            dispatch(fetchCounterFailure());
        }
    };
};

export const fetchPost = () => {
    return async (dispatch, getState) => {
        dispatch(fetchCounterRequest());
        const currentCounter = getState().counter;
        try {
            await axios.put('https://az-sa-bd3f9-default-rtdb.firebaseio.com/counter.json', {currentCounter} );
            dispatch(fetchCounterPost());
        } catch (e) {
            dispatch(fetchCounterFailure());
        }
    };
};

export const fetchList = () => {
    return async (dispatch) => {
        dispatch(fetchCounterRequest());
        try {
            const response = await axios.get('https://az-sa-bd3f9-default-rtdb.firebaseio.com/toDoList/tasks.json');
            dispatch(fetchCounterPost());

            if (response.data === null) {
                return;
            } else {
                dispatch(toDoListSuccess(Object.values(response.data)));
            }
        } catch (e) {
            dispatch(fetchCounterFailure());
        }
    }
};

export const postNewTask = () => {
    return async (dispatch, getState) => {
        dispatch(fetchCounterRequest());
        const task = getState().toDoList;
        try {
            const response = await axios.put('https://az-sa-bd3f9-default-rtdb.firebaseio.com/toDoList/tasks/.json', { ...task });
            dispatch(fetchCounterPost());
        } catch (e) {
            dispatch(fetchCounterFailure());
        }
    }
};

export const deleteToDoList = () => {
    return async (dispatch, getState) => {
        // await axios.delete(`https://az-sa-bd3f9-default-rtdb.firebaseio.com/toDoList/tasks/${id}.json`);
        dispatch(postNewTask());
    }
};

