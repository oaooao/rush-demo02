#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const child_process = require("child_process");
console.log('Invoking my-toolchain...');
child_process.execSync('tsc', { stdio: 'inherit' });
console.log(colors.green('Success!'));
//# sourceMappingURL=start.js.map