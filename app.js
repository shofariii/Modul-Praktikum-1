const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req);
});
server.listen(3000);

const http = require("http");
const routes = require("./routes.js");
const server = http.createServer(routes.handle);
server.listen(3000);

const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app); server.listen(5000);

