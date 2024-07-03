const User = require('../models/user');

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
