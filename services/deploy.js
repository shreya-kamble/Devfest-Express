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
const createGitRepo = require("./createGitRepo");

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
    content_type,
    entry,
    application_id,
    org_uid,
    authToken,
  } = data;
  //create content type in CS stack
  //   let ct_response = await createCT(api_key, management_token, content_type);

  //create Entry in CS stack
  //   let entry_response = await createEntry(
  //     api_key,
  //     management_token,
  //     (ctId = ct_response.content_type.uid),
  //     entry
  //   );

  //create reactapp
  //  await executeChildProcess('createReactApp',application_id);
  // await executeChildProcess('gitInit',"TEST");
  // await executeChildProcess('gitInit',application_id);

  // const sourceDir = './${application_id}';
  // const outputFilePath = `./tmp1/${application_id}.zip`;

  //upload zi[]\p
  //await uploadZip(__dirname,launchUploadUrl,launchUploadFields)

  //copy directory
  // copyDirectory(rootPath)

  //clone website
  let clone_response = await cloneProject(rootPath, application_id);

  //change env of website
  await updateEnv(rootPath, data);

  //create a git repo
  await createGitRepo(application_id);

  //  // update git repo with nextjsfolder
  await updateGitRepo("UPDATE", application_id);

  //create zip of the website project folder
  await createZip(source, dest)
    .then((outputFilePath) => {
      console.log(`Zip file created at`);
    })
    .catch((err) => {
      console.error("Error zipping directory:", err);
    });

  //create unique link to upload zip
  const signedUploadData = await createUniqueLaunchLink();
  launchUploadUid = signedUploadData?.uploadUid;
  launchUploadUrl = signedUploadData?.uploadUrl;
  launchUploadFields = signedUploadData?.fields;

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
  projectUid = projectDetails?.launchProjectUid;
  envUrl = projectDetails?.previewUrl;
  envUid = projectDetails?.previewUid;

  //check deploy logs
  checkDeployStatus(envId, projectId, authToken, org_uid);

  return {
    statusCode: 200,
    body: {
      envUrl,
      envUid,
    },
  };
};
