const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');


const uploadZip = async(dirName, application_id,url,fields)=>{
    console.log("-------------------UPLOADING ZIP--------------------------------");
 
  const fileData = await fs.createReadStream(`${dirName}/tmp1/${application_id}.zip`);
console.log(`${dirName}/tmp1/${application_id}.zip`)
  const formData = new FormData();
  fields.map((fieldObject) => {
    formData.append(fieldObject.formFieldKey, fieldObject.formFieldValue);
  });
  formData.append("file", fileData, fileData.name);

  const APIOptions = {
    method: "GET",
    headers: formData.getHeaders(),
    uploadURL: url,
    fields: fields,
  };
 
 return axios.post(url, formData, APIOptions)
    .then( async(data)=>{
      console.log("UPLOAD ZIP STATUS",data.status);
      console.log("-------------------DONE UPLOADING ZIP--------------------------------");
    })
    .catch(
      err=>{console.log("ERROR in uploading ZIP",err);})
   
}


module.exports =  uploadZip;