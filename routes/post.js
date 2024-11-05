const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.get('/:slug', postController.show)
router.post("/posts", postController.store)


module.exports = router