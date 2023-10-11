const { Schema, model } = require('mongoose');

const shopSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Pic: {
        type: String,
        required: true
    }
  });

  const ShopItem = model('ShopItem', shopSchema);

module.exports = ShopItem;