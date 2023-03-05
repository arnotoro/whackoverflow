const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SnippetSchema = new Schema({
    title: String,
    code: String,
    userID: String,
    userName: String,
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{
        userID: String,
        userName: String,
        comment: String,
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model('Snippet', SnippetSchema);