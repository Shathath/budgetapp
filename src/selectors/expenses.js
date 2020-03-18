export const getvisbleexpense = (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
       const startMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
       const endMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
       const textMatch = typeof text !== "string" || expense.description.includes(text)
       console.log("start match,endMatch,textMatch",startMatch,endMatch,textMatch);
       return startMatch && endMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy === 'date'){
           return a.createdAt > b.createdAt ? 1 : -1

        }
    })
}