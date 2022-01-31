//Run database migrations
const DB = require("better-sqlite3-helper");

DB({ migrate: { force: "last" } }).connection(); //Force creating the database + running migrations
let migrations = DB().query("select id, name from migrations");
console.log("Database created. Migrations applied: ");
console.table(migrations);
