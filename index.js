const express = require("express");
require("dotenv").config();
const http = require("http");

const app = express();

app.use(express.json({ limit: "500mb" }));

app.get("/", (req, res) => {
  res.send(
    '<div style="padding: 100px;"><h1 style="text-align:center;">Server is running on port 8000</h1></div>'
  );
});

const server = http.createServer(app);

server.listen(8000, "localhost", () => {
  console.log(`Server is running on port 8000`);
});
