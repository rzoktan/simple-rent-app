const mongoose = require("mongoose");

const schema = mongoose.Schema({
  category_name: {
    unique: true,
    require: true,
    type: String,
  },
  descriptions: {
    require: true,
    type: String,
  },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("item_category", schema);
