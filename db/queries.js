const pool = require("./pool");

async function getMessages() {
	const { rows } = await pool.query("SELECT * FROM messages");
	return rows;
}

async function insertMessage(username, message, date) {
	await pool.query("INSERT INTO messages (username, message, date) VALUES ($1, $2, $3);", [username, message, date]);
}

module.exports = {
	getMessages,
	insertMessage
}