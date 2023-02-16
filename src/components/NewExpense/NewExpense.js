import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {

    const [isShowedUp, setShowUp] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const setShowHandler = () => {
        setShowUp(true);
    }

    return (
        <div className="new-expense">
            { !isShowedUp && (
                <button type="submit" onClick={setShowHandler}>Click to add new expense!</button>
            )
            }

            {
                isShowedUp && (
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
                )
            }
            
        </div>
    );
};

export default NewExpense;