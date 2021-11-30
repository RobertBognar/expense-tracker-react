import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button type="button" className="expense-item__button">
                    Delete
                </button>
            </Card>
        </li>
    );
}

export default ExpenseItem;
