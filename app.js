const express = require('express')
const mrouter = require('./routes/mroutes')
const app = express()
const path = require("node:path");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(mrouter)

app.listen(5000,()=>{
    console.log('Express server listening on port 5000')
})