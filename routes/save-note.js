const express = require("express");
const router = express.Router();
const Notes = require("./note-schema");

router.post("/add", async (req, res) => {
  const { product, replacement, hint, note } = req.body;
  if (!product && !replacement && !note) {
    return res.status(400).json({ error: "All fields are empty" });
  }
  
  const noteObj = {};
  if (product) noteObj.product = product;
  if (replacement) noteObj.replacement = replacement;
  if (hint) noteObj.hint = hint;
  if (note) noteObj.note = note;

  try {
    let newNote = new Notes(noteObj);
    await newNote.save();

    res.json(newNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding data" });
  }
});

module.exports = router;
