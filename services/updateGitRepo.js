const { spawn } = require("child_process");
const { resolve } = require("path");

module.exports = async function updateGitRepo(executingCmd, projectName) {
  console.log("Update Git repo");

  process.chdir(`${projectName}`);
  console.log("Check directory", process.cwd());

  return new Promise((resolve, reject) => {
    let child;

    child = spawn(`git`, [`init`]);
    child.stdout.on("data", (data) => {
      console.log(`Executing ${executingCmd}:\n${data}`);
    });

    child.on("error", async (error) => {
      console.log(`Error in ${executingCmd}`, error);
    });

    child.on("exit", async (code) => {
      console.log(`Exiting ${executingCmd}`, code);
    });

    child.on("close", (code) => {
      console.log(`Closing ${executingCmd}`, code);
    });
  })
    .then(
      new Promise((resolve, reject) => {
        let child;

        child = spawn(`git`, [`add`, "."]);
        child.stdout.on("data", (data) => {
          console.log(`Executing git ADD:\n${data}`);
        });

        child.on("error", async (error) => {
          console.log(`Error in ADD`, error);
        });

        child.on("exit", async (code) => {
          console.log(`Exiting ADD`, code);
        });

        child.on("close", (code) => {
          console.log(`Closing ADD`, code);
        });
      })
    )
    .then(
      new Promise((resolve, reject) => {
        let child;

        child = spawn(`git`, [`commit`, "-m", "Testing spawn"]);
        child.stdout.on("data", (data) => {
          console.log(`Executing git COMMIT:\n${data}`);
        });

        child.on("error", async (error) => {
          console.log(`Error in COMMIT`, error);
        });

        child.on("exit", async (code) => {
          console.log(`Exiting COMMIT`, code);
        });

        child.on("close", (code) => {
          console.log(`Closing COMMIT`, code);
        });
      })
    )
    .then(
      new Promise((resolve, reject) => {
        let child;

        child = spawn(`git`, [`branch`, "-M", "main"]);
        child.stdout.on("data", (data) => {
          console.log(`Executing git COMMIT:\n${data}`);
        });

        child.on("error", async (error) => {
          console.log(`Error in COMMIT`, error);
        });

        child.on("exit", async (code) => {
          console.log(`Exiting COMMIT`, code);
        });

        child.on("close", (code) => {
          console.log(`Closing COMMIT`, code);
        });
      })
    )
    .then(
      new Promise((resolve, reject) => {
        let child;

        child = spawn(`git`, [
          "remote",
          `add`,
          "origin",
          "https://github.com/shreya-kamble/Hello-World.git",
        ]);
        child.stdout.on("data", (data) => {
          console.log(`Executing git REMOTE ADD:\n${data}`);
        });

        child.on("error", async (error) => {
          console.log(`Error in REMOTE ADD`, error);
        });

        child.on("exit", async (code) => {
          console.log(`Exiting REMOTE ADD`, code);
        });

        child.on("close", (code) => {
          console.log(`Closing REMOTE ADD`, code);
        });
      })
    )
    .then(
      new Promise((resolve, reject) => {
        let child;

        child = spawn(`git`, [`push`, "-u", "origin", "main"]);
        child.stdout.on("data", (data) => {
          console.log(`Executing git PUSH:\n${data}`);
        });

        child.on("error", async (error) => {
          console.log(`Error in PUSH`, error);
        });

        child.on("exit", async (code) => {
          console.log(`Exiting PUSH`, code);
        });

        child.on("close", (code) => {
          console.log(`Closing PUSH`, code);
        });

        resolve();
      })
    );
};
