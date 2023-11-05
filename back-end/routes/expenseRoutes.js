const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');


router.get('/expenses', async (req, res) => {
  console.log("GET request has hit back end"); 
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    console.error('Error fetching expenses:', err);
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
});

router.delete('/expenses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json(deletedExpense);
  } catch (err) {
    console.error('Error deleting expense:', err);
    res.status(500).json({ error: 'Failed to delete the expense' });
  }
});

router.post('/expenses', async (req, res) => {
  try {
    const newExpense = new Expense({
      name: req.body.name,
      cost: req.body.cost,
      category: req.body.category,
    });
    const savedExpense = await newExpense.save(); 
    res.status(201).json(savedExpense);
  } catch (err) {
    console.error('Error adding expense:', err);
    res.status(500).json({ error: 'Failed to add expense' });
  }
});

module.exports = router;
