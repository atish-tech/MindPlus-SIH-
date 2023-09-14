const mongoose = require('mongoose')

const chatModel = mongoose.Schema({
    chatName: { type: String },
    isGroup: { type: Boolean },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: message
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timeStamp: true
});

const Chat = mongoose.Model('Chat', chatModel);
module.exports = Chat