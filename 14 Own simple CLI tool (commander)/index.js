#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();

const greetCommand = require("./commands/greet");
const mathCommand = require("./commands/math");

program
    .name("mycli")
    .description("Basit CLI Aracı")
    .version("1.0.0");

greetCommand(program);
mathCommand(program);

program.parse(process.argv);