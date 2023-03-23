const fs = require("fs");

const saveData = async (data, fileName) => {
  const filePath = `./data/${fileName}.json`;
  const fileData = JSON.stringify(data, null, 2);

  fs.writeFile(filePath, fileData, (err) => {
    if (err) throw err;
    console.log(`Data saved to ${filePath}`);
  });
};

module.exports = saveData;
