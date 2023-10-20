const axios = require('axios');

const checkDeployStatus = async(envDeployUid,projectUid,authToken,orgUid)=>{
 console.log("Checking env deploy logs");
    const getDeploymentLogs = (deploymentUid) => {
        return {
          query: `
            query getDeploymentLogs {
              getLogs(deploymentUid: "${deploymentUid}",timestamp: "") {
                deploymentUid
                timestamp
                message
                stage
              }
            }
          `,
        };
      };

      return axios.post(
        'https://app.contentstack.com/launch-api/logs/graphql',
        JSON.stringify(getDeploymentLogs(envDeployUid)),
        {
            headers:{
            "Content-Type": "application/json",
            authtoken:`${authToken}`,
            organization_uid:`${orgUid}`,
            "X-Project-Uid":`${projectUid}`, 
          }
        }
      )
      .then(
        async(res)=>{
           let deployStatus = await res.data;

            console.log("LAUNCH ENV deploy: Response Status",res.status);
            
            deployStatus.data.getLogs.map(log =>{
              console.log(`MESSAGE LOGS for Env ${envDeployUid}:`,log.message)
            })
            
            return res.status
        }
      )
      .catch(err=>{
          console.log("Error in checking deployment status", err);
          // notifySlackChannel(orgUid,projectUid,err,'DEPLOY')
          return err
      })
}

module.exports = checkDeployStatus;