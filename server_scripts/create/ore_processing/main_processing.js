ServerEvents.recipes((processing) => {
  let SCRIPTNAME = "main_processing.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();
  // Complex removal (AND condition)
  let removedRecipes = [
    {
      input: "minecraft:raw_iron",
      type: "create:crushing",
    },
    {
      input: "minecraft:raw_gold",
      type: "create:crushing",
    },
    {
      input: "minecraft:raw_copper",
      type: "create:crushing",
    },
    {
      input: "create:raw_zinc",
      type: "create:crushing",
    },
    {
      input: "minecraft:netherite_ingot",
      type: "create:pressing",
    },
  ];

  let recipes = [
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "minecraft:raw_iron",
        },
      ],
      results: [
        {
          item: "create:crushed_raw_iron",
          count: 1,
        },
        {
          item: "create:crushed_raw_iron",
          count: 2,
          chance: 0.45,
        },
        {
          item: "create:crushed_raw_iron",
          chance: 0.2,
        },
      ],
      processingTime: 50,
    },
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "minecraft:raw_gold",
        },
      ],
      results: [
        {
          item: "create:crushed_raw_gold",
          count: 1,
        },
        {
          item: "create:crushed_raw_gold",
          count: 2,
          chance: 0.45,
        },
        {
          item: "create:crushed_raw_gold",
          chance: 0.2,
        },
      ],
      processingTime: 50,
    },
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "minecraft:raw_copper",
        },
      ],
      results: [
        {
          item: "create:crushed_raw_copper",
          count: 1,
        },
        {
          item: "create:crushed_raw_copper",
          count: 2,
          chance: 0.45,
        },
        {
          item: "create:crushed_raw_copper",
          chance: 0.2,
        },
      ],
      processingTime: 50,
    },
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "create:raw_zinc",
        },
      ],
      results: [
        {
          item: "create:crushed_raw_zinc",
          count: 1,
        },
        {
          item: "create:crushed_raw_zinc",
          count: 2,
          chance: 0.45,
        },
        {
          item: "create:crushed_raw_zinc",
          chance: 0.2,
        },
      ],
      processingTime: 50,
    },
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "clutter:raw_silver",
        },
      ],
      results: [
        {
          item: "create:crushed_raw_silver",
          count: 1,
        },
        {
          item: "create:crushed_raw_silver",
          count: 2,
          chance: 0.45,
        },
        {
          item: "create:crushed_raw_silver",
          chance: 0.2,
        },
      ],
      processingTime: 50,
    },
    {
      type: "create:crushing",
      ingredients: [
        {
          item: "minecraft:ancient_debris",
        },
      ],
      results: [
        {
          item: "minecraft:netherite_scrap",
          count: 2,
        },
        {
          item: "minecraft:netherite_scrap",
          chance: 0.35,
          count: 1,
        },
        {
          item: "minecraft:netherite_scrap",
          chance: 0.15,
          count: 1,
        },
      ],
    },
    {
      type: "create:compacting",
      heatRequirement: "heated",
      ingredients: [
        {
          item: "minecraft:netherite_scrap",
        },
        {
          item: "minecraft:gold_ingot",
        },
      ],
      results: [
        {
          item: "createdeco:netherite_sheet",
          count: 2,
        },
      ],
    },
    {
      type: "create:compacting",
      heatRequirement: "superheated",
      ingredients: [
        {
          item: "createdeco:netherite_sheet",
        },
        {
          item: "createdeco:netherite_sheet",
        },
        {
          item: "createdeco:netherite_sheet",
        },
        {
          item: "createdeco:netherite_sheet",
        },
      ],
      results: [
        {
          item: "minecraft:netherite_ingot",
          count: 1,
        },
      ],
    },
    {
      type: "create:splashing",
      ingredients: [
        {
          item: "create:crushed_raw_silver",
        },
      ],
      results: [
        {
          item: "clutter:silver_nugget",
          count: 9,
        },
        {
          item: "spelunkery:raw_magnetite_nugget",
          count: 1,
          chance: 0.1,
        },
        {
          item: "spelunkery:raw_magnetite_nugget",
          count: 1,
          chance: 0.05,
        },
      ],
    },
  ];
  let vanillarecipes = [
    {
      type: "minecraft:blasting",
      ingredient: {
        item: "create:crushed_raw_silver",
      },
      result: "clutter:silver_ingot",
      experience: 0.1,
      cookingtime: 100,
    },
    {
      type: "minecraft:smelting",
      ingredient: {
        item: "create:crushed_raw_silver",
      },
      result: "clutter:silver_ingot",
      experience: 0.1,
      cookingtime: 200,
    },
  ];

  removedRecipes.forEach((recipe) => {
    processing.remove(recipe);
    Debug.console(
      `Removed Recipe for: ${recipe.input} with type: ${recipe.type}`
    );
  });
  Debug.console(`Finished removing recipes!`);

  recipes.forEach((recipe) => {
    processing.custom(recipe);
    Debug.console(
      `Adding ${recipe.type} recipe for: ${recipe.results[0].item}`
    );
  });
  vanillarecipes.forEach((recipe) => {
    processing.custom(recipe);
    Debug.console(`Adding ${recipe.type} recipe for: ${recipe.result}`);
  });
  Debug.console(`Finished adding processing recipes!`);

  Debug.printEnd();
});
