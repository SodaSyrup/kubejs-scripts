ServerEvents.tags('block', event => {
  event.add('c:ores', '#forge:ores');

  let moddedOresFound = 0;
  Ingredient.all.stacks.forEach(itemStack => {
    const id = itemStack.id;
    if ( (id.includes(':ore') || id.includes('_ore') || id.includes('ores/'))) {
      const block = Block.getBlock(id); 
      if (block && block.id !== 'minecraft:air') { 
          const isAlreadyTagged = event.get('c:ores').getObjectIds().contains(id) || event.get('forge:ores').getObjectIds().contains(id);
          if (!isAlreadyTagged) {
            event.add('c:ores', id);
            moddedOresFound++;
          }
      }
    }
  });
  
  if (moddedOresFound > 0) {
    console.info(`KubeJS: Added ${moddedOresFound} additional modded ore(s) to c:ores based on ID patterns.`);
  } else {
    console.info('KubeJS: No additional modded ores found by ID pattern matching, or they were already covered by #forge:ores.');
  }
});
