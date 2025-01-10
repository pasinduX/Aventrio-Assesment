const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const translationRule = new Schema({
  pattern: { type: [String] },
  templates: { type: [String] },
});

const TranslationRule = mongoose.model("TranslationRule", translationRule);

module.exports = TranslationRule;
