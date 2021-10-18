const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.method === "GET" && req.url === "/") {
    const homeFilePath = "./helloworld.html";
    const homeFileContents =  fs.readFileSync(homeFilePath);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(homeFileContents);
    return;
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("NOT FOUND");
});

const port = 8081;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.close((err) => {
  console.log('server closed')
  process.exit(err ? 1 : 0)
})
