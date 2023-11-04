import React from 'react';



function ExpenseList({ expenses, onDeleteExpense }) {
  
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <strong>{expense.name}</strong>: ${expense.cost} - {expense.category}
            <button onClick={() => onDeleteExpense(expense._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
