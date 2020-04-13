const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

require("./Routes/apiRoute.js")(app);
require("./Routes/htmlRoute.js")(app);

app.listen(PORT, function() {

    console.log("App listening on PORT " + PORT);
  });