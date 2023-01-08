const router = require('express').Router();

const {
    createComment
} = require('../controllers/comments.controller');

router.post('/create-comment', createComment);

module.exports = router;