const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const translation = new Schema({
  storyId: { type: String },
  translation: { type: [String] },
  votes: { type: Number },
});

const Translation = mongoose.model("Translation", translation);

module.exports = Translation;
