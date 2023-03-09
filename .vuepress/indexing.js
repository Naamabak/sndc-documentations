const getIndexName = function () {
  const branchName = require("current-git-branch");
  const siteID = "8b6916da-a2c8-406b-ab0c-b20eb85b8085";
  const build = "netlify";
  return `${build}_${siteID}_${branchName()}_all`;
};

exports.getIndexName = getIndexName;
