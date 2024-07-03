const Message = require('../models/message');

exports.sendMessage = async (req, res) => {
  const { conversationId, sender, text } = req.body;

  try {
    const newMessage = new Message({ conversationId, sender, text });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getMessages = async (req, res) => {
  const { conversationId } = req.params;

  try {
    const messages = await Message.find({ conversationId });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};
