const fs = require('fs');

module.exports = async function copyDirectory(path){
    fs.cp(`${path}/testing`, `${path}/testingCopy`, { recursive: true }, (err) => {
        if (err) {
          console.error("Error in copying directory",err);
        }
      });
}