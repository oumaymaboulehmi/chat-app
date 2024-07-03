const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController');

router.post('/', conversationController.newConversation);
router.get('/:userId', conversationController.getConversations);

module.exports = router;
