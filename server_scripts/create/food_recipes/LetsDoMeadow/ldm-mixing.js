ServerEvents.recipes((meadow_others) => {
  let SCRIPTNAME = "ldm-mixing.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();

  meadow_others.custom({
    type: "create:mixing",
    ingredients: [
      {
        tag: "c:eggs",
        count: 1,
      },
      {
        tag: "meadow:salt",
        amount: 1,
      },
      {
        fluid: "minecraft:water",
        amount: 20250,
      },
      {
        item: "minecraft:glass_bottle",
        count: 2,
      },
    ],
    results: [
      {
        item: "meadow:rennet",
        count: 2,
      },
    ],
    heatRequirement: "heated",
  });
  Debug.console("Added create:mixing recipe for meadow:rennet");

  Debug.printEnd();
});
