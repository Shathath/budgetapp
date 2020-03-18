

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };


const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
         console.log(action.text)
        return {
          ...state,
          text: action.text
        };
       case 'SORTBY_DATE':
          
           return { ...state ,sortBy:action.date}
       case 'SORTBY_STARTDATE':
           return {...state,startDate:action.startDate}
       
       case 'SORTBY_ENDDATE':
           return {...state,endDate:action.endDate}
       default:
        return state;
    }
  };

  export default filtersReducer;