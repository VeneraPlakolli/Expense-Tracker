import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';



function App() {
  const expenses = [
    {
    id: 'e1',
    title: 'Smart Phone',
    amount: 650.00,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Furniture',
    amount: 949.99,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Jacket',
    amount: 45,
    date: new Date(2021, 5, 12),
  },
  ];

  const onExpenseHandler = (expense) => {
    // console.log('From app.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={onExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
