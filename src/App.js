import React from 'react';
import Router from './routers/AppRouters';
import configureStore from './store/configStore';
import {addexpenser,editexpenser} from './actions/expenses';
import {sortByDate,sortByStartDate,sortByEndDate,setTextFilter} from './actions/filters'

const store = configureStore();
store.subscribe(()=>{
   console.log(store.getState());
})
console.log(store.getState());
store.dispatch(addexpenser({description:'Hello my son',amount:20,createdAt:20}))
store.dispatch(editexpenser({amount:500}))
store.dispatch(setTextFilter('hello'));
function App() {
  return (
    <div className="App">
     <Router /> 
      
    </div>
  );
}

export default App;
