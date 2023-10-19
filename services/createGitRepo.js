const {Octokit} = require("octokit");

module.exports = async function createGitRepo(projectName){

    const octokit = new Octokit({
        auth: process.env.GIT_TOKEN
      })


await octokit.request('POST /repos/{owner}/{repo}/git/blobs', {
    owner: 'shreya-kamble',
    repo: `${projectName}`,
    content: 'Content of the blob',
    encoding: 'utf-8',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
    .then((res)=>{
        console.log("RES:",res);
      })
    .catch(err => console.log("RES ERR:",err))


}