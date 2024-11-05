const express = require('express')
const app = express()
const posts = require('./database/db.js')

app.use(express.static('/public'))

app.listen(3000, () => {
    console.log("Server started on port 3000")
});


  const postController = require('./controllers/postController');

  app.get('/posts', postController.index);