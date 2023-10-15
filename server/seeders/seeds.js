const db = require('../config/connection');
const { User, ShopItem } = require('../models');
const userSeeds = require('./userSeeds.json');
const shopSeeds = require('./shopSeeds.json');
const cleanDB = require('./cleanDB');

//script to run seed data. Cleans up DB for each collection and runs json files to fill data
db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('ShopItem', 'shopitems');

  await User.create(userSeeds);
  await ShopItem.create(shopSeeds);

  console.log('all done!');
  process.exit(0);
});