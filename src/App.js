import React, { useState } from 'react';

import '../src/index.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        color: 'White',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        color: 'Green',
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        color: 'Black',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        color: 'Brown',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
