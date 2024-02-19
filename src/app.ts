#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { add, subtract, multiply, divide } from "./functions.js";
import { createSpinner } from "nanospinner";

//function to display calculator title and image
const displayCalcTitleAndImage = async () => {
  await showBanner(
    `   Calculator`,
    ` Simple Command Line Calculator written in TypeScript & Node.js
  ______________________________________________________________

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
      message: chalk.gray("Enter first number:"),
      validate: (num) => {
        if (isNaN(num)) {
          return "Please press up key and enter a number: ";
        }
        return true;
      },
    },
    {
      name: "num2",
      type: "number",
      message: chalk.gray("Enter second number:"),
      validate: (num) => {
        if (isNaN(num)) {
          return "Please press up key and enter a number: ";
        }
        return true;
      },
    },
  ]);
  if (operation == "Addition") {
    console.log(
      chalk.red(
        `Sum of first and second number is: ${chalk.green(add(num1, num2))}`
      )
    );
  } else if (operation == "Subtraction") {
    console.log(
      chalk.red(
        `Difference of first and second number is: ${chalk.green(
          subtract(num1, num2)
        )}`
      )
    );
  } else if (operation == "Multiplication") {
    console.log(
      chalk.red(
        `Product of first and second number is: ${chalk.green(
          multiply(num1, num2)
        )}`
      )
    );
  } else {
    console.log(
      chalk.red(
        `Quotient of first and second number is: ${chalk.green(
          divide(num1, num2)
        )}`
      )
    );
  }

  continueOrQuit();
};

// function to prompt user to continue calculation or exit
const continueOrQuit = async () => {
  const continueOrNot = await inquirer.prompt({
    name: "answer",
    type: "list",
    choices: ["Yes", "No"],
    message: chalk.green("\nDo you want to use calculator again?"),
  });
  if (continueOrNot.answer == "Yes") {
    calculator();
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

// sleep promise that resolves in 3 seconds
const sleep = async (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
};

// function that animates a spinner with a message for 3 seconds
export const startCalculator = async () => {
  const spinner = createSpinner(chalk.green(` Starting CLI Calculator`));
  spinner.start();
  await sleep();
  spinner.stop();
};

await startCalculator();
await displayCalcTitleAndImage();
calculator();
