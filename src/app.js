const express = require("express");
const app = express();
const home = require("../routes/homeRoute");
const project = require("../routes/projectRoute");
const contact = require("../routes/contactRoute");
const about = require("../routes/aboutRoute");
const err404 = require("../routes/errorRoute");
const path = require("path");

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,"../public")));

app.set("view engine","ejs");

app.use("/",home);
app.use("/project",project);
app.use("/contact",contact);
app.use("/about",about);
app.use("*",err404);



app.listen(port,() =>{
    console.log(`Server is started at port ${port}`);
})