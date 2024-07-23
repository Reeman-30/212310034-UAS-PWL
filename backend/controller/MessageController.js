import Message from "../model/Message.js";
import Chat from "../model/Chat.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { receiver_id } = req.params;
    const sender_id = req.user._id;

    let chat = await Chat.findOne({
      participants: { $all: [sender_id, receiver_id] },
    });

    // Check if the chat are not created yet
    if (!chat) {
      chat = await Chat.create({
        participants: [sender_id, receiver_id],
      });
    }

    const newMessage = new Message({
      sender_id,
      receiver_id,
      message,
    });

    if (newMessage) {
      chat.messages.push(newMessage._id);
    }

    await Promise.all([chat.save(), newMessage.save()]);

    res.status(200).json({
      status: 200,
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "An error occurred while connecting to the API.",
      error: error.message,
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { receiver_id } = req.params;
    const sender_id = req.user._id;

    const chat = await Chat.findOne({
      participants: { $all: [sender_id, receiver_id] },
    }).populate("messages", "-__v");

    if (!chat) {
      return res.status(200).json([]);
    }

    res.status(200).json({
      status: 200,
      data: chat.messages,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "An error occurred while connecting to the API.",
      error: error.message,
    });
  }
};

export const connect = (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      message: "API Connected!",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "An error occurred while connecting to the API.",
      error: error.message,
    });
  }
};
