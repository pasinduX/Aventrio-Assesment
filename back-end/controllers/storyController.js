const emojiSchema = require("../models/emojiStory.model");
const storyGenerator = require("../functions/storyGenerator");

const createStory = (req, res) => {
  const { emojiSequence, id, authorNickName, createdAt } = req.body;
  const translation = storyGenerator(emojiSequence);

  const newStory = new emojiSchema({
    emojiSequence,
    id,
    translation,
    authorNickName,
    createdAt,
  });

  newStory
    .save()
    .then(() => res.json({ message: "Story added!", story: newStory }))
    .catch((err) => res.status(400).json({ error: `Error: ${err}` }));
};

// Get All Stories
const getAllStories = (req, res) => {
  emojiSchema
    .find()
    .then((stories) => res.json(stories))
    .catch((err) => res.status(400).json({ error: `Error: ${err}` }));
};

module.exports = { createStory, getAllStories };
