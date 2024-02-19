import chalk from "chalk";
import { createSpinner } from "nanospinner";

// sleep promise that resolves in 3 seconds
export const sleep = async (): Promise<void> => {
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
