import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {searchRobots } from './reducers';
import App from './containers/App';

const store = createStore(searchRobots);
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

