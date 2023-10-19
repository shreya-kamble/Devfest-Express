const createLaunchProject = require("./services/createLaunchProject");
const createZip = require("./services/createZip");
const deploy = require("./services/deploy");

console.log("Lambda");

exports.handler = async (event, context) => {

const data ={
  "prompt": "",
  "application_name": "",
  "application_id": "",
  "api_key": "blt90c7c650e788ea77",
  "management_token": "cs5eb5af231497c26b1f0a7625",
  "delivery_token": "cs3d55248f6deb403e2b5b7938",
  "content_type": {
      "content_type": {
          "title": "home",
          "description": "",
          "options": {
              "is_page": false,
              "singleton": true,
              "sub_title": [],
              "title": "title"
          },
          "schema": [
              {
                  "data_type": "text",
                  "display_name": "Title",
                  "field_metadata": {
                      "_default": true
                  },
                  "mandatory": true,
                  "uid": "title",
                  "unique": true
              },
              {
                  "data_type": "text",
                  "display_name": "URL",
                  "uid": "url",
                  "field_metadata": {
                      "_default": true
                  },
                  "multiple": false,
                  "unique": false,
                  "mandatory": true,
                  "non_localizable": false
              }
          ],
          "uid": "home"
      },
      "prevcreate": true
  },
  "entry": {
      "entry": {
          "title": "home",
          "url": "/home",
          "tags": []
      }
  },
  "number_of_pages": 1,
  "page_sequence": {
      "home": []
  },
  "page_sequence_content": {}
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