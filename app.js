const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.status(200).send('Corey Steimel')
})

app.get('/my-birthday', (req, res) => {
    res.status(200).send('June 23')
})

app.get('/date-of-birth', (req, res) => {
    res.status(301).send('The URL of the requested resource has been changed permanently. The new URL is:<br><br>localhost:4000/my-birthday')
})

app.get('/members-only', (req, res) =>{
    res.status(402).send("PAYMENT REQUIRED")
})

app.get('*', (req, res) => {
    res.status(404).send('Page not found.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})