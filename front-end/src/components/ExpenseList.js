import React from 'react';
import '../styles/ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense }) {
  
  const totalExpense = expenses.reduce((total, expense) => total + expense.cost, 0);

  return (
    <div className="ExpenseContainer">
      <ul>
        <li className="column-titles">
          <span>Name of Expense</span>
          <span>Expense Cost</span>
          <span>Expense Category</span>
          <span>Action</span>
        </li>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.name}</span>
            <span>${expense.cost}</span>
            <span>{expense.category}</span>
            <button onClick={() => onDeleteExpense(expense._id)}>Delete</button>
          </li>
        ))}
        <li className="total-expense">
          <span>Total Expenses: ${totalExpense} </span>
        </li>
      </ul>
    </div>
  );
}

export default ExpenseList;
