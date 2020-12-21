const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookSchema = new Schema({
  bookName: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  bookType: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Book", BookSchema)
