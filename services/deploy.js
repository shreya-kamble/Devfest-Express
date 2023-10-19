const checkDeployStatus = require("./checkDeployStatus");
const cloneProject = require("./cloneProject");
const copyDirectory = require("./copyDirectory");
const createCT = require("./createCT");
const createEntry = require("./createEntry");
const createLaunchProject = require("./createLaunchProject");
const createUniqueLaunchLink = require("./createLaunchUniqueLink");
const createZip = require("./createZip");
const executeChildProcess = require("./executeChildProcess");
const updateEnv = require("./updateEnv");
const updateGitRepo = require("./updateGitRepo");
const uploadZip = require("./uploadZipToLaunch");

module.exports = async function deploy(data, rootPath){

    const structureEnvVariables = (envVar) => {
        const MATCH_EMPTY_STRING_REGEX = /"(\w+)"\s*:/g;
        return JSON.stringify(
        envVar
        ?.filter((envVar) => envVar.key && envVar.value)
        .map((envVar) => {
        return { key: envVar.key, value: envVar.value };
        })
        ).replace(MATCH_EMPTY_STRING_REGEX, "$1:");
        };
   let {api_key,management_token,content_type,entry,application_id,org_uid,authToken}=data
    //create content type in CS stack
     // await createCT(api_key,management_token,content_types);
 
     //create Entry in CS stack
     // await createEntry(api_key,management_token,entry);

  //create reactapp
    //  await executeChildProcess('createReactApp',application_id);
    // await executeChildProcess('gitInit',"TEST");
     // await executeChildProcess('gitInit',application_id);
 
     //create a git repo
     // await createGitRepo(application_id);
 
    //  // update git repo with nextjsfolder
    //  await updateGitRepo('UPDATE',application_id);

     // const sourceDir = './${application_id}';
  // const outputFilePath = `./tmp1/${application_id}.zip`;

    //create zip of the website project folder
    //   await createZip(source,dest)
    // .then((outputFilePath) => {
        //     console.log(`Zip file created at`);
        //   })
        //   .catch((err) => {
        //     console.error('Error zipping directory:', err);
        //   });
 
    //create unique link to upload zip
    // const signedUploadData =  await createUniqueLaunchLink()
    // launchUploadUid = signedUploadData?.uploadUid;
    // launchUploadUrl = signedUploadData?.uploadUrl;
    // launchUploadFields = signedUploadData?.fields;

     //upload zi[]\p
     //await uploadZip(__dirname,launchUploadUrl,launchUploadFields)

     //create Launch project
    // const projectDetails= await createLaunchProject(authToken,management_token,delivery_token,api_key,org_uid,launchUploadUid,structureEnvVariables);
    // projectUid=projectDetails?.launchProjectUid;
    // envUrl=projectDetails?.previewUrl;
    // envUid= projectDetails?.previewUid;

    //check deploy logs
    //   checkDeployStatus(envId,projectId,authToken,org_uid)

    //copy directory
    // copyDirectory(rootPath)

    //clone website 
    // cloneProject(rootPath)

    //change env of website
    updateEnv(rootPath,data)

}