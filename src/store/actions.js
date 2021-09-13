import axios from "axios";

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_FAILURE = 'FETCH_COUNTER_FAILURE';
export const FETCH_COUNTER_POST = 'FETCH_COUNTER_POST';

export const TODO_SUCCESS = 'TO_DO_LIST_SUCCESS';
export const POST_TODO = 'POST_TODOLIST';
export const DELETE_TODO = 'DELETE_TODOLIST';
export const KEEP_NEW_TEXT = 'KEEP_NEW_TEXT';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const add = value => ({ type: ADD, payload: value });
export const subtract = value => ({ type: SUBTRACT, payload: value });

export const fetchCounterRequest = () => ({ type: FETCH_COUNTER_REQUEST });
export const fetchCounterSuccess = counter => ({ type: FETCH_COUNTER_SUCCESS, payload: counter });
export const fetchCounterFailure = () => ({ type: FETCH_COUNTER_FAILURE });
export const fetchCounterPost = () => ({ type: FETCH_COUNTER_POST });


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
            const response = await axios.put('https://az-sa-bd3f9-default-rtdb.firebaseio.com/counter.json' , {currentCounter});
            dispatch(fetchCounterPost());
        } catch (e) {
            dispatch(fetchCounterFailure());
        }
    };
};

// export const saveCounter = () => {
//   return async (dispatch, getState) => {
//     const currentCounter = getState().counter;
//     await axios.post('/counter.json', currentCounter);
//   };
// }
/*
case FETCH_COUNTER_SUCCESS:
  return {...state, loading: false, counter: action.payload}

 */