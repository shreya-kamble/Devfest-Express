const { spawnSync } = require("child_process");
const { resolve } = require("path");

module.exports = async function updateGitRepo(executingCmd, projectName,rootPath) {
  console.log("Update Git repo", projectName);

  process.chdir(`${rootPath}/${projectName}`);
  console.log("Check directory", process.cwd());

  
  const s1 = spawnSync("git", ["init"]);
  const s2 =spawnSync("git", ["add", "."]);
  // const s0 =spawnSync(`git`, [`status`]);
  const s3 =spawnSync(`git`, [`commit`,"-m","initial commit check"]);
  const s4 =spawnSync(`git`, [`branch`, "-M", "main"]);
  const s5 =spawnSync(`git`, [
            "remote",
            `add`,
            "origin1",
            `https://github.com/shreya-kamble/${projectName}.git`,
          ]);
  const s6 =spawnSync(`git`, [`push`, "-u", "origin1", "main"]);

  console.log(s1.status,s2.status,
    s3.status,s4.status,s5.status,s6.status
    )
  console.log(s5)
  console.log(s5.stdout.toString())
  console.log(s5.stderr.toString())

return;

  // return new Promise((resolve, reject) => {
  //   let child;

  //   child = spawnSync(`git`, [`init`]);
  //   // child.on("data", (data) => {
  //   //   console.log(`Executing INIT:\n${data}`);
  //   // });

  //   // child.on("error", async (error) => {
  //   //   console.log(`Error in INIT`, error);
  //   // });

  //   // child.on("exit", async (code) => {
  //   //   console.log(`Exiting INIT`, code);
  //   //   resolve()
  //   // });

  //   // child.on("close", (code) => {
  //   //   console.log(`Closing INIT`, code);
  //   //   resolve()
  //   // });
  //   console.log(child.stdout)
  //   console.log("git init")
  //   resolve();
  // })
  //   .then(
  //     new Promise((resolve, reject) => {
  //       let child;

  //       child = spawnSync(`git`, [`add`, "."]);
  //       // child.on("data", (data) => {
  //       //   console.log(`Executing git ADD:\n${data}`);
  //       //   resolve()
  //       // });

  //       // child.on("error", async (error) => {
  //       //   console.log(`Error in ADD`, error);
  //       // });

  //       // child.on("exit", async (code) => {
  //       //   console.log(`Exiting ADD`, code);
  //       // });

  //       // child.on("close", (code) => {
  //       //   console.log(`Closing ADD`, code);
  //       //   resolve()
  //       // });
  //       console.log(child.stdout)
  //       console.log("git add")
  //       resolve();
  //     })
  //   )
  //   .then(
  //     new Promise((resolve, reject) => {
  //       let child;

  //       child = spawnSync(`git`, [`commit`, "-m", "'Initial Commit'"]);
  //       // child.on("data", (data) => {
  //       //   console.log(`Executing git COMMIT:\n${data}`);
  //       // });

  //       // child.on("error", async (error) => {
  //       //   console.log(`Error in COMMIT`, error);
  //       // });

  //       // child.on("exit", async (code) => {
  //       //   console.log(`Exiting COMMIT`, code);
        
  //       // });

  //       // child.on("close", (code) => {
  //       //   console.log(`Closing COMMIT`, code);
  //       //   resolve()
  //       // });
  //       console.log(child.stdout)
  //       console.log("git Commit")
  //       resolve();
  //     })
  //   )
  //   .then(
  //     new Promise((resolve, reject) => {
  //       let child;

  //       child = spawnSync(`git`, [`branch`, "-M", "main"]);
  //       // child.on("data", (data) => {
  //       //   console.log(`Executing git Branch:\n${data}`);
  //       // });

  //       // child.on("error", async (error) => {
  //       //   console.log(`Error in Branch`, error);
  //       // });

  //       // child.on("exit", async (code) => {
  //       //   console.log(`Exiting Branch`, code);
  //       //   resolve()
  //       // });

  //       // child.on("close", (code) => {
  //       //   console.log(`Closing Branch`, code);
  //       //   resolve()
  //       // });
  //       console.log(child.stdout)
  //       console.log("git branch")
  //       resolve();
  //     })
  //   )
  //   .then(
  //     new Promise((resolve, reject) => {
  //       let child;
  //       child = spawnSync(`git`, [
  //         "remote",
  //         `add`,
  //         "origin",
  //         `https://github.com/shreya-kamble/${projectName}.git`,
  //       ]);
  //       // child.on("data", (data) => {
  //       //   console.log(`Executing git REMOTE ADD:\n${data}`);
  //       // });

  //       // child.on("error", async (error) => {
  //       //   console.log(`Error in REMOTE ADD`, error);
  //       // });

  //       // child.on("exit", async (code) => {
  //       //   console.log(`Exiting REMOTE ADD`, code);
  //       //   resolve()
  //       // });

  //       // child.on("close", (code) => {
  //       //   console.log(`Closing REMOTE ADD`, code);
  //       //   resolve()
  //       // });
  //       console.log(child.stdout)
  //       console.log("git remote add")
  //       resolve();
  //     })
  //   )
  //   .then(
  //     new Promise((resolve, reject) => {
  //       let child;

  //       child = spawnSync(`git`, [`push`, "-u", "origin", "main"]);
  //       // child.on("data", (data) => {
  //       //   console.log(`Executing git PUSH:\n${data}`);
  //       // });

  //       // child.on("error", async (error) => {
  //       //   console.log(`Error in PUSH`, error);
  //       // });

  //       // child.on("exit", async (code) => {
  //       //   console.log(`Exiting PUSH`, code);
  //       //   resolve()
  //       // });

  //       // child.on("close", (code) => {
  //       //   console.log(`Closing PUSH`, code);
  //       //   resolve();
  //       // });
  //       console.log(child.stdout)
  //       console.log("git push -u")
  //       resolve();
       
  //     })
  //   );
};
