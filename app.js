require("dotenv").config();
const fs = require("node:fs")
const express = require("express");
const path = require("node:path");
const indexController = require('./controllers/indexController');
const newController = require('./controllers/newController');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", indexController.getMessages);

app.get("/new", newController.addMessageGet);
app.post("/new", newController.addMessagePost);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}!`)
});