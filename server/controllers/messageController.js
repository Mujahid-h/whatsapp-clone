import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);

    await newMessage.save();

    // Update the conversation with the latest message
    const conversation = await Conversation.findById(req.body.conversationId);
    conversation.message = req.body.text;
    await conversation.save();

    return res.status(200).json("Message has been sent successfully!");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getMessages = async (req, res) => {
  try {
    let messages = await Message.find({ conversationId: req.params.id });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
