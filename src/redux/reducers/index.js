import {combineReducers} from 'redux';
import {commonReducer as common} from './commonReducer';

const reducer = combineReducers({
  common,
});

export default reducer;
