ServerEvents.tags('item', event => {
  const obsidianTools = [
    'obsidianequipment:obsidian_sword',
    'obsidianequipment:obsidian_axe',
    'obsidianequipment:obsidian_shovel',
    'obsidianequipment:obsidian_pickaxe',
    'obsidianequipment:obsidian_hoe'
  ];

  const obsidianArmor = [
    'obsidianequipment:obsidian_helmet',
    'obsidianequipment:obsidian_chestplate',
    'obsidianequipment:obsidian_leggings',
    'obsidianequipment:obsidian_boots'
  ];

  const allObsidianEquipment = obsidianTools.concat(obsidianArmor).concat(['obsidianequipment:obsidian_horse_armor']);

  const toolTags = [
    'minecraft:tools',
    'c:tools',
    'amendments:goes_in_tripwire_hook',
    'incendium:tools_armor'
  ];

  toolTags.forEach(tag => {
    event.add(tag, obsidianTools);
  });

  event.add('c:axes', 'obsidianequipment:obsidian_axe');
  event.add('minecraft:axes', 'obsidianequipment:obsidian_axe');

  event.add('c:swords', 'obsidianequipment:obsidian_sword');
  event.add('minecraft:swords', 'obsidianequipment:obsidian_sword');

  event.add('c:shovels', 'obsidianequipment:obsidian_shovel');
  event.add('minecraft:shovels', 'obsidianequipment:obsidian_shovel');

  event.add('c:pickaxes', 'obsidianequipment:obsidian_pickaxe');
  event.add('minecraft:pickaxes', 'obsidianequipment:obsidian_pickaxe');
  event.add('cluster_max_harvestables', 'obsidianequipment:obsidian_pickaxe');

  event.add('c:hoes', 'obsidianequipment:obsidian_hoe');
  event.add('minecraft:hoes', 'obsidianequipment:obsidian_hoe');

  const armorPieceTags = [
    'c:armor',
    'c:armors',
    'bookshelf:armor',
    'incendium:tools_armor', 
    'minecraft:trimmable_armor'
  ];

  armorPieceTags.forEach(tag => {
    event.add(tag, obsidianArmor);
  });
  
  event.add('c:helmets', 'obsidianequipment:obsidian_helmet');
  event.add('bookshelf:helmets', 'obsidianequipment:obsidian_helmet');

  event.add('c:chestplates', 'obsidianequipment:obsidian_chestplate');
  event.add('bookshelf:chestplates', 'obsidianequipment:obsidian_chestplate');

  event.add('c:leggings', 'obsidianequipment:obsidian_leggings');
  event.add('bookshelf:leggings', 'obsidianequipment:obsidian_leggings');

  event.add('c:boots', 'obsidianequipment:obsidian_boots');
  event.add('bookshelf:boots', 'obsidianequipment:obsidian_boots');

  event.add('ps-keep:all', allObsidianEquipment);

  console.info('KubeJS: Finished tagging obsidianequipment items.');
});
