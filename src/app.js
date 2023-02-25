const express = require('express')
const config = require('../config')
const { host, port } = config

const app = express()

app.use(express.json())

app.listen(port, () => {
    console.log(`Server running on: ${host}:${port}`)
})