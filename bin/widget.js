#!/usr/bin/env node --unhandled-rejections=strict

//CLI program to add/remove Widgets (can be called directly, but is meant to be called via ../starter.js)

const program = require("commander");
const path = require("path");
const debug = require("debug")(path.basename(__filename));
const widgetRepo = require("../models/WidgetRepo");

const { version, description } = require("../package.json");
program.version(version);
program.description(`${description} v${version}`);
program
  .command("add <widgetName>")
  .description("Add Widget with supplied name")
  .action(add);
program
  .command("rm <widgetName>")
  .description("Remove widget with supplied name")
  .action(rm);

program.command("ls").description("Show widgets").action(ls);

program.parse();

/**
 * Add a new Widget
 */
function add(widgetName, options) {
  let ret = widgetRepo.insert({ name: widgetName });
  console.log(`Inserted record.`, ret);
}

/**
 * Display a list of all widgets
 */
function ls() {
  console.log(widgetRepo.find());
}

/**
 * Rmeove a widget by name (assume unique index on name, does not check)
 */
function rm(name, options) {
  let ret = widgetRepo.delete({ name });
  console.log(`Deleted record.`, ret);
}
