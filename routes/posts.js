const router = require('express').Router();

const {
    createBlogPost, getEditBlogPage, getAllBlogPosts, getSingleBlogPost, deleteBlogPost, createBlogPostPage, updateBlogPost
} = require('../controllers/posts.controller');


router.post('/create', createBlogPost);
router.get('/create', createBlogPostPage);
router.get('/', getAllBlogPosts);
router.get('/post/:id', getSingleBlogPost);
router.delete('/:id', deleteBlogPost);
router.put('/edit-form', updateBlogPost);
router.get('/edit/:id', getEditBlogPage);

module.exports = router;


