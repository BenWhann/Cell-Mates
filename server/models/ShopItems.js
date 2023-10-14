const { Schema, model } = require('mongoose');

const shopSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: true
    },
    price: {
        type: Number,
        required: true
    },
    pic: {
        type: String,
        required: true
    }
  });

  const ShopItem = model('ShopItem', shopSchema);

module.exports = ShopItem;