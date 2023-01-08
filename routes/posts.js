const router = require('express').Router();

const {
    createBlogPost, updateBlogPost, getAllBlogPosts, getSingleBlogPost, deleteBlogPost, createBlogPostPage
} = require('../controllers/posts.controller');


router.post('/create', createBlogPost);
router.get('/create', createBlogPostPage);
router.get('/', getAllBlogPosts);
router.get('/:id', getSingleBlogPost);
router.delete('/:id', deleteBlogPost);
router.put('/:id', updateBlogPost);

module.exports = router;


