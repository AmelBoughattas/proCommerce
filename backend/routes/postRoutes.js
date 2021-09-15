/* const router = require('express').Router();
const postController =require('../controller/postController')
const {tokenMiddleware, checkAdmin} =require('../middleware/tokenMiddleware')

router.get('/posts', postController.getAllPosts)
router.get('/myposts',tokenMiddleware, postController.getMyPosts)
router.delete('/deletepost/:id',tokenMiddleware,checkAdmin, postController.deletePost)
router.post('/addpost', tokenMiddleware, postController.addPost)
router.put('/updatepost/:id',tokenMiddleware,checkAdmin, postController.updatePost)

module.exports = router */