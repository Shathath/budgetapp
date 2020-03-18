import {v4 as uuid} from 'uuid';

export const addexpenser = ({description='',amount = '',createdAt = 0} = {})=>{
    console.log('Im calling')
    var singleExpense = {
        type :'AddExpense',
        expense : {
            id: uuid(),
            description,
            amount,
            createdAt
        }
    }
    return singleExpense
}
export const editexpenser = (id,updates)=>{
var editExpense = {
     type: 'EditExpense',
     id,
     updates

}
return editExpense
}