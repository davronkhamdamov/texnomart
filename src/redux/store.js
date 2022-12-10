import { shopReduser } from './reduser';
import { createStore, combineReducers } from 'redux';

const rootReducers = combineReducers({
  data: shopReduser,
});

export const store = createStore(rootReducers);
