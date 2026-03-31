import { run } from "../services/hack.js";

/* Irrelevant code to the attack, just to make it look like a normal file. */

(() => {
  // This attack vector is meant to be run automatically when the file is loaded, without the user having to click anything.
  // In a real attack, the vector name would be something more innocuous, and the file would be named something that looks like it belongs in the project.
  run("hidden-auto-run-example");
})();

/* Irrelevant code to the attack, just to make it look like a normal file. */
