const express = require('express')
const app = express()
const posts = require('./database/db.js')

app.use(express.static('/public'))

app.listen(3000, () => {
    console.log("Server started on port 3000")
});


app.get('/posts', (req, res) => {
    res.json(
        {
            data: posts,
            count: posts.length
        })
});

app.get('/posts/:slug', (req, res) => {

  
    const post = posts.find((post) => post.slug.toLowerCase() === req.params.slug)
    if (!post) {
      return res.status(404).json({ error: "Nessun post trovato" })
    }
    return res.status(200).json({ data: post })
  });