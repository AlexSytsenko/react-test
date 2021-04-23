import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import counterReducer from './counter/counter-reducer';

// const initialState = {
//   counter: {
//     value: 10,
//     step:15,
//   }
// }

// const counterInitialState = {
//   value: 10,
//   step: 15,
// };

const rootReducer = combineReducers({
  counter: counterReducer,
  // filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
