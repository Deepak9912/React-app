import React from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    //below function will  save the data entered by user
    //data transfer from child to parent
    const saveExpenseDataHandler = (entedredExpenseData) => {
        const expenseData = {
            ...entedredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;