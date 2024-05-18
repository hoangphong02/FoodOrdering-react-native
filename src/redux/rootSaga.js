import { all } from 'redux-saga/effects';
import product from './product/saga';
export default function* rootSaga() {
  yield all([ product()]);
}
