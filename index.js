const createLaunchProject = require("./services/createLaunchProject");
const createZip = require("./services/createZip");
const deploy = require("./services/deploy");

console.log("Lambda");

exports.handler = async (event, context) => {

  const data={
    api_key:'',
    content_type:{},
    entry:{entry:{}},
    prompt:"",

  }

  // const sourceDir = './testing';
  // const outputFilePath = './tmp1/testing.zip';

  // createZip(sourceDir, outputFilePath)
  //   .then((outputFilePath) => {
  //     console.log(`Zip file created at`);
  //   })
  //   .catch((err) => {
  //     console.error('Error zipping directory:', err);
  //   });

  deploy(data,__dirname)
  // for (const index in event.Records) {

  //   let body = JSON.parse(event.Records[index].body);

  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   let resp = {};
  
  //   try {
  //     // switch (event?.requestContext?.resourceId) {
  //     //   case "DELETE /design/{id}":
  //     //     resp = await deleteAPI(event);
  //     //     break;
  //     //   case "GET /design/{id}":
  //     //     resp = await readAPI(event)
  //     //     break;
  //     //   case "GET /design":
  //     //     resp = await readAllAPI(event);
  //     //     break;
  //     //   case "PUT /design":
  //     //     resp = await updateAPI(event)
  //     //     break;
  //     //   case "POST /design":
  //     //     resp = await createAPI(event)
  //     //     break;
  //     //   default:
  //     //     throw new Error(`Unsupported route: "${event?.requestContext?.resourceId}"`);
  //     // }
      
  //   } catch (err) {
  //     return {
  //       statusCode: 400,
  //       body: err?.message || "something went wrong",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //   } 
    
  //   return {
  //     ...resp,
  //     headers
  //   } 

  // }
};