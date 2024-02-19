import showBanner from "node-banner";

//function to display calculator title and image
export const displayCalcTitleAndImage = async () => {
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
