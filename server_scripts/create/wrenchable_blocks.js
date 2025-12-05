ServerEvents.tags('block', event => {
    const wrenchable = 'create:wrench_pickup';
    
    //by modID
    event.add(wrenchable, '@toms_storage');
    event.add(wrenchable, '@storagedrawers');
    event.add(wrenchable, '@wirelessredstone');
    
    //by list of tag
    
    //by individual tag
    event.add(wrenchable, 'spelunkery:compression_blast_miner');
    
    event.add(wrenchable, 'spelunkery:wooden_channel');
    event.add(wrenchable, 'spelunkery:stone_channel');
    event.add(wrenchable, 'spelunkery:wooden_sluice');
    event.add(wrenchable, 'spelunkery:stone_sluice');
    
    console.info('KubeJS: Finished wrenchable block tag processing.');
});