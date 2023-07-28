import {createStore} from 'redux';
import aedReducer from './reducer';
const store=createStore(aedReducer)
export default store