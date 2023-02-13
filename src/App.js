import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
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

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
