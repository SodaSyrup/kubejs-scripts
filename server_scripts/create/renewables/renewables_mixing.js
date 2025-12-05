ServerEvents.recipes((mixing) => {
  let SCRIPTNAME = "renewables_mixing.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();
  let recipes = [
    {
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:blue_dye",
          count: 1,
        },
        {
          item: "minecraft:cobblestone",
        },
        {
          item: "minecraft:cobblestone",
        },
      ],
      results: [
        {
          item: "create:asurine",
          count: 3,
        },
      ],
      heatRequirement: "heated",
    },
    {
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:dirt",
        },
        {
          item: "minecraft:gravel",
        },
      ],
      results: [
        {
          item: "minecraft:coarse_dirt",
          count: 2,
        },
      ],
      heatRequirement: "none",
    },
    {
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:red_dye",
          count: 1,
        },
        {
          item: "minecraft:cobblestone",
        },
        {
          item: "minecraft:cobblestone",
        },
      ],
      results: [
        {
          item: "create:crimsite",
          count: 3,
        },
      ],
      heatRequirement: "heated",
    },
    {
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:shroomlight",
        },
        {
          item: "minecraft:yellow_dye",
        },
      ],
      results: [
        {
          item: "minecraft:ochre_froglight",
          count: 2,
        },
      ],
      heatRequirement: "none",
    },
    {
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:shroomlight",
        },
        {
          item: "minecraft:purple_dye",
        },
      ],
      results: [
        {
          item: "minecraft:pearlescent_froglight",
          count: 2,
        },
      ],
      heatRequirement: "none",
    },
    {
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:shroomlight",
        },
        {
          item: "minecraft:green_dye",
        },
      ],
      results: [
        {
          item: "minecraft:verdant_froglight",
          count: 2,
        },
      ],
      heatRequirement: "none",
    },
    {
      type: "create:mixing",
      ingredients: [
        {
          fluid: "minecraft:lava",
          amount: 40567,
        },
        {
          fluid: "minecraft:water",
          amount: 40567,
        },
      ],
      results: [
        {
          item: "minecraft:obsidian",
          count: 1,
        },
      ],
      heatRequirement: "none",
    },
    {
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:yellow_dye",
          count: 1,
        },
        {
          item: "minecraft:cobblestone",
        },
        {
          item: "minecraft:cobblestone",
        },
      ],
      results: [
        {
          item: "create:ochrum",
          count: 4,
        },
      ],
      heatRequirement: "heated",
    },
    {
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:green_dye",
          count: 1,
        },
        {
          item: "minecraft:cobblestone",
        },
        {
          item: "minecraft:cobblestone",
        },
      ],
      results: [
        {
          item: "create:veridium",
          count: 3,
        },
      ],
      heatRequirement: "heated",
    },
    {
      type: "create:mixing",
      heatRequirement: "heated",
      ingredients: [
        {
          item: "minecraft:calcite",
        },
        {
          item: "create:experience_nugget",
        },
      ],
      results: [
        {
          item: "minecraft:egg",
          count: 1,
        },
      ],
    },
    {
      type: "create:mixing",
      heatRequirement: "superheated",
      ingredients: [
        {
          item: "minecraft:blackstone",
        },
        {
          item: "minecraft:gold_ingot",
        },
        {
          item: "minecraft:gold_ingot",
        },
      ],
      results: [
        {
          item: "minecraft:gilded_blackstone",
          count: 1,
        },
      ],
    },
  ];

  recipes.forEach((recipe) => {
    mixing.custom(recipe);
    Debug.console(
      `Adding ${recipe.type} recipe for: ${recipe.results[0].item}`
    );
  });

  Debug.printEnd();
});
