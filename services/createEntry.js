const axios = require('axios');

module.exports = async function createCT(api_key,management_token,entry){

    const headers = {
         api_key: `${api_key}`, //'blt73d1b3a4e6da684e'
         authorization: `${management_token}`, //'cs426fc7e971df6a5b6f0e108e'
         'Content-Type': 'application/json' 
        }

    const params = {
        locale_code : 'en-us'
    }
    // const data = {
    //     "entry": {
    //         "title": "example 1",
    //         "url": "/example"
    //     }
    // }

    const data = entry

    return new Promise((resolve, reject) => {
        return axios.post(
            `https://stag-app.csnonprod.com/v3/content_types/${ctId}/entries`, 
            JSON.stringify(data),
            {
             params: params,
             headers: headers
            }
        )
        .then(
          ( async res =>{
             const CT = await res.data;
             console.log("Created New Entry:", res.status,CT);
        
             return CT
           })
        )
        .catch(err=>{
                console.log("Error while creating new Entry:",err)
        }
        )
    })
}