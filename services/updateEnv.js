const dotenv = require("dotenv");
const { existsSync } = require("fs");
const fs = require("fs");

module.exports = async function updateEnv(rootPath, data) {
    console.log("UPDATE ENV")
//   try {
//     console.log("update env file", data);
//     await process.chdir(`${rootPath}/${data.application_id}/`);

//     const fileData = `
//     CONTENTSTACK_API_KEY=${data.api_key}
//     CONTENTSTACK_DELIVERY_TOKEN=${data.delivery_token}
//     CONTENTSTACK_ENVIRONMENT=${data.cs_env}
//     CONTENTSTACK_MANAGEMENT_TOKEN=${data.management_token}
//     CONTENTSTACK_API_HOST=${data.api_host}
//     CONTENTSTACK_APP_HOST=${data.app_host}
//     CONTENTSTACK_LIVE_PREVIEW=false
//     CONTENTSTACK_LIVE_EDIT_TAGS=false
//     NEXT_PUBLIC_HOSTED_URL=http://localhost:3000
//     `;
//     fs.writeFile(
//       `${rootPath}/e_commerce/nextjs-framework-cs/.env`,
//       fileData,
//       (err, res) => {
//         if (err) console.log("Error:", err);
//         console.log("Success:", res);
//       }
//     );
//   } catch (error) {
//     console.log("Error in updating Env of website", error);
//   }

  return new Promise(async(resolve, reject) => {
    await process.chdir(`${rootPath}/${data.application_id}/`);

    const fileData = `
    CONTENTSTACK_API_KEY=${data.api_key}
    CONTENTSTACK_DELIVERY_TOKEN=${data.delivery_token}
    CONTENTSTACK_ENVIRONMENT='main'
    CONTENTSTACK_MANAGEMENT_TOKEN=${data.management_token}
    CONTENTSTACK_API_HOST='api.contentstack.io'
    CONTENTSTACK_APP_HOST='app.contentstack.com'
    CONTENTSTACK_LIVE_PREVIEW=false
    CONTENTSTACK_LIVE_EDIT_TAGS=false
    NEXT_PUBLIC_HOSTED_URL=http://localhost:3000
    `;

        if(existsSync(`${rootPath}/${data.application_id}/nextjs-framework-cs/.env`)){
            console.log("UPDATE ENV FILE")
            await fs.writeFile(
                `${rootPath}/${data.application_id}/nextjs-framework-cs/.env`,
                fileData,
                (err, res) => {
                  if (err) console.log("Error:", err);
                  console.log("Success:", res);
                }
              );
              resolve()
        }      
else{
    console.log("ENV does not exist");
    reject()
}
  
   
  })
};
