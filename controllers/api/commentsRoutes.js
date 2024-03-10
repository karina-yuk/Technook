const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a new comment on a post
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a comment on a post by ID
router.delete("/:id", withAuth, async (req, res) => {
  const commentId = parseInt(req.params.id);

  try {
    const deletedComment = await Comments.findByPk(commentId);

    if (!deletedComment) {
      res.status(404).json({ error: "Comment not found" });
      return;
    }

    await deletedComment.destroy();

    res.status(200).json({ message: "Comment deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
