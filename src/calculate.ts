import inquirer from "inquirer";
import chalk from "chalk";
import { add, subtract, multiply, divide } from "./functions.js";
import { continueOrQuit } from "./continueOrQuit.js";

// calculator function
export const calculate = async () => {
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
