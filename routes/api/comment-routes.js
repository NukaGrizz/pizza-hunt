const router = require('express').Router();
const { addComment , removeComment, addReply, removeReply } = require('../../controllers/comment-controller')

// add comment route /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// add reply or delete comment route /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').put(addReply).delete(removeComment);

// delete reply
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;