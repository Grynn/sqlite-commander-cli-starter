#!/usr/bin/env node --unhandled-rejections=strict

//Use commander to create sub-commands (think routes in a webapp)
//starter <command> [arguments] --options

const program = require("commander");
const path = require("path");
const debug = require("debug")(path.basename(__filename));

const { version, description } = require("./package.json");

program.version(version);
program.description(`${description} v${version}`);
program.command("widget", "Manage Widgets", { executableFile: "./bin/widget.js" });
program.command("migrate", "Run migrations", { executableFile: "./bin/migrate.js" });

debug("About to parse CLI");
program.parse();


