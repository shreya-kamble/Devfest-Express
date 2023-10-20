const { spawn } = require("child_process");
const fs = require("fs");

module.exports = async function cloneProject(rootPath, application_id) {
  return new Promise(async (resolve, reject) => {
    await fs.mkdir(`${rootPath}/${application_id}`, (err) => {
      console.log("Error creating new directory", err);
    });

    await process.chdir(`${rootPath}/${application_id}`);
    let child;

    child = spawn(`git`, [`clone`, "https://github.com/vivekcontentstack/nextjs-framework-cs"]);
    child.stdout.on("data", (data) => {
      console.log(`Executing git clone:\n${data}`);
    });

    child.on("error", async (error) => {
      console.log(`Error in git clone`, error);
    });

    child.on("exit", async (code) => {
      console.log(`Exiting git clone`, code);
    });

    child.on("close", (code) => {
      console.log(`Closing git clone`, code);
      resolve();
    });

   
  });
};
