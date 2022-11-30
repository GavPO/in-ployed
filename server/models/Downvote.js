const { Schema } = require("mongoose");

const downvoteSchema = new Schema({
    userId: {
        type: String,
    }
});

module.exports = downvoteSchema;