const posts = require('../database/db.js')

const index = (req, res) => {
    res.json({ 
        data: posts, 
        count: posts.length 
    })
  }

  const show = (req, res) => {
  
    const post = posts.find((post) => post.slug.toLowerCase() === req.params.slug)
    if (!post) {
      return res.status(404).json({ error: "Nessun post trovato" })
    }
    return res.status(200).json({ data: post })
  }




  module.exports = {
    index,
    show
  }