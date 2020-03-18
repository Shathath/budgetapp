export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });
  export const sortByDate = (date)=>({
      type:'SORTBY_DATE',
      date
  });
  export const sortByStartDate = (startDate)=>({
    type:'SORTBY_STARTDATE',
    startDate
 });
 export const sortByEndDate = (endDate)=>({
    type:'SORTBY_ENDDATE',
    endDate
 });