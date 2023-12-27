import inquirer from "inquirer";
import chalk from "chalk";

let { num1, num2, operation } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter first number"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter second number"
    },
    {
        name: "operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: "Choose any operation"
    }
]);

if (operation === "addition") {
    console.log(chalk.green(`num1 + num2 = ${num1 + num2}`));

} else if (operation === "subtraction") {
    console.log(chalk.green(`num1 + num2 = ${num1 - num2}`));

} else if (operation === "multiplication") {
    console.log(chalk.green(`num1 + num2 = ${num1 * num2}`))
} else {
    console.log(chalk.green(`num1 + num2 = ${num1 / num2}`));
}







