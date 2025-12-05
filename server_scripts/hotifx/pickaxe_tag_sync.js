ServerEvents.tags('item', event => {
  event.add('c:pickaxes', '#minecraft:pickaxes');

  console.info("KubeJS: Synchronized 'minecraft:pickaxes' to 'c:pickaxes'.");
});