const express = require('express')
const app = express()
const postRoutes = require('./routes/post')

app.use(express.static('/public'))
app.use(express.json());
app.listen(3000, () => {
    console.log("Server started on port 3000")
});

app.use('/posts', postRoutes)
app.use(express.json())