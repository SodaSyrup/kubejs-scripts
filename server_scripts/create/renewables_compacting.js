ServerEvents.recipes((compacting) => {
  compacting.custom({
    type: "create:compacting",
    ingredients: [
      {
        item: "minecraft:stone",
      },
      {
        item: "minecraft:stone",
      },
      {
        item: "minecraft:coal",
      },
    ],
    results: [
      {
        item: "minecraft:coal_ore",
        count: 2,
      },
    ],
  });
  compacting.custom({
    type: "create:compacting",
    heatRequirement: "superheated",
    ingredients: [
      {
        item: "minecraft:coal_block",
      },
      {
        item: "minecraft:coal_block",
      },
      {
        item: "minecraft:coal_block",
      },
      {
        item: "minecraft:coal_block",
      },
      {
        item: "minecraft:coal_block",
      },
      {
        item: "minecraft:coal_block",
      },
      {
        item: "minecraft:coal_block",
      },
      {
        item: "minecraft:coal_block",
      },
      {
        item: "minecraft:coal_block",
      },
    ],
    results: [
      {
        item: "minecraft:diamond",
        count: 1,
      },
    ],
  });
});
