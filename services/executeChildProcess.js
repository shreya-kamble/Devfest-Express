const {spawn} = require("child_process");

module.exports = async function executeChildProcess(executingCmd,projectName) {
    console.log("EXECUTING CMD",executingCmd)
 return new Promise((resolve, reject) => {
    let child;
    if(executingCmd = `createReactApp`){
        // child = spawn(`npx`,[`create-react-app`, `test`]);
        
        // child = spawn(`npx`,[`create-next-app@latest`, `testing`, `--js`, `--src-dir`, `--no-use-npm`, `--eslint`, `--tailwind`, `--app`, `--no-import-alias`]);

        child = spawn(`npx`,[`create-next-app@12`, `${projectName}`, `--js`, `--src-dir`, `--no-use-npm`, `--eslint`, `--tailwind`, `--app`]);

    }
    else if(executingCmd = `gitInit`){
        child = spawn(`git`,[`init`, `testing`]);
    }
  

    child.stdout.on('data', (data) => {
      console.log(`Executing ${executingCmd}:\n${data}`);
    });

    child.on("error",async(error) => {
        console.log(`Error in ${executingCmd}`,error);
      })
    
    child.on("exit",async(code)=>{
        console.log(`Exiting ${executingCmd}`,code);
      })

    child.on("close",(code)=>{
        console.log(`Closing ${executingCmd}`,code);
      })
 })

}