const { join } = require("path");
const { writeFileSync } = require("fs");
const folder = join(__dirname, "..", "build_static");
const file = join(folder, "__version__.json");
module.exports.inject = function () {
  writeFileSync(file, JSON.stringify({ ts: +new Date() }));
};
