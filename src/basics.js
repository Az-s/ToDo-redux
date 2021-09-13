// import redux from 'redux';
const redux = require('redux');

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  // state = {counter: 1}, action = {type: 'ADD', payload: 5}
  console.log('ACTION: ', action);

  if (action.type === 'INCREASE') {
    return {...state, counter: state.counter + 1};
  }

  if (action.type === 'ADD') {
    return {...state, counter: state.counter + action.payload};
  }

  return state;
};

const store = redux.createStore(rootReducer);

store.subscribe(() => {
  console.log('[Subscription]: ', store.getState());
});

console.log('before:', store.getState()); // {counter: 0}

store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'ADD', payload: 5});

console.log('after:', store.getState()); // {counter: 6}