const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI);


require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);

app.listen(PORT, ()=> {
    console.log(`${PORT} is listening`);
})