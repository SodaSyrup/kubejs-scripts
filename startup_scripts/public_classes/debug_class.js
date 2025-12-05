global.Logger = {
  constructor(scriptname) {
    this.scriptname = scriptname;
  },
  SEPARATOR: "=====================================================",
  printStart() {
    console.log(this.SEPARATOR);
    console.log(
      "          STARTING CALL: " + this.scriptname + "                  "
    );
    console.log(this.SEPARATOR);
  },
  console(msg) {
    console.log(msg);
  },
  printEnd() {
    console.log(this.SEPARATOR);
    console.log(
      "            ENDING CALL: " + this.scriptname + "                  "
    );
    console.log(this.SEPARATOR);
  },
};
