import {createStore, combineReducers} from 'redux';
import expensereducer from '../reducers/expense'
import filtersReducer from '../reducers/filters';
export default ()=>{
    const store = createStore(combineReducers(
    {
        expenses:expensereducer,
        filter: filtersReducer
   })
   )
   return store;
}