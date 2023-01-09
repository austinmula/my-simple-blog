const connection = require("../db/db.config")
const moment = require('moment')

exports.createBlogPost = (req, res) => {
    console.log(req.body)
    try {
        let query = `INSERT INTO posts (title, description, user_id, created_at) VALUES (?, ?, ?, ?); `;
        console.log(moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"))

        connection.query(query, [req.body.title, req.body.description, 2, moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")], (error, response) => {
            if (!error) {
                res.redirect('/')
                console.log(response);
            } else {
                console.log(error)
            }
        });
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}

exports.getAllBlogPosts = (req, res) => {
    try {
        let query = "SELECT * FROM posts";
        connection.query(query, (error, response) => {
            if (!error) {
                res.render("index", {
                    title: "blog posts",
                    posts: response
                })
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

exports.createBlogPostPage = (req, res) => {
    res.render('createpost')
}

exports.getSingleBlogPost = (req, res) => {
    console.log(req.params)
    try {
        let query = "SELECT * FROM post_comments WHERE id = ?";
        connection.query(query, [req.params.id], (error, response) => {
            if (!error) {
                res.render("post", {
                    post: response[0],
                    comments: response
                })
            } else {
                console.log(error)
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

exports.deleteBlogPost = (req, res) => {
    console.log(req.params)
    try {
        let query = "DELETE * FROM posts WHERE id = ?";
        connection.query(query, [req.params.id], (error, response) => {
            if (!error) {
                res.redirect('/')
            } else {
                console.log(error)
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

exports.updateBlogPost = (req, res) => {
    // res.send('something')
    try {
        let query = `UPDATE posts SET title = ?, description= ? WHERE id = ?; `;

        connection.query(query, [req.body.title, req.body.description, req.body.post_id], (error, response) => {
            if (!error) {
                res.redirect('/')
                console.log(response);
            } else {
                console.log(error)
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

exports.getEditBlogPage = (req, res) => {
    // console.log(req.params)
    try {
        let query = "SELECT * FROM posts WHERE id = ?";
        connection.query(query, [req.params.id], (error, response) => {
            if (!error) {
                res.render("editpost", {
                    post: response[0],
                })
            } else {
                console.log(error)
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}
