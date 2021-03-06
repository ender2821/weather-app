import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
