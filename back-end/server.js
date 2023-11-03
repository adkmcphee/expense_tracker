require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const Expense = require('./models/expense');

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
  
  const item = new Expense({
    description: 'Keyboard',
    amount: 100,
    category: "Work supplies"
  });

  item.save()
    .then(() => {
      console.log('Expense item saved successfully');
    })
    .catch((error) => {
      console.error('Error saving the Expense item:', error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
