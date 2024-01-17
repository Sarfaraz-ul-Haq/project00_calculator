#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

//function to display calculator title and image
const showCalcTitleAndImage = () => {
  showBanner(
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
    "green", "gray"
  );
};
showCalcTitleAndImage();

//calculator function
const calculator = () => {
  const answers = inquirer
    .prompt([
      {
        name: "operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: chalk.bgGray("Choose any operation"),
      },
      {
        name: "num1",
        type: "number",
        message: chalk.green("Enter first number"),
      },
      {
        name: "num2",
        type: "number",
        message: chalk.green("Enter second number"),
      },
    ])
    .then((answers) => {
      if (answers.operation == "Addition") {
        console.log(
          chalk.greenBright(
            `First number + second number = ${answers.num1 + answers.num2}`
          )
        );
      } else if (answers.operation == "Subtraction") {
        console.log(
          chalk.greenBright(
            `First number - second number = ${answers.num1 - answers.num2}`
          )
        );
      } else if (answers.operation == "Multiplication") {
        console.log(
          chalk.greenBright(
            `First number * second number = ${answers.num1 * answers.num2}`
          )
        );
      } else {
        console.log(
          chalk.greenBright(
            `First number / second number = ${answers.num1 / answers.num2}`
          )
        );
      }
    });
};
setTimeout(calculator, 1000); //used setTimeout function because inquirer was prompting before displaying the calculator