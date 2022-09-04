const mongoose = require('mongoose')
require('dotenv').config()

const username = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD
const url = process.env.MONGO_URL

const uri = `mongodb+srv://${username}:${password}@${url}/?retryWrites=true&w=majority`
try {
	mongoose
		.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(
			() => {
				console.log('[+] DB connected')
			},
			(err) => {
				console.error('[-] DB connection error', err)
			}
		)
} catch (error) {
	console.log('[-] Could not connect db')
}

var db = mongoose.connection
