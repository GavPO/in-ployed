const { Schema } = require("mongoose");

const upvoteSchema = new Schema({
    userId: {
        type: String,
    }
});

module.exports = upvoteSchema;