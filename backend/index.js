const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3001
const RoutingUser = require('../backend/routes/user')


app.use(bodyParser.json())
// app.use('/', RouteUser)

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${3001}`)
}) 