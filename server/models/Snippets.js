const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SnippetSchema = new Schema({
    title: String,
    code: String,
    date: {
        type: Date,
        default: Date.now
    },
    user: Number
});

module.exports = mongoose.model('Snippet', SnippetSchema);