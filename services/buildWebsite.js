const { spawn } = require("child_process");

module.exports = async function buildWebsite(rootPath,application_id){
    return new Promise(async (resolve, reject) => {
        
        await process.chdir(`${rootPath}/${application_id}/nextjs-framework-cs`);
        let child;
    
        child = spawn(`npm`, [`run`,`build`]);
        child.stdout.on("data", (data) => {
          console.log(`Executing npm build:\n${data}`);
        });
    
        child.on("error", async (error) => {
          console.log(`Error in npm build`, error);
        });
    
        child.on("exit", async (code) => {
          console.log(`Exiting npm build`, code);
        });
    
        child.on("close", (code) => {
          console.log(`Closing npm build`, code);
          resolve();
        });
    
       
      });
}
// module.exports = async function installWebsite(application_id){
//     console.log("NPM I")
//   return new Promise(async(resolve, reject) => {
//     await process.chdir(`${rootPath}/${application_id}/nextjs-framework-cs`);
//     let child;
// ​
//     child = spawn(`npm`, [
//       `i`,
//     ]);
//     child.stdout.on("data", (data) => {
//       console.log(`Executing npm i:\n${data}`);
//     });
// ​
//     child.on("error", async (error) => {
//       console.log(`Error in npm i`, error);
//     });
// ​
//     child.on("exit", async (code) => {
//       console.log(`Exiting npm i`, code);
//     });
// ​
//     child.on("close", (code) => {
//       console.log(`Closing npm i`, code);
//     });
// ​
//     resolve();
// })
// ​
// }