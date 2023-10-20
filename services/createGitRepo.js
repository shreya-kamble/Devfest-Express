const { Octokit } = require("octokit");

module.exports = async function createGitRepo(projectName,rootPath) {

  return new Promise(async(resolve, reject) => {
    const octokit = new Octokit({
      // auth:'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',
      auth:'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'
    });

    await octokit.request('POST /user/repos', {
    name: `${projectName}test2`,
    description: 'This is your first repo!',
    homepage: 'https://github.com',
    'private': false,
    is_template: true,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
      .then((res) => {
        console.log("RES:", res.status);
        resolve(res);
      })
      .catch((err) => console.log("RES ERR:", err));
  })

};
