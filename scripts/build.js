/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs-extra");
const { execSync } = require("child_process");
const path = require("path");
const packageJson = require("../package.json");

const DIST_DIR = "dist";

const renameLibFile = () => {
  const file = packageJson.name.split("/")[1] + ".js";
  const filePath = path.resolve(DIST_DIR, file);
  fs.copySync(
    path.resolve(DIST_DIR, filePath),
    path.resolve(DIST_DIR, "index.js"),
    {}
  );
  fs.removeSync(path.resolve(DIST_DIR, filePath));
};

const copyFiles = (files) => {
  if (files) {
    files.forEach((file) => {
      const originPath = path.resolve(file);
      const distPath = path.resolve(DIST_DIR, file);
      fs.copySync(originPath, distPath, {});
    });
  }
};

const runScript = (files) => {
  execSync("npm run prebuild");
  renameLibFile();
  copyFiles(files);
};

runScript(["index.d.ts"]);
