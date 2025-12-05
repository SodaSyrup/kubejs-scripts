ServerEvents.recipes((compacting) => {
  let SCRIPTNAME = "renewables_compacting.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();
  let recipes = [
    // Recipe 1: Stone and Coal to Coal Ore
    {
      type: "create:compacting",
      ingredients: [
        { item: "minecraft:stone" },
        { item: "minecraft:stone" },
        { item: "minecraft:coal" },
      ],
      results: [
        {
          item: "minecraft:coal_ore",
          count: 2,
        },
      ],
    },
    // Recipe 2: Coal Block to Diamond
    {
      type: "create:compacting",
      heatRequirement: "superheated",
      ingredients: [
        { item: "minecraft:coal_block" },
        { item: "minecraft:coal_block" },
        { item: "minecraft:coal_block" },
        { item: "minecraft:coal_block" },
        { item: "minecraft:coal_block" },
        { item: "minecraft:coal_block" },
        { item: "minecraft:coal_block" },
        { item: "minecraft:coal_block" },
        { item: "minecraft:coal_block" },
      ],
      results: [
        {
          item: "minecraft:diamond",
          count: 1,
        },
      ],
    },
    // Recipe 3: Compacting Diamond Block to Ancient Debris
    {
      type: "create:compacting",
      heatRequirement: "heated",
      ingredients: [
        { item: "minecraft:nether_star" },
        { item: "minecraft:diamond_block" },
        {
          amount: 40500,
          fluid: "create:potion",
          nbt: {
            Bottle: "REGULAR",
            Potion: "minecraft:harming",
          },
        },
      ],
      results: [
        {
          item: "minecraft:ancient_debris",
        },
        {
          chance: 0.95,
          item: "minecraft:nether_star",
        },
        {
          amount: 40500,
          fluid: "create:potion",
          nbt: {
            Bottle: "REGULAR",
            Potion: "minecraft:weakness",
          },
        },
      ],
    },
    // Recipe 4: Compacting Netherrack
    {
      type: "create:compacting",
      heatRequirement: "superheated",
      ingredients: [
        { item: "create:cinder_flour" },
        {
          amount: 1620,
          fluid: "minecraft:lava",
        },
      ],
      results: [
        {
          item: "minecraft:netherrack",
        },
      ],
    },
    // Recipe 5: Calcite and Deepslate to Tuff
    {
      type: "create:compacting",
      heatRequirement: "heated",
      ingredients: [
        { item: "minecraft:calcite" },
        { item: "minecraft:deepslate" },
      ],
      results: [
        {
          count: 2,
          item: "minecraft:tuff",
        },
      ],
    },
  ];

  recipes.forEach((recipe) => {
    compacting.custom(recipe);
    Debug.console(
      `Adding ${recipe.type} recipe for: ${recipe.results[0].item}`
    );
  });

  Debug.printEnd();
});
