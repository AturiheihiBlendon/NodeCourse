// Import the http module
const http = require("http");

// Import the file system module
const fs = require("fs");

// Create a server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  /*
  switching btn different pages (Basic routing)
  */

  let path = "./views/";
  switch (req.url) {
    case "/index":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  /*
  read an html file
  And send it to the browser
  */

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end(); // prevent browser from hanging incase an error is logged
    } else {
      //res.write(data);
      res.end(data); // send response and end
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening at port 3000");
});
