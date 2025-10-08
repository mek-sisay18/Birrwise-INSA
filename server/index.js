require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://yonatanlisanu14:<db_password>@birr-wise.dt5qs9a.mongodb.net/birrwise?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const incomeSchema = new mongoose.Schema({
  title: String,
  category: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now },
});

const expenseSchema = new mongoose.Schema({
  title: String,
  category: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now },
});

const Income = mongoose.model('Income', incomeSchema);
const Expense = mongoose.model('Expense', expenseSchema);

app.get('/api/income', async (req, res) => {
  const items = await Income.find().sort({ createdAt: -1 });
  res.json(items);
});

app.post('/api/income', async (req, res) => {
  const { title, category, amount } = req.body;
  const item = new Income({ title, category, amount });
  await item.save();
  res.status(201).json(item);
});

app.get('/api/expense', async (req, res) => {
  const items = await Expense.find().sort({ createdAt: -1 });
  res.json(items);
});

app.post('/api/expense', async (req, res) => {
  const { title, category, amount } = req.body;
  const item = new Expense({ title, category, amount });
  await item.save();
  res.status(201).json(item);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
