const express = require("express"),
      app = new express();

app.use("/header", function(req, res, next) {
  res.set("Link", '</header/sw.js>; rel="serviceworker"; scope="/header/"');
  next();
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log("Application is running on localhost:3000");
});
