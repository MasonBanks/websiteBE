const express = require('express')
const router = express.Router();
const Post = require('../models/Post');
const { remove } = require('../models/Post');


// GET ALL POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err })
  }
});

// SUBMIT POST
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })
  try {
    const savedPost = await post.save()
    res.json(savedPost);
  } catch (err) {
    res.json({
      message: err
    })
  }
})

// SPECIFIC POST
router.get('/:postID', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (err) {
    res.json({ message: err });
  }
})

// DELETE SPECIFIC POST
router.delete('/:postID', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postID })
    res.json(removedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

// UPDATE SPECIFIC POST
router.patch('/:postID', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postID },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router;