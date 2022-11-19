import React,{ useState } from "react";

const ExpenseForm= (props)=>{

    const [enteredtitle,setenteredtitle]=useState('');
    const [enteredamount,setenteredamount]=useState('');
    const [entereddate,setentereddate]=useState('');

    const titlechanger=(e)=>{
        setenteredtitle(e.target.value);
    };
    const amountchanger=(e)=>{
        setenteredamount(e.target.value);
    };
    const datechanger=(e)=>{
        setentereddate(e.target.value);
    };
    const submithandler=(e)=>{
        e.preventDefault();
        const expense_Data ={
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(entereddate)
        }
        //console.log(expense_Data);
        props.onSaveExpensedata(expense_Data);
        setenteredtitle('');
        setenteredamount('');
        setentereddate('');
    }
    return(
    <form onSubmit={submithandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>
                   Title
                </label>
                <input type='text' value={enteredtitle} onChange={titlechanger}/>               
            </div>
            <div className="new-expense__control">
                <label>
                   Amount
                </label>
                <input type='number' value={enteredamount} onChange={amountchanger} />               
            </div>
            <div className="new-expense__control">
                <label>
                  Date
                </label>
                <input type='date' value={entereddate} onChange={datechanger} />               
            </div>
            <div className="new-expense___actions">
                <button type="submit">Add Expense</button>

            </div>
            
        </div>
    </form>
    ); 
}
export default ExpenseForm;