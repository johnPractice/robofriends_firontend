import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import {searchRobots } from './reducers';
import App from './containers/App';

const logger = createLogger();
const store = createStore(searchRobots,applyMiddleware(logger));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

