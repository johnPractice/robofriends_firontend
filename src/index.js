import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from "redux";
import {createLogger} from "redux-logger";
import {searchRobots,requestRobotsReducer} from './reducers';
import thunk from "redux-thunk";
import App from './containers/App';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots: requestRobotsReducer});
const store = createStore(rootReducer,applyMiddleware(thunk,logger));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

