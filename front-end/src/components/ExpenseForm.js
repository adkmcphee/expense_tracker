import React, { useState } from 'react';
import axios from 'axios'; 

function ExpenseForm({ onAddExpense }) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseCost, setExpenseCost] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      name: expenseName,
      cost: parseFloat(expenseCost),
      category: expenseCategory,
    };

    try {
 
      const response = await axios.post('http://localhost:8080/expenses', newExpense);


      if (response.status === 201) {

        onAddExpense(response.data);

  
        setExpenseName('');
        setExpenseCost('');
        setExpenseCategory('');
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cost"
          value={expenseCost}
          onChange={(e) => setExpenseCost(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={expenseCategory}
          onChange={(e) => setExpenseCategory(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
