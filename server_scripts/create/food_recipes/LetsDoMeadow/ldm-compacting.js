ServerEvents.recipes((cheese_forming) => {
  let SCRIPTNAME = "ldm-compacting.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();

  let cheese_recipes = [
    ["meadow:wooden_milk_bucket", "meadow:cheese_block"],
    ["meadow:wooden_sheep_milk_bucket", "meadow:sheep_cheese_block"],
    ["meadow:wooden_buffalo_milk_bucket", "meadow:buffalo_cheese_block"],
    ["meadow:wooden_goat_milk_bucket", "meadow:goat_cheese_block"],
    ["meadow:wooden_warped_milk_bucket", "meadow:warped_cheese_block"],
    ["meadow:wooden_grain_milk_bucket", "meadow:grain_cheese_block"],
    ["meadow:wooden_amethyst_milk_bucket", "meadow:amethyst_cheese_block"],
  ];
  for (const [bucket, cheese_block] of cheese_recipes) {
    let recipe = {
      type: "create:compacting",
      heatRequirement: "heated",
      ingredients: [
        {
          item: bucket,
        },
        {
          item: "meadow:rennet",
        },
      ],
      results: [
        {
          item: cheese_block,
        },
        {
          item: "meadow:wooden_bucket",
        },
        {
          item: "minecraft:glass_bottle",
        },
      ],
    };

    cheese_forming.custom(recipe);
    Debug.console(
      `Adding ${recipe.type} recipe for: ${recipe.results[0].item}`
    );
  }
  Debug.printEnd();
});
