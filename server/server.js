const express = require('express')
const app = express()
const connectDb = require("./config/database")
const notesRoutes = require('./routes/notesRoutes')

app.use(express.json())
app.use('/', notesRoutes)

//HomePage
app.get('/', (req, res) => {
    res.send("Hello Kid")
})

//GetUser
app.get('/login/:user', (req, res) => {
    res.send("Hellllo")
})

//Login
app.post('/login', (req, res) => {
    res.send("hello")
})



const port = 3000
connectDb()
    .then(() => {
        console.log("sucessful connection")
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch(err => console.log(err))