#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { add, subtract, multiply, divide } from "./functions.js";

//function to display calculator title and image
const displayCalcTitleAndImage = async () => {
  await showBanner(
    "Calculator",
    `Simple Command Line Calculator written in TypeScript & Node.js
     _____________________
    |  _________________  |
    | |            0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `,
    "green",
    "gray"
  );
};

// calculator function
const calculator = async () => {
  const { operation, num1, num2 } = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
      message: chalk.green("\nChoose any operation"),
    },
    {
      name: "num1",
      type: "number",
      message: chalk.gray("\nEnter first number:"),
    },
    {
      name: "num2",
      type: "number",
      message: chalk.gray("\nEnter second number:\n"),
    },
  ]);
  if (operation == "Addition") {
    console.log(chalk.green(add(num1, num2)));
  } else if (operation == "subtraction") {
    console.log(chalk.green(subtract(num1, num2)));
  } else if (operation == "multiplication") {
    console.log(chalk.green(multiply(num1, num2)));
  } else {
    console.log(chalk.green(divide(num1, num2)));
  }
};

await displayCalcTitleAndImage();
calculator();
