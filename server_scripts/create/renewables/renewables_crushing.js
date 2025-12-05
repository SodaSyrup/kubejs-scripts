ServerEvents.recipes((crushing) => {
  let SCRIPTNAME = "renewables_crushing.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();

  let recipes = [
    // Recipe 1: Experience Block to Diamond
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "create:experience_block",
        },
      ],
      results: [
        {
          item: "minecraft:diamond",
          chance: 0.35,
        },
      ],
      processingTime: 100,
    },
    // Recipe 2: Coarse Dirt to Dirt and Flint
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "minecraft:coarse_dirt",
        },
      ],
      results: [
        {
          item: "minecraft:dirt",
          count: 2,
          chance: 1.0,
        },
        {
          item: "minecraft:flint",
          chance: 0.3,
        },
      ],
      processingTime: 10,
    },
    // Recipe 3: Quartz to Experience Nugget
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "minecraft:quartz",
        },
      ],
      results: [
        {
          item: "create:experience_nugget",
          chance: 0.35,
        },
      ],
      processingTime: 50,
    },
    // Recipe 4: Scoria to Lapis Lazuli
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "create:scoria",
        },
      ],
      results: [
        {
          item: "minecraft:lapis_lazuli",
          count: 2,
          chance: 1,
        },
      ],
      processingTime: 5,
    },
    // Recipe 5: Limestone to Calcite
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "create:limestone",
        },
      ],
      results: [
        {
          item: "minecraft:calcite",
        },
      ],
      processingTime: 250,
    },
  ];
  recipes.forEach((recipe) => {
    crushing.custom(recipe);
    Debug.console(
      `Adding ${recipe.type} recipe for: ${recipe.ingredients[0].item}`
    );
  });

  Debug.printEnd();
});
