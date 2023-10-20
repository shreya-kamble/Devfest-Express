const axios = require('axios');


const createLaunchProject = async(authtoken,management_token,delivery_token,api_key,org_uid,launchUploadUid,structureEnvVariables)=>{
  
  console.log("Creating Launch project for uid:",launchUploadUid)

let launchProjectUid, previewUrl,previewUid;

const previewEnv =[
  { key: 'CONTENTSTACK_API_KEY', value: `${api_key}` },
  { key: 'CONTENTSTACK_DELIVERY_TOKEN', value: `${delivery_token}` },
  { key: 'CONTENTSTACK_MANAGEMENT_TOKEN', value: `${management_token}` },
  { key: 'CONTENTSTACK_REGION', value: `NA` },
  { key: 'CONTENTSTACK_ENVIRONMENT', value: "preview" },
  { key: 'CONTENTSTACK_BRANCH', value: `main` },
  { key: 'CONTENTSTACK_LIVE_PREVIEW', value: 'false' },
  { key: 'CONTENTSTACK_LIVE_EDIT_TAGS', value: 'true' },
  { key: 'DEFAULT_LOCALE', value: "en-us" },
  { key: 'CONTENTSTACK_HOST', value: `api.contentstack.io` },
  { key: 'CONTENTSTACK_APP_HOST', value: `app.contentstack.com` },
  { key: 'CONTENTSTACK_API_HOST', value: `api.contentstack.io` }

]

const createGitProviderProjectMutation = () => {
return {
query: `
mutation createGitProviderProject {
importProject(
project: {
  name: "Hack Fusion Five"
  projectType: "FILEUPLOAD"
  fileUpload: {
    uploadUid: "${launchUploadUid}"
  },
  cmsStackApiKey: "${api_key}"
  description: ""
  environment: {
    name: "prod"
    description: ""
    buildCommand:"npm run build"
    frameworkPreset: "NEXTJS"
    outputDirectory: ".next"
    environmentVariables: ${structureEnvVariables(previewEnv)}
    uploadUid: "${launchUploadUid}"
  }
}
) {
  name
  uid
  createdAt
  environments {
    deployments(first: 1, after: "", sortBy:"createdAt") {
      edges {
        node {
          deploymentUrl
          uid
        }
      }
    }
  }
} 
}
`,
};
};

return axios.post(
    `https://app.contentstack.com/launch-api/manage/graphql`, 
    JSON.stringify(createGitProviderProjectMutation()), 
   {
    headers: {
        "Content-Type": "application/json",
        authtoken:  `${authtoken}`,
        organization_uid: `${org_uid}`,
        },
   }
    )
    .then(
        async(res)=>{
           const proj = await res.data;
            console.log("LAUNCH PROJECT CREATED",res.status);

            launchProjectUid= proj?.data?.importProject?.uid;
            previewUrl=proj?.data?.importProject?.environments[0].deployments.edges[0].node.deploymentUrl;
            previewUid=proj?.data?.importProject?.environments[0].deployments.edges[0].node.uid;
            
            console.log("-------------------DONECREATING LAUNCH PROJECT--------------------------------");


            return {launchProjectUid,previewUrl,previewUid}
        }
    )
    .catch(err=>{
        console.log("Error Creating Project",err)
    })

    
}

module.exports = createLaunchProject;