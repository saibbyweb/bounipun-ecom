"use strict";
exports.__esModule = true;
var express = require("express");
console.log('hey from esbuilds');
var app = express();
var port = 4000;
// const staticFileMiddleware = express.static("frontend");
app.get('/', function (req, res) { return res.send('hi from typescript'); });
app.listen(port, function () { return console.log("ExpressJS server started running on " + port); });
