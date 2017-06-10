import {delay} from 'redux-saga';
import {put, takeEvery, all, call, cancel} from 'redux-saga/effects';

function* auth(data) {
  setTimeout(() => {
    yield put({type: 'LOGIN_SUCCESS', data});
  }, 5000);
}

export function* login(action) {
  const data = yield call(auth, action.data);
  yield put({type: 'LOGIN_SUCCESS', data: action.data});
}

export function* watchLogin() {
  yield takeEvery('LOGIN', login);
}

export default function* rootSaga() {
  yield all([
    watchLogin()
  ]);
}
