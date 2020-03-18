import React from 'react';
import {BrowserRouter,Switch,NavLink,Route} from 'react-router-dom';


// components
import AddExpense from '../components/AddExpense';
import DashBoardExpense from '../components/DashBoardPage';
//styles
import '../styles/main.scss';
// redux
 
//import addExpense from '../components/AddExpense';


//const filterState = {}
// const addFilter = ({text='',sortBy='date',startDate=undefined,endDate=undefined} = {})=>{
//     return {
//         type:'AddFilter',
//         filter : {
//           text,
//    sortBy : 'date',
//    startDate : undefined,
//    endDate : undefined
//         }
//     }
// }

// Filters Reducer




// const store = createStore(combineReducers({expenses:expensereducer,filter: filtersReducer}))
// const expenseOne = store.dispatch(addexpenser({description : 'Fiest',amount: "5000" ,createdAt : 1000}))
// const expenseTwo = store.dispatch(addexpenser({description : 'Fiesta',amount: "5000", createdAt: 800}))

// store.subscribe(()=>{
//    const state = store.getState();
//    console.log("Filter",state.filter);
//    const expenses = getvisbleexpense(state.expenses,state.filter)
//    console.log(expenses)
// })

// store.dispatch(editexpenser(expenseOne.expense.id ,{ description : 'Fiesteaa'}))
// //console.log(store.getState());

// store.dispatch(setTextFilter('Fiest'));
// store.dispatch(sortByStartDate(200))
// store.dispatch(sortByEndDate(1000))
// store.dispatch(sortByDate('date'))

const router = ()=>(
    <BrowserRouter>
    <div>
       <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
       <NavLink to='/addexpense' activeClassName='is-active'>Add</NavLink>
    <Switch>
       <Route path='/' component={DashBoardExpense} exact={true}></Route>
       <Route path='/addexpense' component={AddExpense} exact={true}></Route>
       
      </Switch>
      
    </div>
       
    </BrowserRouter>
)

export default router;