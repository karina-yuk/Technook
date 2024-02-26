const router = require("express").Router();
const { User, Post, Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comments.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
            date_created: new Date(),
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const commentData = await Comments.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: Post,
                    attributes: ["id", "title", "content", "date_created"],
                },
            ],
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render("homepage", {
            comments,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;