const { model, Schema } = require("mongoose");

module.exports = model(
  "posts",
  new Schema({
    caption: String,
    image: String,
  })
);
