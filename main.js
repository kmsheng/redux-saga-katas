import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux'

import LoginForm from './LoginForm'
import reducer from './reducers'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

function render() {
  ReactDOM.render(
    <div>
      {JSON.stringify(store.getState())}
      <LoginForm onSubmit={(data) => store.dispatch({type: 'LOGIN', data})} />
    </div>,
    document.getElementById('root')
  )
}

render();
store.subscribe(render);
