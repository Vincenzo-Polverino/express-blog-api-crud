const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.post('/posts', postController.store)
router.get('/:slug', postController.show)
router.put('/:slug', postController.update)

module.exports = router