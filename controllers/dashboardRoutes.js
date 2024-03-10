const router = require("express").Router();
const { User, Post, Comments } = require("../models");
const withAuth = require("../utils/auth");

// Get all posts for dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comments,
          attributes: ["id", "comment_text", "date_created"],
        }
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render the form to create a new post
router.get("/new-post", withAuth, (req, res) => {
  res.render("new-post", {
    logged_in: req.session.logged_in,
  });
});

// Handle the creation of a new post
router.post("/new-post", withAuth, async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = await Post.create({
      title,
      content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render the edit form for a specific post
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    // Assuming you have an 'edit-post' handlebars template
    res.render("edit-post", {
      post: postData.get({ plain: true }),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
