import {all} from 'redux-saga/effects';
import watchCommon from './commonSaga';

export default function* rootSaga() {
  yield all([watchCommon()]);
}
