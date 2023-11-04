require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const Expense = require('./models/expense');

//Set up Express
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

//Connect to database, run initial seed.
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

const expenseRouter = require('./routes/expenseRoutes');

//App Routes
app.use('/', expenseRouter);
app.use('/:id', expenseRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
