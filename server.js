const express = require("express");
const path = require("path");

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + "/dist/angular-albumsearch"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/angular-albumsearch/index.html"));
});

app.listen(process.env.PORT || 8080);
