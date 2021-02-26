// const fs = require("fs");
// const path = require('path');
// const axios = require("axios").default;
import fs from 'fs'
import path from 'path'
import axios from 'axios'
// fileUrl: the absolute url of the image or video you want to download
// downloadFolder: the path of the downloaded file on your machine
const downloadFile = async (fileUrl, downloadFolder) => {
  // Get the file name
  const fileName = path.basename(fileUrl);

  // The path of the downloaded file on our machine
  const localFilePath = path.resolve(__dirname, downloadFolder, fileName);
  try {
    const response = await axios({
      method: "GET",
      url: fileUrl,
      responseType: "stream",
    });

    await response.data.pipe(fs.createWriteStream(localFilePath));
    console.log("Successfully downloaded file!");
  } catch (err) {
    throw new Error(err);
  }
};

const IMAGE_URL = 'https://www.kindacode.com/wp-content/uploads/2021/01/test.jpg';
downloadFile(IMAGE_URL, 'download');