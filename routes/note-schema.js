const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  product: String,
  replacement: String,
  hint: String,
  note: String,
});

module.exports = Notes = mongoose.model("pre-products-notes", NoteSchema);
