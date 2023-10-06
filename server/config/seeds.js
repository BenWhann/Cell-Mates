const db = require('./connection');
const { } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  // example
  await cleanDB('Category', 'categories');

  // example
  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);
});