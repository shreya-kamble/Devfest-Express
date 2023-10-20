const { spawn } = require("child_process");
const fs = require("fs");

module.exports = async function cloneProject(rootPath, application_id) {
  return new Promise(async (resolve, reject) => {
    await fs.mkdir(`${rootPath}/${application_id}`, (err) => {
      console.log("Error creating new directory", err);
      resolve()
    });
   
  });
};
