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

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "crud");
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, 'This is a Simple text file');
// fs.readFile(filePath, 'utf-8', (err, item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath, 'and file name is apple.txt', (err) => {
//     if(!err) console.log("file is updated");

// fs.rename(filePath,`${dirPath}/fruit.txt`, (err) => {
//     if(!err) console.log("file name is updated")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`);

///// ***** /////

// const express = require("express");
// const app = express();

// app.get("", (req, res) => {
//   console.log("data sent by browser  =>>> ", req.query.name);
//   res.send("Welcome," + req.query.name);
// });

// app.get("/about", (req, res) => {
//   res.send("Welcome, this is About Page");
// });

// app.get("/help", (req, res) => {
//   res.send("Welcome, this is Help Page");
// });
// app.listen(5000);

///// ***** /////

// const express = require("express");
// const app = express();

// app.get("", (req, resp) => {
//   resp.send(`
//   <h1>Welcome, to Home Page</h1><a href="/about">Go to About Page</a>
//   `);
// });

// app.get("/about", (req, resp) => {
//   resp.send(`
//   <input type="text" placeholder="User name" value="${req.query.name}">
//   <button>Click Me</button>
//   <a href="/">Go to Home Page</a>
//   `);
// });

// app.get("/help", (req, resp) => {
//   resp.send([
//     {
//       name: "shivam",
//       email: "shivam@test.com",
//     },
//     {
//       name: "sam",
//       email: "sam@test.com",
//     },
//   ]);
// });
// app.listen(5000);

///// ***** /////

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));

// app.listen(5000);

///// ***** /////

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// // app.use(express.static(publicPath));

// app.get("", (_, resp) => {
//   resp.sendFile(`${publicPath}/index.html`);
// });

// app.get("/about", (_, resp) => {
//   resp.sendFile(`${publicPath}/about.html`);
// });

// app.get("/help", (_, resp) => {
//   resp.sendFile(`${publicPath}/help.html`);
// });

// app.get("*", (_, resp) => {
//   resp.sendFile(`${publicPath}/nopage.html`);
// });

// app.listen(5000);

///// ***** /////

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.set("view engine", "ejs");

// app.get("", (_, resp) => {
//   resp.sendFile(`${publicPath}/index.html`);
// });

// app.get("/profile", (_, resp) => {
//   const user = {
//     name: "Peter",
//     email: "peter@test.com",
//     country: "USA",
//     skills: ["php", "js", "c++", "java", "node"],
//   };
//   resp.render("profile", { user });
// });

// app.get("/login", (_, resp) => {
//   resp.render("login");
// });

// app.get("/about", (_, resp) => {
//   resp.sendFile(`${publicPath}/about.html`);
// });

// app.get("/help", (_, resp) => {
//   resp.sendFile(`${publicPath}/help.html`);
// });

// app.get("*", (_, resp) => {
//   resp.sendFile(`${publicPath}/nopage.html`);
// });

// app.listen(5000);

///// ***** /////

// const express = require("express");
// const app = express();

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Please provide age");
//   } else if (req.query.age < 18) {
//     resp.send("You can not access this page");
//   } else {
//     next();
//   }
// };

// app.use(reqFilter);

// app.get("/", (req, resp) => {
//   resp.send("Welcome to Home Page");
// });

// app.get("/users", (req, resp) => {
//   resp.send("Welcome to Users Page");
// });

// app.listen(5000);

///// ***** /////

const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();

// app.use(reqFilter);

route.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("Welcome to Home Page");
});

app.get("/users", reqFilter, (req, resp) => {
  resp.send("Welcome to Users Page");
});

route.get("/about", reqFilter, (req, resp) => {
  resp.send("Welcome to About Page");
});

route.get("/contact", reqFilter, (req, resp) => {
  resp.send("Welcome to Contact Page");
});

app.use("/", route);

app.listen(5000);
