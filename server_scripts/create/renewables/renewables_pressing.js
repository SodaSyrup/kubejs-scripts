ServerEvents.recipes((pressing) => {
  let SCRIPTNAME = "renewables_pressing.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();
  let recipes = [
    {
      type: "create:pressing",
      ingredients: [
        {
          item: "minecraft:cobblestone",
        },
      ],
      results: [
        {
          item: "minecraft:cobbled_deepslate",
          count: 1,
        },
      ],
    },
    {
      type: "create:pressing",
      ingredients: [
        {
          item: "minecraft:kelp",
        },
      ],
      results: [
        {
          item: "minecraft:green_dye",
          count: 1,
        },
      ],
    },
  ];

  recipes.forEach((recipe) => {
    pressing.custom(recipe);
    Debug.console(
      `Adding ${recipe.type} recipe for: ${recipe.results[0].item}`
    );
  });

  Debug.printEnd();
});
