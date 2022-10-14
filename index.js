// const http = require("http");
// const data = require("./data.js");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "application\json" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(5000);

///// ***** /////

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");

// for(let i = 0; i < 5; i++){
// fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file");
// }

// fs.readdir(dirPath, (err, files) => {
//   files.forEach((item) => {
//     console.log("file name is ", item);
//   });
// });

///// ***** /////

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, 'This is a Simple text file');
// fs.readFile(filePath, 'utf-8', (err, item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath, 'and file name is apple.txt', (err) => {
//     if(!err) console.log("file is updated");
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`, (err) => {
//     if(!err) console.log("file name is updated")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`);