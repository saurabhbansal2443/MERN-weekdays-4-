// import {sum , sub , mult , div } from "./Math.js";
// import areaBox from "./Math.js"

// console.log(areaBox(9));

// import chalk from "chalk";

// console.log(chalk.red('Hello world!'));

import figlet from "figlet";

figlet("Saurabh", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
