ServerEvents.recipes((splashing) => {
  let SCRIPTNAME = "renewables_splashing.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();
  let recipes = [
    {
      type: "create:splashing",
      ingredients: [
        {
          item: "minecraft:stone",
        },
      ],
      results: [
        {
          item: "minecraft:dripstone_block",
          count: 1,
          chance: 1,
        },
      ],
    },
    {
      type: "create:splashing",
      ingredients: [
        {
          item: "create:limestone",
        },
      ],
      results: [
        {
          item: "create:crushed_raw_zinc",
          count: 1,
          chance: 0.1,
        },
      ],
    },
    {
      type: "create:splashing",
      ingredients: [
        {
          item: "create:blaze_burner",
        },
      ],
      results: [
        {
          item: "create:empty_blaze_burner",
        },
        {
          count: 3,
          item: "minecraft:blaze_rod",
        },
        {
          chance: 0.5,
          item: "minecraft:blaze_rod",
        },
      ],
    },
  ];

  recipes.forEach((recipe) => {
    splashing.custom(recipe);
    Debug.console(
      `Adding ${recipe.type} recipe for: ${recipe.results[0].item}`
    );
  });

  Debug.printEnd();
});
