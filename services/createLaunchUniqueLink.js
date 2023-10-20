const axios = require('axios');

const createUniqueLaunchLink = async(authtoken,org_uid)=>{
  console.log("Creating Unique Launch Link",org_uid, process.env.LAUNCH_BASE_API)
 
  const createSignedUpload = ()=>{
    return {
        query: `
        mutation CreateSignedUploadUrl {
          createSignedUploadUrl(secured:true) {
            expiresIn
            uploadUid
            uploadUrl
            fields {
              formFieldKey
              formFieldValue
            }
          }
        }  
        `,
      };
    }
  

  return axios.post(
    `https://app.contentstack.com/launch-api/manage/graphql`,
    JSON.stringify(createSignedUpload()),
    {
      headers: {
        "Content-Type": "application/json",
        authtoken: `${authtoken}`,
        organization_uid: `${org_uid}`,
      }
    }
    
  )
  .then(async (data)=>{
    const parsedcreateSignedUploadtResponse =  await data.data;
     console.log("SIgneddata",await data.data)

        let signedUploadData= parsedcreateSignedUploadtResponse?.data?.createSignedUploadUrl;
     
        
        return signedUploadData;
  }
  )
  .catch( err => {
      console.log("Error creating unique launch link",err)
  })
    
}

  module.exports = createUniqueLaunchLink;