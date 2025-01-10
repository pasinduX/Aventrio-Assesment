const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emojiSchema = new Schema({
  id: { type: String },
  emojiSequence: { type: [String] },
  translation: { type: String },
  authorNickName: { type: String },
  likes: { type: Number },
  createdAt: { type: Date },
});

const EmojiSchema = mongoose.model("EmojiSchema", emojiSchema);

module.exports = EmojiSchema;
