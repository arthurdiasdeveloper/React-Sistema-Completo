"use strict";
exports.__esModule = true;
require("reflect-metadata");
var express_1 = require("express");
var routes_1 = require("./routes");
require("./database");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(routes_1["default"]);
/* app.get ('/', (request, response )=>{
    return response.json({message: 'Hello World!'});
}); */
app.listen(3333, function () {
    console.log('Server started on port 3333!');
});
