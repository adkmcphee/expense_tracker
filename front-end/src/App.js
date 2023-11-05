import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';
import './styles/App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loaded, setLoaded] = useState(false); 

  useEffect(() => {
    if (!loaded) { 
      axios
        .get('http://localhost:8080/expenses')
        .then((response) => {
          setExpenses(response.data);
          setLoaded(true); 
        })
        .catch((error) => {
          console.error('Error fetching expenses:', error);
        });
    }
  }, [loaded]);

  const onDeleteExpense = (expenseId) => {
    axios
      .delete(`http://localhost:8080/expenses/${expenseId}`)
      .then(() => {
        setExpenses((prevExpenses) =>
          prevExpenses.filter((expense) => expense._id !== expenseId)
        );
      })
      .catch((error) => {
        console.error('Error deleting expense:', error);
      });
  };

  const onAddExpense = (newExpense) => {
    axios
      .post('http://localhost:8080/expenses', newExpense)
      .then((response) => {
        setExpenses([...expenses, response.data]);
      })
      .catch((error) => {
        console.error('Error adding expense:', error);
      });
  };

  return (
    <div className="App">
      <Header />
      <ExpenseForm onAddExpense={onAddExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={onDeleteExpense} />
    </div>
  );
}

export default App;
