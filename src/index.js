import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'; 
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots} from './reducers';
import 'tachyons';


//need to create the store for redux
//the store is the source of all truth, it is an object that stores all the initial state
const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
