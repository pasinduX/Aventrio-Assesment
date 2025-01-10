const storyPatterns = require("../patterns/pattern");
const arraysMatch = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const storyGenerator = function (emojiSequence) {
  for (const patternObject of storyPatterns) {
    if (arraysMatch(patternObject.pattern, emojiSequence)) {
      const randomTemplate =
        patternObject.templates[
          Math.floor(Math.random() * patternObject.templates.length)
        ];
      return randomTemplate;
    }
  }

  return "No matching story found for this emoji sequence.";
};

module.exports = storyGenerator;
