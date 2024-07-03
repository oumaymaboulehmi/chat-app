const Conversation = require('../models/conversation');

exports.newConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const newConversation = new Conversation({
      members: [senderId, receiverId]
    });
    const savedConversation = await newConversation.save();
    res.status(201).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getConversations = async (req, res) => {
  const { userId } = req.params;

  try {
    const conversations = await Conversation.find({
      members: { $in: [userId] }
    });
    res.status(200).json(conversations);
  } catch (err) {
    res.status(500).json(err);
  }
};
