import {combineReducers, createStore} from 'redux';
import {pageReducer} from "../reducers/pageReducer";



let reducers=combineReducers({pageItemName:pageReducer});

 let store=createStore(reducers);



 export default store;