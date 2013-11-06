var express = require("express");
var app = express();

app.use("/public", express.static("public"));

var port = process.env.PORT || 5000;

app.listen(port, function() {
	console.log("Listening on port 7575");
});
