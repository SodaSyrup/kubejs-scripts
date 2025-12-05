ServerEvents.tags("item", (fuels) => {
  let SCRIPTNAME = "server_fuels.js";
  let Debug = global.Logger;

  Debug.constructor(SCRIPTNAME);
  Debug.printStart();
  fuels.add("create:blaze_burner_fuel/normal", "spelunkery:saltpeter_block");
  fuels.add("create:blaze_burner_fuel/normal", "spelunkery:sulfur_block");
  Debug.console(
    `Added create:blaze_burner_fuel/normal tag to saltpeter and sulfur blocks`
  );
  Debug.printEnd();
});
