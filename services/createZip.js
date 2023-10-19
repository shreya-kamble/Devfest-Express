const fs = require('fs');
const { zip } = require('zip-a-folder') ;

module.exports =  async function createZip(sourceDir, outputFilePath){
console.log(sourceDir, outputFilePath);

    try {
        await zip(sourceDir, outputFilePath);
    } catch (error) {
        console.log("err",error);
    }
    }
