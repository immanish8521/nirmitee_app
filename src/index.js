import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  username: '',
  loggedin: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_OFF":
      return {
        ...state,
        loggedin: false,
      }
      case "LOG_IN":
        console.log(action.username)
        return {
          ...state,
          loggedin: true,
          username: action.username,
      }
    default:
      return state;
  }
}
const store = createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
