const db = require('../db/queries');

function addMessageGet (req, res) {
	res.render("new", { title: "New Message" });
}

async function addMessagePost (req, res) {
	const { username, message } = req.body;
	await db.insertMessage(username, message, new Date());
	res.redirect("/");
}

module.exports = {
	addMessageGet,
	addMessagePost
}