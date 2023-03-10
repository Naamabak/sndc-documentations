const getIndexName = function () {
  const siteID = "8b6916da-a2c8-406b-ab0c-b20eb85b8085";
  const build = "netlify";
  return `${build}_${siteID}_${process.env.HEAD}_all`;
};

exports.getIndexName = getIndexName;
