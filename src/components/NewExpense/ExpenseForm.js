import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const [isTitleValid, setTitleValid] = useState(true);
    const [isAmountValid, setAmountValid] = useState(true);
    const [isDateValid, setDateValid] = useState(true);

    const titleChangeHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setTitleValid(true);
        }
        setInputTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setAmountValid(true);
        }
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setDateValid(true);
        }
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        if(expenseData.title.length === 0) {
            setTitleValid(false);
        };
        if(expenseData.amount.length === 0) {
            setAmountValid(false);
        };
        if(inputDate.trim().length === 0) {
            setDateValid(false);
        };


        props.onSaveExpenseData(expenseData);
        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    };

    return <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className={`new-expense__control control1 ${!isTitleValid ? 'invalidTitle' : ''}`}>
                <label>Title</label>
                <input type='text' value={inputTitle} onChange={titleChangeHandler} />
            </div>
            <div className={`new-expense__control control2 ${!isAmountValid ? 'invalidAmount' : ''}`}>
                <label>Amount</label>
                <input type='number' value={inputAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
            </div>
            <div className={`new-expense__control control3 ${!isDateValid ? 'invalidDate' : ''}`}>
                <label>Date</label>
                <input type='date' value={inputDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        </form>


};

export default ExpenseForm;