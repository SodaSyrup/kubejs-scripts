ServerEvents.tags('fluid', event => {
    const fluids = [
      'spelunkery:portal_fluid',
      'spelunkery:spring_water',
      'create:honey',
      'create:chocolate'
    ];

    event.add('create:bottomless/allow', fluids);

    console.info('KubeJS: Finished bottomless fluids tag processing.');
});