const expenseState = [];
 const expensereducer = (state = expenseState, action)=>{
  // console.log(action);
       switch(action.type){
          case 'AddExpense':
             return state.concat(action.expense)
          case 'EditExpense':
              return state.map((expense) =>{ 
                   if(action.id === expense.id){
                       return {...expense,...action.updates}
                   }
                   else {
                      return expense;
                   }
              })

          default:
             return state;
       }
}

export default expensereducer;