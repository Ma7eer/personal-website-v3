import Polyglot from "node-polyglot";
// const Polyglot = require("node-polyglot");

var polyglot = new Polyglot();

polyglot.extend({
  Hello: "مرحبا"
});

console.log(polyglot.t("Hello"));
