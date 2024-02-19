#!/usr/bin/env node

import { startCalculator } from "./startingCalculator.js";
import { displayCalcTitleAndImage } from "./titleAndImage.js";
import { calculate } from "./calculate.js";

await startCalculator();
await displayCalcTitleAndImage();
calculate();
