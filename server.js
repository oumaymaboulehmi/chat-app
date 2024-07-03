// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/chat-app')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const conversationRoutes = require('./routes/conversationRoutes');

app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/conversations', conversationRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
