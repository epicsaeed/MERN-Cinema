const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = process.env.PORT || 3000;

// Database
require('./database/mongoose')


app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

//server
app.listen(() => {
	console.log(`[+] Server listening on port ${PORT}`)
})

