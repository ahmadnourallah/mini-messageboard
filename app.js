require("dotenv").config();
const fs = require("node:fs")
const express = require("express");
const path = require("node:path");
const PORT = process.env.PORT || 3000;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index", { title: "Mini Messageboard", messages })
});

app.get("/new", (req, res) => {
	res.render("new", { title: "New Message" });
})

app.post("/new", (req, res) => {
	messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
	res.redirect("/");
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}!`)
});