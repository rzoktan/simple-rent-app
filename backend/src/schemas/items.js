const mongoose = require("mongoose");

const schema = mongoose.Schema({
  item_name: {
    require: true,
    type: String,
  },
  item_category: {
    require: true,
    type: Object,
  },
  item_brand: {
    require: true,
    type: String,
  },
  item_totals: {
    require: true,
    type: Number,
  },
  item_image: {
    require: true,
    type: Object,
  },
});

module.exports = mongoose.model("items", schema);
