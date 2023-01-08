const connection = require("../db/db.config")
const moment = require('moment')

exports.createComment = (req, res) => {
    try {
        let query = `INSERT INTO comments (text, user_id, created_at, post_id) VALUES (?, ?, ?, ?); `;
        console.log(moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"))

        connection.query(query, [req.body.text, 2, moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"), req.body.post_id], (error, response) => {
            if (!error) {
                res.json({ msg: "comment added successfuly" })
                console.log(response);
            } else {
                console.log(error)
            }
        });
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}