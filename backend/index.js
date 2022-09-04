const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//server
app.listen(() => {
	console.log(`[+] Server listening on port ${PORT}`)
})

