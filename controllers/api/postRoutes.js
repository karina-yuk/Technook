const router = require("express").Router();
const { User, Post, Comments } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Post,
          attributes: ["id", "title", "content", "date_created"],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one post by ID
router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comments,
          attributes: [
            "id",
            "comment_text",
            "date_created",
            "user_id",
            "post_id",
          ],
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("post", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update a post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const [updatedRows] = await Post.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (updatedRows === 0) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json({ message: "Post updated successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a post by ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedRows = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (deletedRows === 0) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json({ message: "Post deleted successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
