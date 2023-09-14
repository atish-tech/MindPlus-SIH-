const mongoose = require('mongoose');

const messageModels = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reciver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsChater'
    },
}, {
    timeStamp: true
});

const Message = mongoose.Model('Message' , messageModels);
module.exports = Message