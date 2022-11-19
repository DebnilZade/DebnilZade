import './Expense.css';
function Expense(props){
    //const expensedate = new Date(2022, 5 , 15);
    return( <div className="expense-div">
        <h2 className="expense-content">{props.title}</h2>
        <div className="expense-content">{props.amount}</div>
        <div className="expense-content">{props.date.toISOString()}</div>
        </div>);
}
export default Expense;