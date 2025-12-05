ServerEvents.recipes((haunting) => {
  let SCRIPTNAME = "renewables_haunting.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();
  let recipes = [
    // Recipe 1: Oak Leaves to Crimson Leaf
    {
      type: "create:haunting",
      ingredients: [
        {
          item: "minecraft:oak_leaves",
        },
      ],
      results: [
        {
          item: "minecraft:nether_wart_block",
          count: 1,
          chance: 1,
        },
      ],
    },
    // Recipe 2: Oak Log to Crimson Stem
    {
      type: "create:haunting",
      ingredients: [
        {
          item: "minecraft:oak_log",
        },
      ],
      results: [
        {
          item: "minecraft:crimson_stem",
          count: 1,
          chance: 1,
        },
      ],
    },
    // Recipe 3: Sandstone to End Stone
    {
      type: "create:haunting",
      ingredients: [
        {
          item: "minecraft:sandstone",
        },
      ],
      results: [
        {
          item: "minecraft:end_stone",
          count: 1,
          chance: 1,
        },
      ],
    },
    // Recipe 4: Spruce Leaves to Warped Wart
    {
      type: "create:haunting",
      ingredients: [
        {
          item: "minecraft:spruce_leaves",
        },
      ],
      results: [
        {
          item: "minecraft:warped_wart_block",
          count: 1,
          chance: 1,
        },
      ],
    },
    // Recipe 5: Spruce Log to Warped Stem
    {
      type: "create:haunting",
      ingredients: [
        {
          item: "minecraft:spruce_log",
        },
      ],
      results: [
        {
          item: "minecraft:warped_stem",
          count: 1,
          chance: 1,
        },
      ],
    },
    // Recipe 6: Bone Block to Calcite
    {
      type: "create:haunting",
      ingredients: [
        {
          item: "minecraft:bone_block",
        },
      ],
      results: [
        {
          item: "minecraft:calcite",
          count: 1,
        },
      ],
    },
  ];

  recipes.forEach((recipe) => {
    haunting.custom(recipe);
    Debug.console(
      `Adding ${recipe.type} recipe for: ${recipe.results[0].item}`
    );
  });

  Debug.printEnd();
});
