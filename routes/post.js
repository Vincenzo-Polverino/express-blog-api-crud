const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.post('/', postController.store)
router.get('/:slug', postController.show)
router.put('/:slug', postController.update)
router.delete('/:slug', postController.destroy)

module.exports = router