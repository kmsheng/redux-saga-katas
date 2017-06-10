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

const action = type => store.dispatch({type});

function render() {
  ReactDOM.render(
    <LoginForm onSubmit={(data) => console.log('data', data)} />,
    document.getElementById('root')
  )
}

render();
store.subscribe(render);
