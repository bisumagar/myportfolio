import Message from '../models/Message.js';

// @desc    Submit a contact form message
// @route   POST /api/messages
export const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are all required' });
    }
    const saved = await Message.create({ name, email, message });
    res.status(201).json({ message: 'Message sent successfully', data: saved });
  } catch (err) {
    res.status(400).json({ message: 'Failed to send message', error: err.message });
  }
};

// @desc    Get all messages (for the site owner)
// @route   GET /api/messages
 export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch messages', error: err.message });
  }
};



