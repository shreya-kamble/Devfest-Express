const axios = require("axios");

module.exports = async function createCT(
  api_key,
  management_token,
  content_types
) {
  const headers = {
    api_key: `${api_key}`, //'blt73d1b3a4e6da684e'
    authorization: `${management_token}`, //'cs426fc7e971df6a5b6f0e108e'
    "Content-Type": "application/json",
  };

  const data = content_types;

  return new Promise((resolve, reject) => {
    console.log("my header:::::", headers);

    return axios
      .post(
        `https://api.contentstack.io/v3/content_types`,
        JSON.stringify(data),
        {
          headers: headers,
        }
      )
      .then(async (res) => {
        const CT = await res.data;
        console.log("Created Content Type:", res.status, CT);

        resolve(CT);
      })
      .catch((err) => {
        console.log("Error while creating new CT:");
      });
  });
};
