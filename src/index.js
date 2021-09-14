import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from './store/reducer';
import {Provider} from "react-redux";
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);


ReactDOM.render(app , document.getElementById('root'));
