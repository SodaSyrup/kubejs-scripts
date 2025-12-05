ServerEvents.recipes((polishing) => {
  let SCRIPTNAME = "sandpaper_polishing.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();
  let recipes = [
    {
      type: "create:sandpaper_polishing",
      ingredients: [
        {
          item: "minecraft:dripstone_block",
        },
      ],
      results: [
        {
          item: "minecraft:pointed_dripstone",
          count: 1,
        },
      ],
    },
  ];

  recipes.forEach((recipe) => {
    polishing.custom(recipe);
    Debug.console(
      `Adding ${recipe.type} recipe for: ${recipe.results[0].item}`
    );
  });

  Debug.printEnd();
});
