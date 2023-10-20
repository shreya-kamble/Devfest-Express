const checkDeployStatus = require("./checkDeployStatus");
const cloneProject = require("./cloneProject");
const cloneProject1 = require("./cloneProject1");
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
const createGitRepo = require("./createGitRepo");
const installWebsite = require("./installWebsite");
const buildWebsite = require("./buildWebsite");
const storeData = require("./storeData");

module.exports = async function deploy(data, rootPath) {
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
  let {
    api_key,
    management_token,
    delivery_token,
    content_type,
    entry,
    application_id,
    org_uid,
    authToken,
  } = data;

 
  await storeData({
    api_key,
    management_token,
    delivery_token,
    content_type,
    entry,
    application_id,
    org_uid,
    authToken,
    deployed:false
  })
  //create content type in CS stack
    // let ct_response = await createCT(api_key, management_token, content_type);

  //create Entry in CS stack
    // let entry_response = await createEntry(
    //   api_key,
    //   management_token,
    //   (ctId = ct_response.content_type.uid),
    //   entry
    // );

  //create reactapp
  //  await executeChildProcess('createReactApp',application_id);
  // await executeChildProcess('gitInit',"TEST");
  // await executeChildProcess('gitInit',application_id);

  const source = `/Users/shreyakamble/Documents/Devfest-2023/Lambda/${application_id}/nextjs-framework-cs/`;
  const dest = `/Users/shreyakamble/Documents/Devfest-2023/Lambda/tmp1/${application_id}.zip`;

  //clone website
  let clone_response = await cloneProject(rootPath, application_id);
  let clone_response1 = await cloneProject1(rootPath, application_id);


  //change env of website
  await updateEnv(rootPath, data);

// await installWebsite(rootPath,application_id);
// await buildWebsite(rootPath,application_id)
  //create a git repo
  await createGitRepo(application_id,rootPath);

  //  // update git repo with nextjsfolder
  await updateGitRepo("UPDATE", application_id,rootPath);

  //create zip of the website project folder
  await createZip(source, dest)
    .then(() => {
      console.log(`Zip file created`);
    })
    .catch((err) => {
      console.error("Error zipping directory:", err);
    });

  //create unique link to upload zip
  const signedUploadData = await createUniqueLaunchLink(authToken,org_uid);
  let launchUploadUid = signedUploadData?.uploadUid;
  let launchUploadUrl = signedUploadData?.uploadUrl;
  let launchUploadFields = signedUploadData?.fields;

  console.log(launchUploadUrl,launchUploadFields);

//upload zi[]\p
await uploadZip(rootPath,application_id,launchUploadUrl,launchUploadFields)
  //create Launch project
  const projectDetails = await createLaunchProject(
    authToken,
    management_token,
    delivery_token,
    api_key,
    org_uid,
    launchUploadUid,
    structureEnvVariables
  );
  let projectUid = projectDetails?.launchProjectUid;
  let envUrl = projectDetails?.previewUrl;
  let envUid = projectDetails?.previewUid;
  console.log(projectUid,envUrl, envUid);

  //check deploy logs
  checkDeployStatus(envUid, projectUid, authToken, org_uid);

//   return {
//     statusCode: 200,
//     body: {
//       envUrl,
//       envUid,
//     },
//   };
};
