ItemEvents.modification((fuels) => {
  let SCRIPTNAME = "startup_fuels.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();
  fuels.modify("create:blaze_cake", (blazecake) => {
    Debug.console(`${blazecake} burntime is: ${blazecake.burnTime}`);
    fuels.modify("spelunkery:saltpeter_block", (item) => {
      item.burnTime = blazecake.burnTime / 8;
      Debug.console(`${item} burntime is: ${item.burnTime}`);
    });
    fuels.modify("spelunkery:sulfur_block", (item) => {
      item.burnTime = blazecake.burnTime / 8;
      Debug.console(`${item} burntime is: ${item.burnTime}`);
    });
  });
  Debug.printEnd();
});
