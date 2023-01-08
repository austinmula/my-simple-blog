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
                res.render("index", response)
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

exports.createBlogPostPage = (req, res) => {

    res.send('something')
}

exports.getSingleBlogPost = (req, res) => {
    res.send('something')
}

exports.deleteBlogPost = (req, res) => {
    res.send('something')
}

exports.updateBlogPost = (req, res) => {
    res.send('something')
}

