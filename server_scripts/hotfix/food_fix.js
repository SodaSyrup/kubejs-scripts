ServerEvents.tags('item', event => {
  event.add('c:crops/tomato', 'farm_and_charm:tomato');
  event.add('c:crops/hops', ['clutter:hops', 'alcocraftplus:hop']);
  event.add('c:tomato', ['farmersdelight:tomato', 'farm_and_charm:tomato']);
  event.add('c:eggs', ['duckling:duck_egg', 'clutter:kiwi_bird_egg', 'clutter:emperor_penguin_egg']);
  event.add('c:crops', '#forge:crops');

  event.add('c:crops', '#minecraft:crops');
  
  event.add('forge:crops', '#c:crops');

  event.add('minecraft:crops', '#c:crops');

  console.info('KubeJS: Finished food item and crop tag processing.');
});