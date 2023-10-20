const axios = require('axios')

module.exports = async function StoreData(data){

    return new Promise((resolve, reject) => {
        axios
      .post(
        `https://ri3gbpguvj.execute-api.ap-south-1.amazonaws.com/design`,
        {...data},
        {}
      )
      .then(async (res) => {
        const CT = await res.data;
        console.log("Storig Data:", res.status, CT);

        resolve(CT);
      })
      .catch((err) => {
        console.log("Error while cstoring data:", err);
      });
    })

}