const express = require('express')
const app = express()
const posts = require('./database/db.js')

app.use(express.static('/public'))

app.listen(3000, () => {
    console.log("Server started on port 3000")
  });


  app.get('/posts', (req, res) => {
    res.json({ data: posts, count: posts.length })
  });