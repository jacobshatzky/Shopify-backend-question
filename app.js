const express = require("express");
const app = express();

var http = require("http").createServer(app);
const port = 9999;

app.use("/static", express.static("./static/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //res.send("Hello, World!");
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
