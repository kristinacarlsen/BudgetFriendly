//Required External Modules
const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
require("dotenv").config();

//App Variables
const app = express();
const port = process.env.PORT || "3000";

app.use("/", routes);
app.use(bodyParser.urlencoded({ extended: true }));

//App Configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Routes Definitions
// app.get("/", (req, res) => {
//   res.send("This is your budget");
// });

//Server Activation
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
