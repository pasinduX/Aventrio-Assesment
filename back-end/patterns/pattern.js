const storyPatterns = [
  {
    pattern: ["🏃", "🌧️"],
    templates: ["{person} ran from the rain", "Quick dash through the storm"],
  },
  {
    pattern: ["🐱", "🐟"],
    templates: [
      "The cat spotted its favorite meal",
      "Feline fishing adventures",
    ],
  },
  {
    pattern: ["🚀", "🌌"],
    templates: [
      "Blasting off into the starry expanse",
      "Adventures among the galaxies",
    ],
  },
  {
    pattern: ["🎨", "🖌️"],
    templates: [
      "An artist's masterpiece in progress",
      "Creating colors on the canvas of dreams",
    ],
  },
  {
    pattern: ["🦸", "💥"],
    templates: [
      "The hero saves the day in an epic battle",
      "Explosions mark the end of villainy",
    ],
  },
  {
    pattern: ["🌳", "🌞"],
    templates: [
      "Nature thrives under the bright sun",
      "A walk through the serene forest",
    ],
  },
  {
    pattern: ["🌊", "🏄"],
    templates: ["Riding the waves of the ocean", "A surfer's paradise"],
  },
  {
    pattern: ["🏔️", "❄️"],
    templates: ["Climbing the snowy peaks", "Adventures in the icy wilderness"],
  },
  {
    pattern: ["🕵️", "🔍"],
    templates: [
      "The detective is on the case",
      "Solving mysteries one clue at a time",
    ],
  },
  {
    pattern: ["🍎", "📚"],
    templates: [
      "Learning something new every day",
      "Knowledge is the best nourishment",
    ],
  },
  {
    pattern: ["🍕", "🍔"],
    templates: ["Fast food frenzy", "A delicious meal to share"],
  },
  {
    pattern: ["🎵", "🎤"],
    templates: [
      "Singing tunes to brighten the day",
      "A musical journey unfolds",
    ],
  },
  {
    pattern: ["📷", "🌅"],
    templates: [
      "Capturing the beauty of the sunset",
      "A picture-perfect moment",
    ],
  },
  {
    pattern: ["🚴", "🛤️"],
    templates: ["Cycling along scenic paths", "A journey on two wheels"],
  },
  {
    pattern: ["🐕", "🦴"],
    templates: [
      "The dog found a tasty treat",
      "Man's best friend on a playful day",
    ],
  },
  {
    pattern: ["🦋", "🌺"],
    templates: ["A butterfly dances among flowers", "Nature's delicate beauty"],
  },
  {
    pattern: ["⚽", "🥅"],
    templates: ["Kicking goals on the field", "A thrilling soccer match"],
  },
  {
    pattern: ["🚢", "⚓"],
    templates: ["Sailing the vast seas", "Anchoring at a peaceful harbor"],
  },
  {
    pattern: ["🎭", "🕯️"],
    templates: ["Theater lights up the night", "A dramatic tale unfolds"],
  },
  {
    pattern: ["🌋", "🌪️"],
    templates: ["Nature's fury on display", "Volcanoes and tornadoes collide"],
  },
  {
    pattern: ["🛫", "🌏"],
    templates: [
      "Jet-setting around the globe",
      "Exploring the wonders of the world",
    ],
  },
  {
    pattern: ["🧙", "🪄"],
    templates: ["A wizard conjures spells", "Magic fills the air"],
  },
  {
    pattern: ["🐘", "🌿"],
    templates: [
      "The elephant strolls through the jungle",
      "A majestic creature in its habitat",
    ],
  },
  {
    pattern: ["💻", "☕"],
    templates: ["Coding with a cup of coffee", "A programmer's sanctuary"],
  },
  {
    pattern: ["🎉", "🎁"],
    templates: ["Celebrating a special day", "Presents and joy all around"],
  },
  {
    pattern: ["🛒", "🛍️"],
    templates: ["A shopping spree in the city", "Bagging the best deals"],
  },
  {
    pattern: ["🎮", "🕹️"],
    templates: [
      "Leveling up in a thrilling game",
      "Adventures in the virtual world",
    ],
  },
  {
    pattern: ["🧗", "🪨"],
    templates: ["Scaling rocky cliffs", "A climber's daring journey"],
  },
  {
    pattern: ["🪁", "🌤️"],
    templates: ["Flying kites under the clear sky", "A breezy day of fun"],
  },
  {
    pattern: ["🍇", "🍷"],
    templates: ["A vineyard's finest creation", "Sipping wine under the stars"],
  },
  {
    pattern: ["📖", "🕰️"],
    templates: ["Reading tales of old", "A journey through time and stories"],
  },
  // Additional entries for more data:
  {
    pattern: ["🦄", "🌈"],
    templates: [
      "Chasing rainbows with a unicorn",
      "Magical adventures in a colorful world",
    ],
  },
  {
    pattern: ["👨‍🚀", "🌍"],
    templates: [
      "Exploring the universe",
      "An astronaut's journey back to Earth",
    ],
  },
  {
    pattern: ["🦊", "🍂"],
    templates: [
      "The fox roams in the autumn leaves",
      "A walk in the woods with nature",
    ],
  },
  {
    pattern: ["🧃", "🍪"],
    templates: [
      "A snack break with juice and cookies",
      "Perfect pairing for a cozy moment",
    ],
  },
  {
    pattern: ["🎲", "♟️"],
    templates: ["A strategic game of chess", "Rolling dice and taking chances"],
  },
  {
    pattern: ["🍁", "🍂"],
    templates: [
      "Falling leaves and crisp air",
      "Autumn stroll through the park",
    ],
  },
  {
    pattern: ["💃", "🕺"],
    templates: [
      "Dancing through the night",
      "A celebration in rhythm and steps",
    ],
  },
  {
    pattern: ["🐒", "🍌"],
    templates: ["Monkeying around with bananas", "A jungle snack time"],
  },
  {
    pattern: ["🐦", "🌳"],
    templates: [
      "A bird sings from the treetops",
      "Nature's melody in the forest",
    ],
  },
  {
    pattern: ["🍀", "🌼"],
    templates: [
      "A lucky moment in a field of flowers",
      "Nature's gifts all around",
    ],
  },
  {
    pattern: ["💡", "🔌"],
    templates: [
      "Powering up with innovation",
      "A spark of creativity in the dark",
    ],
  },
  {
    pattern: ["🎯", "🏆"],
    templates: [
      "Aiming for success and victory",
      "The target is reached, the trophy is won",
    ],
  },
  {
    pattern: ["🎡", "🎠"],
    templates: ["Riding the carousel of life", "A day at the fairgrounds"],
  },
  {
    pattern: ["🍀", "🧘"],
    templates: [
      "Finding peace under the green canopy",
      "A moment of serenity and mindfulness",
    ],
  },
  {
    pattern: ["🦓", "🏞️"],
    templates: [
      "Zebras roam across the plains",
      "A safari adventure through the savanna",
    ],
  },
];

module.exports = storyPatterns;
