import React, {useState} from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false)
    //below function will  save the data entered by user
    //data transfer from child to parent
    const saveExpenseDataHandler = (entedredExpenseData) => {
        const expenseData = {
            ...entedredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    const startEditingHandler = () => {
        setEditing(true);
    };

    const stopEditingHandler = () => {
        setEditing(false);
    };

    return (<div className='new-expense'>
        {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
        {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />)}
    </div>);
};

export default NewExpense;