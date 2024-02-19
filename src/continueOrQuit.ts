import inquirer from "inquirer";
import chalk from "chalk";
import { calculate } from "./calculate.js";
import showBanner from "node-banner";

// function to prompt user to continue calculation or exit
export const continueOrQuit = async () => {
  const continueOrNot = await inquirer.prompt({
    name: "answer",
    type: "list",
    choices: ["Yes", "No"],
    message: chalk.green("\nDo you want to use calculator again?"),
  });
  if (continueOrNot.answer == "Yes") {
    calculate();
  } else {
    console.clear();
    showBanner(
      `Thanks for trying !`,
      `  ____________________________________________________________________________________`,
      "green",
      "gray"
    );
  }
};
