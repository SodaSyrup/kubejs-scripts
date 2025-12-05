ServerEvents.tags('block', event => {

    const icbarrels = [
        'ironchests:copper_barrel', 
        'ironchests:iron_barrel',
        'ironchests:gold_barrel',
        'ironchests:diamond_barrel',
        'ironchests:netherite_barrel',
        'ironchests:crystal_barrel',
        'ironchests:obsidian_barrel'
    ];

    const barrel_tag = 'ironchests:barrels';
    const mineable_tag = 'minecraft:mineable/pickaxe';

    event.add(barrel_tag, icbarrels);
    event.add(mineable_tag, icbarrels);
});