const db = require('../config/connection');
const { User, ShopItem } = require('../models');
const userSeeds = require('./userSeeds.json');
const shopSeeds = require('./shopSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('ShopItem', 'shopitems');

  await User.create(userSeeds);
  await ShopItem.create(shopSeeds);

  console.log('all done!');
  process.exit(0);
});